export enum ValueType {
  String = 'str',
  Number = 'num',
  Boolean = 'bool'
}

export type EditorType = string | number | boolean

export function typedStrToValue(str: string, type: ValueType): EditorType {
  switch(type) {
    case ValueType.String: return str
    case ValueType.Number: return parseInt(str)
    case ValueType.Boolean: return str === 'true'
  }
  return str
}