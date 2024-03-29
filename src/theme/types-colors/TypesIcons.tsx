import { IconType } from "react-icons";
import { HiOutlineCheck, HiVariable } from "react-icons/hi";
import { MdOutlineTextFields } from "react-icons/md";
import { AiOutlineNumber, AiOutlineFunction } from "react-icons/ai";
import { BsQuestion } from "react-icons/bs";
import ValueType from "../../types/value-type/ValueType"

type TypesIconsType = {
  default: IconType;
} & Partial<{
  [key in ValueType]: IconType;
}>

const TypesIcons: TypesIconsType = {
  default: HiVariable,
  any: BsQuestion,
  boolean: HiOutlineCheck,
  real: AiOutlineNumber,
  short: AiOutlineNumber,
  long: AiOutlineNumber,
  script: AiOutlineFunction,
  string: MdOutlineTextFields,
}

export default TypesIcons;