import { Node, NodeAPI, NodeContext, NodeDef } from "node-red"
import { config } from "process"
import { 
  Address, 
  AddressType, 
  Command, 
  DALI_FADE_STEP_DURATION_MS, 
  DALI_MAX_FADE_RATE_N, 
  DALI_MIN_FADE_RATE_N,
  fadeRateSteps, 
  MAX_DALI_LEVEL, 
  MIN_DALI_LEVEL, 
  Opcode 
} from "../foxtron-types"
import { foxtronDaliFrame } from "../foxtron-serial-frame"
import { equal } from "assert"

interface FoxtronDaliBallastNodeConfig extends NodeDef {
  name: string,
  addresstype: string,
  addressval: string,
  minlevel: string,
  maxlevel: string,
  faderate: string
}

const SEC_MS = 1000

enum Key {
  LastState = 'LAST_STATE'
}

enum Event {
  Off = 'off',       // Turn off ballast
  Max = 'max',       // Set ballast to Max Level (without fade)
  Toggle = 'toggle', // Tooggle ballast between Off and Max (with fade)
  FadeUp = 'up',     // Begin fade up (stop when max is reached)
  FadeDown = 'down', // Begin fade down (stop when min is reached)
  FadeStop = 'stop', // Stop fading
  SetLevel = 'set',  // Set precise level
  Query = 'query',   // Query ballast status
  Reset = 'reset'    // Reset ballast state after flow initialization 
}

enum FadeAction {
  None,
  Up,
  Down,
  StopRequested
}

type LevelBouds = {
  min: number,
  max: number
}

type ParsedConfig = {
  address: Address,
  levelBounds: LevelBouds,
  fadeRate: number,
  fadeLevelPerStep: number
}

type StoreState = {
  config: ParsedConfig
  level: number,
  isOn: boolean,
  fadeAction: FadeAction,
  fadeStepCntr: number,
  fadeStartLevel: number
}

type SendMsg = (msg: any) => void

const eventWithString = (str: any): Event => {
  if (str && str.event) str = str.event
  if (str && str.topic) str = str.topic
  if (typeof str !== 'string') return Event.Query
  return Object.values(Event).includes(str as Event) ? (str as Event) : Event.Query
}

const intWithPayload = (pld: any): number | null => {
  if (pld && pld.value) pld = pld.value
  if (typeof pld === 'string') pld = parseInt(pld)
  if (typeof pld === 'number' && !isNaN(pld)) return pld
  return null
}

const addressResolv = (config: FoxtronDaliBallastNodeConfig): Address => {
  const addr = {
    type: AddressType.Broadcast,
    value: 0
  }
  if (config && typeof config.addresstype !== 'undefined') {
    const atype = (typeof config.addresstype === 'string') ? parseInt(config.addresstype) : config.addresstype
    if (!isNaN(atype) && Object.values(AddressType).includes(atype as AddressType)) {
      addr.type = atype
      if (addr.type !== AddressType.Broadcast 
        && config.addressval !== null 
        && typeof config.addressval !== 'undefined'
      ) {
        addr.value = (typeof config.addressval === 'string') ? parseInt(config.addressval) : config.addressval
        if (isNaN(addr.value)) {
          addr.value = 0
        }
      }
    }
  }

  return addr
}

const levelBoundsResolv = (config: FoxtronDaliBallastNodeConfig): LevelBouds => {
  const bl = {
    min: parseInt(config.minlevel),
    max: parseInt(config.maxlevel)
  }
  if (typeof bl.min === 'undefined' || isNaN(bl.min) || bl.min < MIN_DALI_LEVEL) bl.min = MIN_DALI_LEVEL
  if (typeof bl.max === 'undefined' || isNaN(bl.max) || bl.max > MAX_DALI_LEVEL) bl.min = MAX_DALI_LEVEL
  return bl
}

const fadeRateResolv = (config: FoxtronDaliBallastNodeConfig): number => {
  let fadeRate = parseInt(config.faderate)
  if (!fadeRate || isNaN(fadeRate) || fadeRate < DALI_MIN_FADE_RATE_N) fadeRate = DALI_MIN_FADE_RATE_N
  if (fadeRate > DALI_MAX_FADE_RATE_N) fadeRate = DALI_MAX_FADE_RATE_N
  return fadeRate
}

const calcFadeLevelsPerStep = (rate: number): number => {
  return (fadeRateSteps(rate) || 1) / SEC_MS * DALI_FADE_STEP_DURATION_MS
}

