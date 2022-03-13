import ValueType from "../../types/value-type/ValueType"

type TypesColorsType = {
  default: number[];
  macro: number[];
} & Partial<{
  [key in ValueType]: number[];
}>

const TypesColors: TypesColorsType = {
  default: [105, 91, 181],
  macro: [100, 13, 20],
  any: [45, 130, 183],
  boolean: [219, 84, 97],//[212, 94, 94],
  real: [65, 176, 150],
  short: [65, 176, 150],
  long: [65, 176, 150],
  script: [93, 50, 136],
  string: [203, 153, 126],
}

export default TypesColors;