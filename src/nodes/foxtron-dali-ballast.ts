import { Node, NodeAPI, NodeContext, NodeDef } from "node-red"
import { config } from "process"
import { Address, AddressType, Command, DALI_FADE_STEP_DURATION_MS, DALI_MAX_FADE_RATE, DALI_MIN_FADE_RATE, MAX_DALI_LEVEL, MIN_DALI_LEVEL, Opcode } from "../foxtron-types"
import { foxtronDaliFrame } from "../foxtron-serial-frame"

interface FoxtronDaliBallastNodeConfig extends NodeDef {
  topic: string
}

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

type State = {
  address: Address,
  levelBounds: LevelBouds,
  levelsPerFadeStep: number
  level: number,
  isOn: boolean,
  fadeAction: FadeAction
}

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

const addressResolv = (config: any): Address => {
  const addr = {
    type: AddressType.Broadcast,
    value: 0
  }
  if (config && typeof config.addresstype !== 'undefined') {
    if (typeof config.addresstype === 'string') config.addresstype = parseInt(config.addresstype)
    if (config.addresstype !== null 
      && !isNaN(config.addresstype) 
      && Object.values(AddressType).includes(config.addresstype as AddressType)
    ) {
      addr.type = config.addresstype as AddressType
      if (addr.type !== AddressType.Broadcast 
        && config.addressval !== null 
        && typeof config.addressval !== 'undefined'
      ) {
        if (typeof config.addressval === 'string') config.addressval = parseInt(config.addressval)
        if (!isNaN(config.addressval)) {
          addr.value = config.addressval
        }
      }
    }
  }

  return addr
}

const levelBoundsResolv = (config: any): LevelBouds => {
  const bl = {
    min: config.minlevel,
    max: config.maxlevel
  }
  if (typeof bl.min === 'string') bl.min = parseInt(bl.min)
  if (typeof bl.max === 'string') bl.max = parseInt(bl.max)
  if (typeof bl.min === 'undefined' || isNaN(bl.min) || bl.min < MIN_DALI_LEVEL) bl.min = MIN_DALI_LEVEL
  if (typeof bl.max === 'undefined' || isNaN(bl.max) || bl.max > MAX_DALI_LEVEL) bl.min = MAX_DALI_LEVEL
  return bl
}

const levelsPerFadestepResolv = (config: any): number => {
  let fadeStep = config.fadestep
  if (typeof fadeStep === 'string') fadeStep = parseInt(fadeStep)
  if (!fadeStep || isNaN(fadeStep) || fadeStep < DALI_MIN_FADE_RATE) fadeStep = DALI_MIN_FADE_RATE
  if (fadeStep > DALI_MAX_FADE_RATE) fadeStep = DALI_MAX_FADE_RATE
  return fadeStep
}

const loadLastState = (ctx: NodeContext, config: any): State => {
  let saved: any = ctx.get(Key.LastState)
  if (!saved) {
    saved = {
      address: addressResolv(config),
      levelBounds: levelBoundsResolv(config),
      levelsPerFadeStep: levelsPerFadestepResolv(config),
      level: 0,
      isOn: false,
      fadeAction: FadeAction.None
    }
    ctx.set(Key.LastState, saved)
  }
  return saved as State
}

const storeNewState = (ctx: NodeContext, state: State) => {
  ctx.set(Key.LastState, state)
}

type SendToBallast = (cmd: Command) => void

const stopFade = (ls: State, send: SendToBallast): boolean => {
  if (ls.fadeAction === FadeAction.Down || ls.fadeAction === FadeAction.Up) {
    ls.fadeAction = FadeAction.StopRequested
    setLevel(ls, ls.level, send)
    return true
  }
  return false
}

const setOff = (ls: State, send: SendToBallast) => {
  stopFade(ls, send)

  send({
    opcode: Opcode.OFF,
    address: ls.address
  })

  ls.isOn = false
  ls.level = ls.levelBounds.min
}

const setMax = (ls: State, send: SendToBallast) => {
  stopFade(ls, send)

  send({
    opcode: Opcode.RECALL_MAX_LEVEL,
    address: ls.address
  })

  ls.isOn = true
  ls.level = ls.levelBounds.max
}

