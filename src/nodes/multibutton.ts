import { Node, NodeAPI, NodeDef } from "node-red";
import { typedStrToValue, ValueType } from "../editor-prase-helper";

interface MultiButtonNodeConfig extends NodeDef {
  name: string,
  shortpresslimitms: string,
  nextpresswaitms: string,
  inputkeypath: string,
  inputkeypathType: 'msg',
  pushvalue: string,
  pushvalueType: ValueType,
  releasevalue: string,
  releasevalueType: ValueType,
  shortenabled: boolean,
  dblshortenabled: boolean,
  longenabled: boolean,
  shortlongenabled: boolean,
  warn: boolean,
  debug: boolean
}

enum InputEvent {
  Push = 'in.push',
  Release = 'in.release',
  Invalid = 'in.invalid'
}

enum OutputEvent {
  ShortPress = 'out.short',
  DoubleShortPress = 'out.dblshort',
  LongPressStart = 'out.long.start',
  ShortLongPressStart = 'out.shortlong.start',
  LongPressEnd = 'out.long.end',
  ShortLongPressEnd = 'out.shortlong.end',
}

enum State {
  Ready = 'stat.ready',
  PushedOnce = 'stat.pushedOnce',
  LongInProgress = 'stat.longInProgress',
  WaitingAnotherPush = 'stat.waitingAnotherPush',
  PushedTwice = 'stat.pushedTwice',
  ShortLongInProgress = 'stat.shortLongInProgress'
}

type ParsedConfig = {
  shortPressLimitMs: number,
  nextPressWaitMs: number,
  inputKeyPath: string,
  pushValue: string | number | boolean,
  releaseValue: string | number | boolean,
  enabled: {
    short: boolean,
    dblShort: boolean,
    long: boolean,
    shortLong: boolean
  },
  warn: boolean,
  debug: boolean
}

type SendMsg = (msg: any) => void
type DoneFn = () => void
type Retained = {
  send: SendMsg,
  done: DoneFn,
  msg: any
}

function parseEditorConfig(config: MultiButtonNodeConfig): ParsedConfig {  
  return {
    shortPressLimitMs: parseInt(config.shortpresslimitms),
    nextPressWaitMs: parseInt(config.nextpresswaitms),
    inputKeyPath: config.inputkeypath,
    pushValue: typedStrToValue(config.pushvalue, config.pushvalueType),
    releaseValue: typedStrToValue(config.releasevalue, config.releasevalueType),
    enabled: {
      short: config.shortenabled,
      dblShort: config.dblshortenabled,
      long: config.longenabled,
      shortLong: config.shortlongenabled
    },
    warn: config.warn,
    debug: config.debug
  }
}

class MultiButton {
  private RED: NodeAPI
  private node: Node
  private pConf: ParsedConfig

  private shortPushTo?: ReturnType<typeof setTimeout>
  private waitAnotherPushTo?: ReturnType<typeof setTimeout>
  private longPushStart?: Date
  private storedSendFn?: Retained
  private latestSendFn?: Retained

  private state: State = State.Ready

  constructor(RED: NodeAPI, node: Node, config: MultiButtonNodeConfig) {
    this.RED = RED
    this.node = node
    RED.nodes.createNode(node, config)

    this.pConf = parseEditorConfig(config)

    this.node.on('input', this.onInput.bind(this))
    this.node.on('close', this.onClose.bind(this))

  }

  private onInput(msg: any, send: SendMsg, done: () => void) {
    this.latestSendFn = { send, done, msg }

    const evt = this.eventWithMsg(msg)
    switch (evt) {
      case InputEvent.Push: this.onPush(); break;
      case InputEvent.Release: this.onRelease(); break;
      case InputEvent.Invalid: this.pConf.warn && this.node.warn(`Invalid event in message, ${msg}`)
    }

    if (done) done()
  }

  private onPush() {
    this.debug(`onPush`)

    switch (this.state) {
      case State.Ready: this.goPushedOnce(); return
      case State.WaitingAnotherPush: this.goPushedTwice(); return
    }

    this.invalidTransition('onPush')
  }

  private onRelease() {
    this.debug(`onRelease`)

    switch (this.state) {
      case State.PushedOnce: this.goWaitAnotherPush(); return
      case State.PushedTwice: this.finalizeDoubleShort(); return
      case State.LongInProgress: this.finalizeLong(); return
      case State.ShortLongInProgress: this.finalizeShortLong(); return
    }

    this.invalidTransition('onRelease')
  }

  private onShortPushTo() {
    this.debug(`onShortPushTo`)

    switch (this.state) {
      case State.PushedOnce: this.goLongStart(); return
      case State.PushedTwice: this.goShortLongStart(); return
    }

    this.invalidTransition('onShortPushTo')
  }

  private onWaitAnotherPushTo() {
    this.debug(`onWaitAnotherPushTo`)

    switch (this.state) {
      case State.WaitingAnotherPush: this.finalizeShort(); return
    }

    this.invalidTransition('onWaitAnotherPushTo')
  }

  private onClose() {
    if (this.shortPushTo) clearTimeout(this.shortPushTo)
    if (this.waitAnotherPushTo) clearTimeout(this.waitAnotherPushTo)
    this.shortPushTo = undefined
    this.waitAnotherPushTo = undefined
  }

