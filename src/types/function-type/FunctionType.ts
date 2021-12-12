import { ReactNode } from "react";
import ValueType from "../value-type/ValueType";
import FunctionNodeType from "../node-type/FunctionNodeType";

type FunctionType = {
  symbol: string;
  name: string;
  description: ReactNode;
  arguments: (ValueType | ValueType[] | ((node: FunctionNodeType) => ValueType))[];
  optionalArguments?: number[];
  additionalArguments?: ValueType | ValueType[] | ((node: FunctionNodeType) => ValueType);
  returns?: ValueType | ((node: FunctionNodeType) => ValueType);
}

export default FunctionType;