import { Node, NodeAPI, NodeDef } from "node-red";

interface MultiButtonNodeConfig extends NodeDef {
  shortpresslimitms: string,
  nextpresswaitms: string,
  inputkeypath: string,
  pushvalue: string,
  releasevalue: string,
  shortenabled: string,
  dblshortenabled: string,
  longenabled: string,
  shortlongenabled: string
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
    sblShort: boolean,
    long: boolean,
    shortLong: boolean
  }
}

type SendMsg = (msg: any) => void
type DoneFn = () => void
type Retained = {
  send: SendMsg,
  done: DoneFn,
  msg: any
}

function parseEditorConfig(config: MultiButtonNodeConfig): ParsedConfig {
  // TODO
  return {
    shortPressLimitMs: 500,
    nextPressWaitMs: 300,
    inputKeyPath: 'payload',
    pushValue: 1,
    releaseValue: 0,
    enabled: {
      short: true,
      sblShort: true,
      long: true,
      shortLong: true
    }
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
      case InputEvent.Invalid: this.node.warn(`Invalid event in message, ${msg}`)
    }

    if (done) done()
  }

  private onPush() {
    switch (this.state) {
      case State.Ready: this.goPushedOnce(); return
      case State.WaitingAnotherPush: this.goPushedTwice(); return
    }

    this.invalidTransition('onPush')
  }

  private onRelease() {
    switch (this.state) {
      case State.PushedOnce: this.goWaitAnotherPush(); return
      case State.PushedTwice: this.finalizeDoubleShort(); return
      case State.LongInProgress: this.finalizeLong(); return
      case State.ShortLongInProgress: this.finalizeShortLong(); return
    }

    this.invalidTransition('onRelease')
  }

  private onShortPushTo() {
    switch (this.state) {
      case State.PushedOnce: this.goLongStart(); return
      case State.PushedTwice: this.goShortLongStart(); return
    }

    this.invalidTransition('onShortPushTo')
  }

  private onWaitAnotherPushTo() {
    switch (this.state) {
      case State.PushedOnce: this.finalizeShort(); return
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
    this.storedSend()
    this.shortPushTo = setTimeout(this.onShortPushTo.bind(this), this.pConf.shortPressLimitMs)
    this.state = State.PushedOnce
  }

  private goPushedTwice() {
    this.shortPushTo = setTimeout(this.onShortPushTo.bind(this), this.pConf.shortPressLimitMs)
    this.state = State.PushedTwice
  }

  private goWaitAnotherPush() {
    this.waitAnotherPushTo = setTimeout(this.onWaitAnotherPushTo.bind(this), this.pConf.nextPressWaitMs)
    this.state = State.WaitingAnotherPush
  }

  private goLongStart() {
    this.longPushStart = new Date()
    this.sendOutEvent(OutputEvent.LongPressStart)
    this.storedSend()
    this.state = State.LongInProgress
  }

  private goShortLongStart() {
    this.longPushStart = new Date()
    this.sendOutEvent(OutputEvent.ShortLongPressStart)
    this.storedSend()
    this.state = State.ShortLongInProgress
  }

  private finalizeShort() {
    this.sendOutEvent(OutputEvent.ShortPress)
    this.resetTimeouts()
    this.state = State.Ready
  }

  private finalizeDoubleShort() {
    this.sendOutEvent(OutputEvent.DoubleShortPress)
    this.resetTimeouts()
    this.state = State.Ready
  }

  private finalizeLong() {
    this.sendOutEvent(OutputEvent.LongPressEnd, {
      start: this.longPushStart?.getTime(),
      duration: (new Date()).getTime() - (this.longPushStart?.getTime() || 0)
    })
    this.resetTimeouts()
    this.state = State.Ready
  }

  private finalizeShortLong() {
    this.sendOutEvent(OutputEvent.ShortLongPressEnd, {
      start: this.longPushStart?.getTime(),
      duration: (new Date()).getTime() - (this.longPushStart?.getTime() || 0)
    })
    this.resetTimeouts()
    this.state = State.Ready
  }

  private invalidTransition(event: string) {
    this.node.warn(`Invalid transition ${this.state} -> ${event} -> X`)
  }

  private sendOutEvent(outEvent: OutputEvent, payload?: any) {
    if (this.storedSendFn) {
      this.storedSendFn.msg.payload = {
        event: outEvent,
        value: payload
      }
      this.storedSendFn.send(this.storedSendFn.msg)
      if (this.storedSendFn.done) this.storedSendFn.done()
      this.storedSendFn = undefined
    }
  }

  private resetTimeouts() {
    if (this.shortPushTo) {
      clearTimeout(this.shortPushTo)
      this.shortPushTo = undefined
    }
    if (this.waitAnotherPushTo) {
      clearTimeout(this.waitAnotherPushTo)
      this.waitAnotherPushTo = undefined
    }
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
}

// Register constructor function with Node-RED
export default function main(RED: NodeAPI) {
  RED.nodes.registerType(
    'foxtron-dali-ballast', 
    function(this: Node, config: MultiButtonNodeConfig) {
      new MultiButton(RED, this, config)
    }
  )
}