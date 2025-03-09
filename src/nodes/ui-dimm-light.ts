import { Socket } from "net"
import { Node, NodeAPI, NodeDef } from "node-red"
import { WProps } from "../dimm-light-types"

type SendMsg = (msg: any) => void

type DB2Evnt = {
  onAction?: boolean,
  onChange?: boolean | ((msg: any, value: boolean, conn: Socket, id: string) => void)
  beforeSend?: (msg: any) => any
  onInput?: (msg: any, senf: SendMsg) => void
  onError?: (err: any) => void
  onSocket?: Record<string, (conn: Socket, id: string, msg: any) => void>[]
}

interface DB2Group extends Node {
  getBase: () => DB2Base,
  register: (node: Node, config: WProps, evts: DB2Evnt) => void
}

interface DB2Base extends Node {
  register: (
    page: string, 
    group: string, 
    node: Node, 
    config: WProps, 
    evts: DB2Evnt
  ) => void,
  state: any
}



class DimmLightDashboard {
  private RED: NodeAPI
  private node: Node
  private group: DB2Group
  private base!: DB2Base

  constructor(RED: NodeAPI, node: Node, config: WProps) {
    this.RED = RED
    this.node = node
    RED.nodes.createNode(node, config)
    
    this.group = RED.nodes.getNode(config.group) as DB2Group
    if (!this.group) {
      this.node.error(`Node ${config.name}(${config.id}) hasn't configured Group`)
      return
    }
    this.base = this.group.getBase()

    this.group.register(node, config, { 
      onChange: true,
      beforeSend: this.beforeSend.bind(this)
     })
  }

  private beforeSend(msg: any) {
    const updates = msg.ui_update
    if (updates) {
      if (typeof updates.brightnessMin === 'number') {
        this.base.state.set(this.base, this.node, msg, 'brightnessMin', updates.brightnessMin)
      }
      if (typeof updates.brightnessMax === 'number') {
        this.base.state.set(this.base, this.node, msg, 'brightnessMax', updates.brightnessMax)
      }
      if (typeof updates.temperatureMin === 'number') {
        this.base.state.set(this.base, this.node, msg, 'temperatureMin', updates.temperatureMin)
      }
      if (typeof updates.temperatureMax === 'number') {
        this.base.state.set(this.base, this.node, msg, 'temperatureMax', updates.temperatureMax)
      }
    }
    return msg
  }
}

// Register constructor function with Node-RED
export default function main(RED: NodeAPI) {
  RED.nodes.registerType(
    'ui-dimm-light', 
    function(this: Node, config: WProps) {
      new DimmLightDashboard(RED, this, config)
    }
  )
}