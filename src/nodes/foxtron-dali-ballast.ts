import { Node, NodeAPI, NodeContext, NodeDef } from "node-red"
import { config } from "process"
import { 
  Address, 
  AddressType, 
  Command, 
  DALI_FADE_STEP_DURATION_MS, 
  DALI_MAX_FADE_RATE_N, 
  DALI_MIN_FADE_RATE_N  ,
  fadeRateSteps, 
  MAX_DALI_LEVEL, 
  MIN_DALI_LEVEL, 
  Opcode 
} from "../foxtron-types"
import { foxtronDaliFrame } from "../foxtron-serial-frame"

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
  Down
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
  state: boolean,
  lastDaliLevel: number // To
}

type SendMsg = (msg: any) => void

// Helper metod to process event from given string or object
// It searches topic and event keys. If they aren't present input string is used instead.
const eventWithString = (str: any): Event => {
  if (str && str.event) str = str.event
  if (typeof str !== 'string') return Event.Query
  return Object.values(Event).includes(str as Event) ? (str as Event) : Event.Query
}

// Helper to parse value from payload
const intWithPayload = (pld: any): number | null => {
  if (pld && pld.value) pld = pld.value
  if (typeof pld.state === 'boolean' && !pld.state) {
    return 0
  }
  if (typeof pld.level === 'number') {
    pld = pld.level
  }
  if (typeof pld === 'string') pld = parseInt(pld)
  if (typeof pld === 'number' && !isNaN(pld)) return pld
  return null
}

// Helper to parse ballast address from editor config
// Usually called only during init
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

// Helper to parse ballast level bounds from editor config
// Usually called only during init
const levelBoundsResolv = (config: FoxtronDaliBallastNodeConfig): LevelBouds => {
  const bl = {
    min: parseInt(config.minlevel),
    max: parseInt(config.maxlevel)
  }
  if (
    typeof bl.min === 'undefined' 
    || isNaN(bl.min) 
    || bl.min < MIN_DALI_LEVEL
  ) bl.min = MIN_DALI_LEVEL
  if (
    typeof bl.max === 'undefined' 
    || isNaN(bl.max) 
    || bl.max > MAX_DALI_LEVEL
  ) bl.min = MAX_DALI_LEVEL
  return bl
}

// Helper to parse fade rate from editor config
// Usually called only during init. The returned fade rate is value from DALI command (1 - 15)
const fadeRateResolv = (config: FoxtronDaliBallastNodeConfig): number => {
  let fadeRate = parseInt(config.faderate)
  if (
    !fadeRate 
    || isNaN(fadeRate) 
    || fadeRate < DALI_MIN_FADE_RATE_N
  ) fadeRate = DALI_MIN_FADE_RATE_N
  if (fadeRate > DALI_MAX_FADE_RATE_N) fadeRate = DALI_MAX_FADE_RATE_N
  return fadeRate
}

// Helper to calculate how many levels should be faded per 1 step. 
// Step is 200 ms, input is fade rate from DALI (1 - 15). It's converted to levels per 
// second and then adjusted to 1 step (200ms)
const calcFadeLevelsPerStep = (rate: number): number => {
  return (fadeRateSteps(rate) || 1) / SEC_MS * DALI_FADE_STEP_DURATION_MS
}

// Helper to check if 2 parsed editor configs are equal
function parsetConfigEqual(pc1: ParsedConfig, pc2: ParsedConfig): boolean {
  return (
    pc1.fadeRate === pc2.fadeRate 
    && pc1.levelBounds.min === pc2.levelBounds.min
    && pc1.levelBounds.max === pc2.levelBounds.max 
    && pc1.address.type === pc2.address.type
    && (pc1.address.type !== AddressType.Broadcast || pc1.address.value === pc2.address.value)
  )
}

// Main class of FoxtronDaliBallast. Each node in Node RED is represented by it's instance
class FoxtronDaliBallast {
  // Interface
  private RED: NodeAPI
  private node: Node
  private nctx: NodeContext

  // Config
  private pConf: ParsedConfig
  
  // Status
  private level!: number
  private isOn!: boolean

  // Fade
  private fadeLoopInterval: any
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

    // Fade loop is allways reset on init. + schedule loop execution
    this.resetFade()
    