function parsetConfigEqual(pc1: ParsedConfig, pc2: ParsedConfig): boolean {
  return (
    pc1.fadeRate === pc2.fadeRate 
    && pc1.levelBounds.min === pc2.levelBounds.min
    && pc1.levelBounds.max === pc2.levelBounds.max 
    && pc1.address.type === pc2.address.type
    && (pc1.address.type !== AddressType.Broadcast || pc1.address.value === pc2.address.value)
  )
}

class FoxtronDaliBallast {
  private RED: NodeAPI
  private node: Node
  private pConf: ParsedConfig
  private nctx: NodeContext
  private level!: number
  private isOn!: boolean
  private fadeAction!: FadeAction
  private fadeStepCntr!: number
  private fadeStartLevel!: number

  constructor(RED: NodeAPI, node: Node, config: FoxtronDaliBallastNodeConfig) {
    this.RED = RED
    this.node = node
    RED.nodes.createNode(node, config)

    // Parse node config set in settings pane
    const fr = fadeRateResolv(config)
    this.pConf = {
      address: addressResolv(config),
      levelBounds: levelBoundsResolv(config),
      fadeRate: fr,
      fadeLevelPerStep: calcFadeLevelsPerStep(fr)
    }

    // Load last state and if it's there and config in it doesn't match the parsed one
    // get rid of the last state
    this.nctx = this.node.context()
    this.refreshState()
    
    this.node.on('input', this.onInput.bind(this))
  }

  refreshState() {
    let saved: StoreState | undefined = (this.nctx.get(Key.LastState) as StoreState)
    if (!saved || !saved.config || !parsetConfigEqual(this.pConf, saved.config)) {
      saved = {
        level: 0,
        isOn: false,
        fadeAction: FadeAction.None,
        fadeStepCntr: 0,
        fadeStartLevel: 0,
        config: this.pConf
      }
    }

    this.level = saved.level
    this.isOn = saved.isOn
    this.fadeAction = saved.fadeAction
    this.fadeStepCntr = saved.fadeStepCntr
    this.fadeStartLevel = saved.fadeStartLevel
    
    this.storeState()
  }

  serializeState(): StoreState {
    return {
      level: this.level,
      isOn: this.isOn,
      fadeAction: this.fadeAction,
      fadeStepCntr: this.fadeStepCntr,
      fadeStartLevel: this.fadeStartLevel,
      config: this.pConf
    }
  }

  storeState() {
    this.nctx.set(Key.LastState, this.serializeState())
  }

  // Tick function get called each time some even happen, like:
  // - a message arrived,
  // - a fade timer occured
  private tick(send: SendMsg, evt?: Event, val?: number | null) {
    this.refreshState()

    if (!evt) {
      this.fadeStep(send)
    } else {
      switch (evt) {
        case Event.Off: this.setOff(send); break
        case Event.Max: this.setMax(send); break
        case Event.Toggle: this.toggle(send); break
        case Event.FadeUp: this.startFadeUp(send); break
        case Event.FadeDown: this.startFadeDown(send); break
        case Event.FadeStop: this.stopFade(send); break
        case Event.Reset: this.resetBallastState(send); break
        case Event.Query: this.queryBallastState(send); break
        case Event.SetLevel: this.setLevel(send, val || 0); break
      }
    }

    this.storeState()
  }

  // React to incoming message
  private onInput(msg: any, send: SendMsg, done: () => void) {
    // Event might be in topic or in payload, some events might have value. It's in 
    // payload or payload.value.
    const event = eventWithString(msg.topic || msg.payload)
    const value: number | null = event === Event.SetLevel ? intWithPayload(msg.payload) : null
  
    this.tick(send, event, value)

    msg.payload = this.serializeState()
    delete msg.topic
    send([null, msg])
    
    if (done) done()
  }

  private sendToBallast(send: SendMsg, cmd: Command) {
    send([{
      payload: foxtronDaliFrame(cmd)
    }, null])
  }

  private stopFade(send: SendMsg): boolean {
    if (this.fadeAction === FadeAction.Down || this.fadeAction === FadeAction.Up) {
      this.fadeAction = FadeAction.StopRequested
      this.setLevel(send, this.level)
      return true
    }
    return false
  }
  
