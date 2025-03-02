import { AddressType, Command, MAX_DALI_LEVEL, MIN_DALI_LEVEL, Opcode } from "./foxtron-types"

const SOH = String.fromCharCode(0x01)
const ETB = String.fromCharCode(0x17)

const FoxCommand = '0B' // 11 - distinc send
const FoxPriority = '00' // 0 is auto
const FoxDataLength = '10' // 16 bits - 2 bytes
const FoxFlags = '00' // no flags are set

function calcCheckSum(frame: string): string {
  let sum = 0
  for (let i = 0; i < frame.length; i += 2) {
      const number = parseInt(frame[i] + frame[i + 1], 16)
      if (isNaN(number) || number < 0 || number > 255) {
          throw new Error(`Foxtron DALI ASCII checkum calc error. Wrong input (must be between between 0 and F)`)
      }
      sum += number
  }
  const mod = sum % 0x100
  const negmod = 0xFF - mod
  let csStr = ''
  if (negmod < 0x10) {
      csStr = '0'
  }
  csStr += negmod.toString(16).toUpperCase()
  return csStr
}

export function daliFrame(cmd: Command): string {
  if (!cmd.value) cmd.value = 0

  let firstByte = cmd.opcode === Opcode.DAPC ? 0 : 1
  switch (cmd.address.type) {
    case AddressType.Broadcast: firstByte += 0xFE; break
    case AddressType.Group: firstByte += 0x80 + (cmd.address.value << 1); break
    case AddressType.Short: firstByte += (cmd.address.value << 1); break
  }
  
  let secondByte = cmd.opcode === Opcode.DAPC ? cmd.value : cmd.opcode
  if (cmd.opcode === Opcode.DAPC && (cmd.value < MIN_DALI_LEVEL || cmd.value > MAX_DALI_LEVEL)) {
    throw new Error(`DAPC value ${cmd.value} out of range <0;254>`)
  }
  
  const frameInt = (firstByte << 8) + secondByte
  let frameStr = frameInt.toString(16).toUpperCase()
  while (frameStr.length < 4) {
    frameStr = '0' + frameStr
  }
  return frameStr
}

export function foxtronDaliFrame(cmd: Command): string {
  const df = daliFrame(cmd)

  const foxDataFrame = FoxCommand 
  + FoxPriority 
  + FoxDataLength 
  + df
  + FoxFlags

  const cs = calcCheckSum(foxDataFrame)

  return SOH + foxDataFrame + cs + ETB
}