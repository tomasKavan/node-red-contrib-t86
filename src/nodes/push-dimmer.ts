import { Node, NodeAPI, NodeDef } from "node-red"
import { EditorType, typedStrToValue, ValueType } from "../editor-prase-helper"

type SendMsg = (msg: any) => void

enum Dimming {
  Off = 'off',
  Up = 'up',
  Down = 'down'
}

enum Event {
  Start = 'start',
  Stop = 'stop',
  Toggle = 'toggle'
}

interface PushDimmerNodeConfig extends NodeDef {
  name: string,
  dimmimpkp: string,
  dimmimpstart: string,
  dimmimpstartType: ValueType,
  dimmimpstop: string,
  dimmimpstopType: ValueType,
  toggle: string,
  toggleType: ValueType
}

type ParsedConfig = {
  name: string,
  dimmImpKp: string,
  dimmImpStart: EditorType,
  dimmImpStop: EditorType,
  toggle: EditorType
}

function parseEditorConfig(config: PushDimmerNodeConfig): ParsedConfig {  
  return {
    name: config.name,
    dimmImpKp: config.dimmimpkp,
    dimmImpStart: typedStrToValue(config.dimmimpstart, config.dimmimpstartType),
    dimmImpStop: typedStrToValue(config.dimmimpstop, config.dimmimpstopType),
    toggle: typedStrToValue(config.toggle, config.toggleType)
  }
}

class PushDimmer {
  private RED: NodeAPI
  private node: Node
  private pConf: ParsedConfig

  private ballastState?: {
    level: number
    state: boolean,
    min: number,
    max: number
  }
  private dimming: Dimming = Dimming.Off

  constructor(RED: NodeAPI, node: Node, config: PushDimmerNodeConfig) {
    this.RED = RED
    this.node = node
    RED.nodes.createNode(node, config)

    this.pConf = parseEditorConfig(config)

    this.node.on('input', this.onInput.bind(this))
    this.node.on('close', this.onClose.bind(this))

    this.updateStatus()
  }

  private onInput(msg: any, send: SendMsg, done: () => void) {
    // Check if all conditions to be it ballast state message are met
    if (
      msg && msg.payload 
      && typeof msg.payload.level === 'number' 
      && typeof msg.payload.state === 'boolean' 
      && msg.payload.config 
      && msg.payload.config.levelBounds 
      && typeof msg.payload.config.levelBounds.min === 'number' 
      && typeof msg.payload.config.levelBounds.max === 'number'
    ) {
      this.ballastState = {
        level: msg.payload.level,
        state: msg.payload.state,
        min: msg.payload.config.levelBounds.min,
        max: msg.payload.config.levelBounds.max
      }
      this.updateStatus()
      return
    }

    const evt: Event | undefined = this.parseDimmEvent(msg) 
    
    if (evt) {
      this.handleEvent(evt, msg, send)
      this.updateStatus()
    } else {
      // TODO: Should we warn?
    }

    if (done) done()
  }

  private onClose() {}

  private handleEvent(evt: Event, msg: any, send: SendMsg) {
    if (!this.ballastState) return

    if (this.dimming === Dimming.Off && evt === Event.Start) {
      if (this.ballastState.level > this.ballastState.min + Math.floor((this.ballastState.max - this.ballastState.min) / 10)) {
        this.dimming = Dimming.Down
      } else {
        this.dimming = Dimming.Up
      }
      this.sendDimmingMsg(msg, send)
      return
    }
    if (evt === Event.Stop) {
      this.dimming = Dimming.Off
      this.sendDimmingMsg(msg, send)
      return
    }
    if (this.dimming === Dimming.Off) {
      this.sendToggleMsg(msg, send)
    }
  }

  private sendDimmingMsg(msg: any, send: SendMsg) {
    if (!msg) msg = {}
    msg.payload = {
      event: this.dimming === Dimming.Off ? 'stop' : this.dimming
    }
    send(msg)
  }

  private sendToggleMsg(msg: any, send: SendMsg) {
    if (!msg) msg = {}
    msg.payload = {
      event: 'toggle'
    }
    send(msg)
  }

  private parseDimmEvent(msg: any): Event | undefined {
    const keyList = this.pConf.dimmImpKp.split('.')
    let obj = msg
    for (const key of keyList) {
      if (obj === undefined) return undefined
      obj = obj[key]
    }
    if (obj === this.pConf.dimmImpStart) return Event.Start
    if (obj === this.pConf.dimmImpStop) return Event.Stop
    if (obj === this.pConf.toggle) return Event.Toggle
    return undefined
  }

  private updateStatus() {
    if (!this.ballastState) {
      this.node.status({fill:"yellow",shape:"ring",text:"Initialization"})
      return
    }

    if (this.dimming === Dimming.Off) {
      this.node.status({fill:"blue",shape:"dot",text: 'Ready'})
      return
    }
    
    let onTheEdge: number | undefined
    let size = ''
    let dir: string = ''
    if (this.dimming === Dimming.Down) {
      dir = 'down'
      if (this.ballastState.level <= this.ballastState.min) {
        onTheEdge = this.ballastState.min
        size = 'min'
      }
    }
    if (this.dimming === Dimming.Up) {
      dir = 'up'
      if (this.ballastState.level >= this.ballastState.max) {
        onTheEdge = this.ballastState.max
        size = 'max'
      }
    }
    let msg = 'Dimming ' + dir 
    msg += (onTheEdge !== undefined) ? `, level on ${size} (${onTheEdge})` : ''
    this.node.status({fill:"green",shape:"dot",text: msg})
  }
}

// Register constructor function with Node-RED
export default function main(RED: NodeAPI) {
  RED.nodes.registerType(
    'push-dimmer', 
    function(this: Node, config: PushDimmerNodeConfig) {
      new PushDimmer(RED, this, config)
    }
  )
}