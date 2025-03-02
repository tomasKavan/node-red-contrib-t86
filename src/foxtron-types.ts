export const MAX_DALI_LEVEL = 254
export const MIN_DALI_LEVEL = 0
export const DALI_FADE_STEP_DURATION_MS = 200
export const DALI_MIN_FADE_RATE = 1
export const DALI_MAX_FADE_RATE = 200

export enum AddressType {
  Broadcast = 7,
  Group = 4,
  Short = 0
}

export type Address = {
  type: AddressType,
  value: number
} 

export enum Opcode {
  DAPC = -1,
  OFF = 0,
  UP = 1,
  DOWN = 2,
  RECALL_MIN_LEVEL = 4,
  RECALL_MAX_LEVEL = 5
}

export type Command = {
  opcode: Opcode,
  address: Address,
  value?: number
}