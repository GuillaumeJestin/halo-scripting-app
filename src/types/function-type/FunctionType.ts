import { ReactNode } from "react";
import ValueType from "../value-type/ValueType";
import FunctionNodeType from "../node-type/FunctionNodeType";

type FunctionType = {
  name: string;
  description: ReactNode;
  arguments: (ValueType | ((node: FunctionNodeType) => ValueType))[];
  optionalArguments?: number[];
  additionalArguments?: ValueType | ((node: FunctionNodeType) => ValueType);
  returns?: ValueType | ((node: FunctionNodeType) => ValueType);
}

export default FunctionType;