const setMin = (ls: State, send: SendToBallast) => {
  stopFade(ls, send)

  send({
    opcode: Opcode.RECALL_MIN_LEVEL,
    address: ls.address
  })

  ls.isOn = true
  ls.level = ls.levelBounds.min
}

const toggle = (ls: State, send: SendToBallast) => {
  stopFade(ls, send)

  if (!ls.isOn || ls.level !== ls.levelBounds.max) {
    setMax(ls, send)
  } else {
    setOff(ls, send)
  }
}

const startFadeUp = (ls: State, send: SendToBallast, tick: Tick) => {
  const lact = ls.fadeAction

  if (!ls.isOn) {
    setMin(ls, send)
  }

  ls.fadeAction = FadeAction.Up
  if (lact === FadeAction.None) {
    fadeStep(ls, send, tick)
  }
}

const startFadeDown = (ls: State, send: SendToBallast, tick: Tick) => {
  const lact = ls.fadeAction

  if (!ls.isOn) {
    setMax(ls, send)
  }

  ls.fadeAction = FadeAction.Down
  if (lact === FadeAction.None) {
    fadeStep(ls, send, tick)
  }
}

const resetBallastState = (ls: State, send: SendToBallast) => {
  stopFade(ls, send)

  if (!ls.isOn) {
    setOff(ls, send)
  } else {
    setLevel(ls, ls.level, send)
  }
}

const queryBallastState = (ls: State, send: SendToBallast) => {
  throw new Error('Query Ballast state not implementd')
}

const setLevel = (ls: State, val: number, send: SendToBallast) => {
  if (stopFade(ls, send)) {
    return
  }

  send({
    opcode: Opcode.DAPC,
    address: ls.address,
    value: val
  })

  ls.level = val
  ls.isOn = !!val
}

type Tick = (evt?: Event, val?: number | null) => State

const fadeStep = (ls: State, send: SendToBallast, tick: Tick) => {
  if (ls.fadeAction === FadeAction.StopRequested) {
    ls.fadeAction = FadeAction.None
    return
  }

  const step = Math.round(ls.levelsPerFadeStep / 1000 * DALI_FADE_STEP_DURATION_MS)
  if (ls.fadeAction === FadeAction.Up) {
    ls.level = Math.min(ls.levelBounds.max, ls.level + step)
    send({
      opcode: Opcode.UP,
      address: ls.address
    })
  }
  
  if (ls.fadeAction === FadeAction.Down) {
    ls.level = Math.max(ls.levelBounds.min, ls.level - step)
    send({
      opcode: Opcode.DOWN,
      address: ls.address
    })
  }

  setTimeout(tick, DALI_FADE_STEP_DURATION_MS)
}


export default function main(RED: NodeAPI) {
  function FoxtronDaliBallast(this: Node, config: FoxtronDaliBallastNodeConfig) {
    RED.nodes.createNode(this, config)

    const tick: Tick = (evt?: Event, val?: number | null): State => {
      const ctx = this.context()
      let lastState: State = loadLastState(ctx, config) 

      const send: SendToBallast = (cmd: Command) => {
        this.send([{
          payload: foxtronDaliFrame(cmd)
        }, null])
      } 

      if (!evt) {
        fadeStep(lastState, send, tick)
      } else {
        switch (evt) {
          case Event.Off: setOff(lastState, send); break
          case Event.Max: setMax(lastState, send); break
          case Event.Toggle: toggle(lastState, send); break
          case Event.FadeUp: startFadeUp(lastState, send, tick); break
          case Event.FadeDown: startFadeDown(lastState, send, tick); break
          case Event.FadeStop: stopFade(lastState, send); break
          case Event.Reset: resetBallastState(lastState, send); break
          case Event.Query: queryBallastState(lastState, send); break
          case Event.SetLevel: setLevel(lastState, val || 0, send); break
        }
      }

      storeNewState(ctx, lastState)
      return lastState
    }

    this.on('input', (msg:any, send, done) => {
    
      const event = eventWithString(msg.topic || msg.payload)
      const value: number | null = event === Event.SetLevel ? intWithPayload(msg.payload) : null
    
      const state = tick(event, value)

      msg.payload = state
      delete msg.topic
      send([null, msg])
      
      if (done) done()
    })

    
  }

  RED.nodes.registerType('foxtron-dali-ballast', FoxtronDaliBallast)
}