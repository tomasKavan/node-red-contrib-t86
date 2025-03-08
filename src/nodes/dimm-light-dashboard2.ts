import { Node, NodeAPI, NodeDef } from "node-red";

interface DimmLightDashboardNodeConfig extends NodeDef {
  name: string
}

class DimmLightDashboard {
  constructor(RED: NodeAPI, node: Node, config: DimmLightDashboardNodeConfig) {
    
  }
}

// Register constructor function with Node-RED
export default function main(RED: NodeAPI) {
  RED.nodes.registerType(
    'dimm-light-dashboard2', 
    function(this: Node, config: DimmLightDashboardNodeConfig) {
      new DimmLightDashboard(RED, this, config)
    }
  )
}