    this.node.on('input', this.onInput.bind(this))
    this.node.on('close', this.onClose.bind(this))
  }

  // Refresh node state from the context storage
  // Initialize a default state if there is no saved state or if config changed
  private refreshState() {
    let saved: StoreState | undefined = (this.nctx.get(Key.LastState) as StoreState)
    if (!saved || !saved.config || !parsetConfigEqual(this.pConf, saved.config)) {
      saved = {
        level: 0,
        state: false,
        lastDaliLevel: 0,
        config: this.pConf
      }
    }

    this.level = saved.level > 0 ? saved.level : saved.lastDaliLevel
    this.isOn = saved.state
    
    this.storeState()
  }

  // Return serialized state of the current node
  private serializeState(): StoreState {
    return {
      level: this.isOn ? this.level : 0,
      state: this.isOn,
      lastDaliLevel: this.level,
      config: this.pConf
    }
  }

  // Store serialized state to context storage
  private storeState() {
    const color = this.isOn ? 'green' : 'red'
    this.node.status({ fill: color, shape: "ring", text:`Level: ${this.level}`})
    this.nctx.set(Key.LastState, this.serializeState())
  }

  // Reset fade properties to desired state
  private resetFade(fa?: FadeAction, lvl?: number) {
    if (this.fadeLoopInterval) {
      clearInterval(this.fadeLoopInterval)
      this.fadeLoopInterval = null
    }

    this.fadeAction = (typeof fa === 'undefined') ? FadeAction.None : fa
    this.fadeStepCntr = 0
    this.fadeStartLevel = (typeof lvl === 'undefined') ? 0 : lvl

    if (this.fadeAction !== FadeAction.None) {
      setTimeout(this.fadeLoopTick.bind(this), 1)
      this.fadeLoopInterval = setInterval(
        this.fadeLoopTick.bind(this), 
        DALI_FADE_STEP_DURATION_MS
      )
    }
  }

  // Handle incoming message
  private onInput(msg: any, send: SendMsg, done: () => void) {
    // Refresh state from the context
    this.refreshState()

    console.log(msg)

    // Event might be in topic or in payload, some events might have value. It's in 
    // payload or payload.value.
    const event = eventWithString(msg.payload)
    const value: number | null = event === Event.SetLevel ? intWithPayload(msg.payload) : null

    console.log(`event ${event}, value ${value}`)

    // Handle event
    switch (event) {
      case Event.Off: this.setOff(send); break
      case Event.Max: this.setMax(send); break
      case Event.Toggle: this.toggle(send); break
      case Event.FadeUp: this.startFadeUp(send); break
      case Event.FadeDown: this.startFadeDown(send); break
      case Event.FadeStop: this.stopFade(send); break
      case Event.Reset: this.resetBallastState(send); break
      case Event.Query: this.queryBallastState(send); break
      case Event.SetLevel: this.setLevel(value || 0, send); break
    }

    // Save current/updated state to the context
    this.storeState()

    // Save serialized state to the payload
    msg.payload = this.serializeState()
    delete msg.topic
    send([null, msg])
    
    if (done) done()
  }

  // Clear fade interval when flow has ended in the middle of Fade sequence
  private onClose() {
    this.resetFade()
  }

  // Method called each time Fade interval is fired. It reacts based on FadeAction on the 
  // instance. If None - do nothing, else fade a step Up or Down.
  // To avoid rounding errors there is a step counter and saved original ballast level on
  // the beginning of the fade. Step is calculated as start level +/- levels/step * no. of Steps.
  // Ballast level after step can't be higher reps. lower than ballast bounds.
  //
  // It's important to refresh and store context state because the method is sending
  // commands to ballast.
  private fadeLoopTick() {
    if (this.fadeAction === FadeAction.None) {
      return
    }
  
    this.refreshState()
    const origLevel = this.level

    if (this.fadeAction === FadeAction.Up) {
      this.fadeStepCntr += 1 
      this.level = Math.min(
        this.pConf.levelBounds.max, 
        this.fadeStartLevel + Math.round(this.pConf.fadeLevelPerStep * this.fadeStepCntr)
      )
      if (origLevel < this.pConf.levelBounds.max) {
        this.sendToBallast({
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
      console.log(`step ${this.fadeStepCntr}, level ${this.level}, orig ${origLevel}`)
      console.log(this.pConf.levelBounds)
      if (origLevel > this.pConf.levelBounds.min) {
        this.sendToBallast({
          opcode: Opcode.DOWN,
          address: this.pConf.address
        })
      }
    }

    this.storeState()
  }

  // Method to send command to ballast (first output). If send funciton is not supplied
  // the message originates here and we are going to send it with node.send method.
  private sendToBallast(cmd: Command, send?: SendMsg) {
    if (!send) send = this.node.send.bind(this.node)
    send([{
      payload: foxtronDaliFrame(cmd)
    }, null])
  }

  // Method to stop fading action. 
  // Fade uses Up and Down DALI commands. To sync with calculated level it's forsing it to
  // the ballast.
  // Method returns true if an actual stop of fade sequence needed to be commenced
  private stopFade(send: SendMsg): boolean {
    if (this.fadeAction === FadeAction.Down || this.fadeAction === FadeAction.Up) {
      this.resetFade()
      this.setLevel(this.level, send)
      return true
    }
    return false
  }
  
  // Turn off the ballast
  private setOff(send: SendMsg) {
    this.stopFade(send)
  
    this.sendToBallast({
      opcode: Opcode.OFF,
      address: this.pConf.address
    }, send)
  
    this.isOn = false
    this.level = this.pConf.levelBounds.min
  }
  
  // Set ballast to max level
  private setMax(send: SendMsg) {
    this.stopFade(send)
  
    this.sendToBallast({
      opcode: Opcode.RECALL_MAX_LEVEL,
      address: this.pConf.address
    }, send)
  
    this.isOn = true
    this.level = this.pConf.levelBounds.max
  }
  
  // Set ballast to min level, but keep it turned on
  private setMin(send: SendMsg) {
    this.stopFade(send)
  
    this.sendToBallast({
      opcode: Opcode.RECALL_MIN_LEVEL,
      address: this.pConf.address
    }, send)
  
    this.isOn = true
    this.level = this.pConf.levelBounds.min
  }
  
  // Toggle between max level and off.
  // TODO: select between smooth (using Fade Time) and instant toggle
  private toggle(send: SendMsg) {
    this.stopFade(send)
  
    if (!this.isOn || this.level !== this.pConf.levelBounds.max) {
      this.setMax(send)
    } else {
      this.setOff(send)
    }
  }
  
  // Start fade Up
  private startFadeUp(send: SendMsg)  {
    if (!this.isOn) {
      this.setMin(send)
    }
  
    this.resetFade(FadeAction.Up, this.level)
  }
  
  // Start fade Down
  private startFadeDown(send: SendMsg) {
    if (!this.isOn) {
      this.setMax(send)
    }

    this.resetFade(FadeAction.Down, this.level)
  }
  
  // Set ballast to the state stored in context.
  // Usefull usually after the flow has begun to sync ballast with node state.
  resetBallastState(send: SendMsg) {
    console.log(`Reset ballast`)
    this.stopFade(send)
  
    if (!this.isOn) {
      this.setOff(send)
    } else {
      this.setLevel(this.level, send)
    }
  }
  
  // TODO - query all info about the ballast and return it in structured manner
  private queryBallastState = (send: SendMsg) => {
    throw new Error('Query Ballast state not implementd')
  }
  
  // Set specific level. Uses DACP. If requested level is out of ballast bound min or max 
  // level is used.
  // Level 0 means to switch the ballast off.
  // Difference between cmd Off/Max and setLevel is the transition to level set by setLevel is 
  // smooth (uses DALI Fade Time) where Off/Max is instant.
  private setLevel = (val: number, send: SendMsg) => {
    console.log(`Set level ${val}`)
    if (this.stopFade(send)) {
      return
    }

    if (val > this.pConf.levelBounds.max) val = this.pConf.levelBounds.max
    if (val !== 0) {
      if (val < this.pConf.levelBounds.min) val = this.pConf.levelBounds.min
    }

    if (val === 0) {
      this.sendToBallast({
        opcode: Opcode.OFF,
        address: this.pConf.address
      }, send)
    } else {
      this.sendToBallast({
        opcode: Opcode.DAPC,
        address: this.pConf.address,
        value: val
      }, send)
    }

    this.level = val
    this.isOn = !!val
  } 
}

// Register constructor function with Node-RED
export default function main(RED: NodeAPI) {
  RED.nodes.registerType(
    'foxtron-dali-ballast', 
    function(this: Node, config: FoxtronDaliBallastNodeConfig) {
      new FoxtronDaliBallast(RED, this, config)
    }
  )
}
