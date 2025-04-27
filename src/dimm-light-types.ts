import { NodeDef } from "node-red"

export enum WType {
  OnOff = 'onoff',
  Dimm = 'dimm',
  DimmTemp = 'dimm.temp',
}

export interface WProps extends NodeDef {
  name: string,
  group: string,
  order: number,
  width: number,
  height: number,
  label: string,
  brightnessMin: number,
  brightnessMax: number,
  wtype: WType,
  passthru: boolean
}