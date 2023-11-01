export const isNotEmpty = (value: number | string) => !value
export const isNumber = (value: number | string) => isNaN(Number(value))
export const isInteger = (value: number | string) =>
  !Number.isInteger(Number(value))
export const isNumberLessThan = (value: number | string, maxValue: number) =>
  !(Number(value) < maxValue)
export const isStrLengthMoreThan = (value: number | string, minValue: number) =>
  String(value).length < minValue
export const isStartWithLetter = (value: number | string, regex: any) =>
  !regex.test(value)