  private setOff(send: SendMsg) {
    this.stopFade(send)
  
    this.sendToBallast(send, {
      opcode: Opcode.OFF,
      address: this.pConf.address
    })
  
    this.isOn = false
    this.level = this.pConf.levelBounds.min
  }
  
  private setMax(send: SendMsg) {
    this.stopFade(send)
  
    this.sendToBallast(send, {
      opcode: Opcode.RECALL_MAX_LEVEL,
      address: this.pConf.address
    })
  
    this.isOn = true
    this.level = this.pConf.levelBounds.max
  }
  
  private setMin(send: SendMsg) {
    this.stopFade(send)
  
    this.sendToBallast(send, {
      opcode: Opcode.RECALL_MIN_LEVEL,
      address: this.pConf.address
    })
  
    this.isOn = true
    this.level = this.pConf.levelBounds.min
  }
  
  private toggle(send: SendMsg) {
    this.stopFade(send)
  
    if (!this.isOn || this.level !== this.pConf.levelBounds.max) {
      this.setMax(send)
    } else {
      this.setOff(send)
    }
  }
  
  private startFadeUp(send: SendMsg)  {
    const lact = this.fadeAction
  
    if (!this.isOn) {
      this.setMin(send)
    }
  
    this.fadeAction = FadeAction.Up
    this.fadeStepCntr = 0
    this.fadeStartLevel = this.level
    if (lact === FadeAction.None || lact === FadeAction.StopRequested) {
      this.fadeStep(send)
    }
  }
  
  private startFadeDown(send: SendMsg) {
    const lact = this.fadeAction
  
    if (!this.isOn) {
      this.setMax(send)
    }
  
    this.fadeAction = FadeAction.Down
    this.fadeStepCntr = 0
    this.fadeStartLevel = this.level
    if (lact === FadeAction.None || lact === FadeAction.StopRequested) {
      this.fadeStep(send)
    }
  }
  
  resetBallastState(send: SendMsg) {
    this.stopFade(send)
  
    if (!this.isOn) {
      this.setOff(send)
    } else {
      this.setLevel(send, this.level)
    }
  }
  
  private queryBallastState = (send: SendMsg) => {
    throw new Error('Query Ballast state not implementd')
  }
  
  private setLevel = (send: SendMsg, val: number) => {
    if (this.stopFade(send)) {
      return
    }

    if (val > this.pConf.levelBounds.max) val = this.pConf.levelBounds.max
    if (val !== 0) {
      if (val < this.pConf.levelBounds.min) val = this.pConf.levelBounds.min
    }

    if (val === 0) {
      this.sendToBallast(send, {
        opcode: Opcode.OFF,
        address: this.pConf.address
      })
    } else {
      this.sendToBallast(send, {
        opcode: Opcode.DAPC,
        address: this.pConf.address,
        value: val
      })
    }

    this.level = val
    this.isOn = !!val
  }

  private fadeStep(send: SendMsg) {
    if (this.fadeAction === FadeAction.StopRequested) {
      this.fadeAction = FadeAction.None
      return
    }
  
    const origLevel = this.level
    if (this.fadeAction === FadeAction.Up) {
      this.fadeStepCntr += 1 
      this.level = Math.min(
        this.pConf.levelBounds.max, 
        this.fadeStartLevel + Math.round(this.pConf.fadeLevelPerStep * this.fadeStepCntr)
      )
      this.node.warn(`Ctr: ${this.fadeStepCntr}; Level: ${this.level}`)
      if (origLevel < this.pConf.levelBounds.max) {
        this.sendToBallast(send, {
          opcode: Opcode.UP,
          address: this.pConf.address
        })
      }
    }
    
    if (this.fadeAction === FadeAction.Down) {
      this.fadeStepCntr += 1
      this.level = Math.max(
        this.pConf.levelBounds.min, 
        this.fadeStartLevel - Math.round(this.pConf.fadeLevelPerStep * this.fadeStepCntr)
      )
      if (origLevel > this.pConf.levelBounds.min) {
        this.sendToBallast(send, {
          opcode: Opcode.DOWN,
          address: this.pConf.address
        })
      }
    }
  
    setTimeout(this.tick.bind(this, send), DALI_FADE_STEP_DURATION_MS)
  }
}

export default function main(RED: NodeAPI) {
  RED.nodes.registerType('foxtron-dali-ballast', function(this: Node, config: FoxtronDaliBallastNodeConfig) {
    new FoxtronDaliBallast(RED, this, config)
  })
}