  private goPushedOnce() {
    this.debug(`goPushedOnce -> State.PushedOnce\n setting short push TO`)

    this.storedSend()
    this.resetTimeouts()
    this.shortPushTo = setTimeout(this.onShortPushTo.bind(this), this.pConf.shortPressLimitMs)
    this.state = State.PushedOnce
  }

  private goPushedTwice() {
    this.debug(`goPushedTwice -> State.PushedTwice\n setting short push TO`)

    this.resetTimeouts()
    this.shortPushTo = setTimeout(this.onShortPushTo.bind(this), this.pConf.shortPressLimitMs)
    this.state = State.PushedTwice
  }

  private goWaitAnotherPush() {
    this.state = State.WaitingAnotherPush
    this.resetTimeouts()

    // If there is no dbl press event enabled it's pointless to wait
    if (!this.pConf.enabled.dblShort && !this.pConf.enabled.shortLong) {
      this.debug(`goWaitAnotherPush -> State.WaitingAnotherPush\n not waiting`)
      this.onWaitAnotherPushTo()
      return
    }

    // There is dbl press event enabled. Let's wait if second push is comming
    this.debug(`goWaitAnotherPush -> State.WaitingAnotherPush\n setting wait TO`)
    this.waitAnotherPushTo = setTimeout(this.onWaitAnotherPushTo.bind(this), this.pConf.nextPressWaitMs)    
  }

  private goLongStart() {
    this.debug(`goLongStart -> State.LongInProgress`)

    this.resetTimeouts()
    this.longPushStart = new Date()
    this.sendOutEvent(OutputEvent.LongPressStart)
    this.storedSend()
    this.state = State.LongInProgress
  }

  private goShortLongStart() {
    this.debug(`goShortLongStart -> State.ShortLongInProgress`)

    this.resetTimeouts()
    this.longPushStart = new Date()
    this.sendOutEvent(OutputEvent.ShortLongPressStart)
    this.storedSend()
    this.state = State.ShortLongInProgress
  }

  private finalizeShort() {
    this.debug(`finalizeShort -> State.Ready`)

    this.sendOutEvent(OutputEvent.ShortPress)
    this.resetTimeouts()
    this.state = State.Ready
  }

  private finalizeDoubleShort() {
    this.debug(`finalizeDoubleShort -> State.Ready`)

    this.sendOutEvent(OutputEvent.DoubleShortPress)
    this.resetTimeouts()
    this.state = State.Ready
  }

  private finalizeLong() {
    this.debug(`finalizeLong -> State.Ready`)

    this.sendOutEvent(OutputEvent.LongPressEnd, {
      start: this.longPushStart?.getTime(),
      duration: (new Date()).getTime() - (this.longPushStart?.getTime() || 0)
    })
    this.resetTimeouts()
    this.state = State.Ready
  }

  private finalizeShortLong() {
    this.debug(`finalizeShortLong -> State.Ready`)

    this.sendOutEvent(OutputEvent.ShortLongPressEnd, {
      start: this.longPushStart?.getTime(),
      duration: (new Date()).getTime() - (this.longPushStart?.getTime() || 0)
    })
    this.resetTimeouts()
    this.state = State.Ready
  }

  private invalidTransition(event: string) {
    this.pConf.warn && this.node.warn(`Invalid transition ${this.state} -> ${event} -> X`)
  }

  private sendOutEvent(outEvent: OutputEvent, val?: any) {
    if (!this.pConf.enabled.short && outEvent === OutputEvent.ShortPress) return
    if (!this.pConf.enabled.dblShort && outEvent === OutputEvent.DoubleShortPress) return
    if (!this.pConf.enabled.long 
      && (outEvent === OutputEvent.LongPressStart || outEvent === OutputEvent.LongPressEnd)
    ) return
    if (!this.pConf.enabled.shortLong
      && (outEvent === OutputEvent.ShortLongPressStart || outEvent === OutputEvent.ShortLongPressEnd)
    ) return

    this.debug(`Sending event ${outEvent} value: ${val}`)

    if (this.storedSendFn) {
      this.storedSendFn.msg.payload = { event: outEvent }
      if (val !== undefined) {
        this.storedSendFn.msg.payload.value = val
      }
      this.storedSendFn.send(this.storedSendFn.msg)
      if (this.storedSendFn.done) this.storedSendFn.done()
      this.storedSendFn = undefined
    }
  }

  private resetTimeouts() {
    this.debug(`resetTimeouts SPTO ${this.shortPushTo}; WAPTO ${this.waitAnotherPushTo}`)

    clearTimeout(this.shortPushTo)
    clearTimeout(this.waitAnotherPushTo)
    this.shortPushTo = undefined
    this.waitAnotherPushTo = undefined
    this.longPushStart = undefined
  }

  private storedSend() {
    this.storedSendFn = this.latestSendFn
  }

  private eventWithMsg(msg: any): InputEvent {
    const kp = this.pConf.inputKeyPath.split('.')

    let sub: any = msg
    for (const part of kp) {
      if (!sub) return InputEvent.Invalid
      sub = sub[part]
    }
    if (sub === this.pConf.pushValue) return InputEvent.Push
    if (sub === this.pConf.releaseValue) return InputEvent.Release
    return InputEvent.Invalid
  }

  private debug(msg: string) {
    this.pConf.debug && this.node.debug(msg)
  }
}

// Register constructor function with Node-RED
export default function main(RED: NodeAPI) {
  RED.nodes.registerType(
    'multibutton', 
    function(this: Node, config: MultiButtonNodeConfig) {
      new MultiButton(RED, this, config)
    }
  )
}