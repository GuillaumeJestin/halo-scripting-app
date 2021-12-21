import ValueType from "../../types/value-type/ValueType"

type TypesColorsType = {
  default: number[];
} & Partial<{
  [key in ValueType]: number[];
}>

const TypesColors: TypesColorsType = {
  default: [105, 91, 181],
  boolean: [183, 76, 67],
  real: [65, 176, 150],
  short: [65, 176, 150],
  long: [65, 176, 150],
  script: [93, 50, 136],
  string: [203, 153, 126],
}

export default TypesColors;