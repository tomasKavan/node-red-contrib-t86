export const MAX_DALI_LEVEL = 254
export const MIN_DALI_LEVEL = 0
export const DALI_FADE_STEP_DURATION_MS = 200
export const DALI_MIN_FADE_RATE_N = 1
export const DALI_MAX_FADE_RATE_N = 15

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

export function fadeRateSteps(n: number): number | undefined {
  switch (n) {
    case 1 : return 357.796
    case 2 : return 253.000
    case 3 : return 178.898
    case 4 : return 126.500
    case 5 : return 89.449
    case 6 : return 63.250
    case 7 : return 44.725
    case 8 : return 31.625
    case 9 : return 22.362
    case 10 : return 15.813
    case 11 : return 11.181
    case 12 : return 7.906
    case 13 : return 5.591
    case 14 : return 3.953
    case 15 : return 2.795
  }
  return undefined
}