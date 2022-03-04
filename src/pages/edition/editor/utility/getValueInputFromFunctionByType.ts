import FunctionType from "../../../../types/function-type/FunctionType";
import ValueType from "../../../../types/value-type/ValueType";
import { ArgumentValue } from "../constants/ValueHandlers";
import { doValueTypesMatch } from "../utility/createEdge"

const getValueInputFromFunctionByType = (func: FunctionType, types: ValueType | ValueType[] | undefined): [string | undefined, boolean] => {
  let argumentIndex = func.arguments.findIndex(argTypes => {
    return doValueTypesMatch(types, argTypes);
  });

  if (argumentIndex < 0 && func.additionalArguments && doValueTypesMatch(types, func.additionalArguments)) {
    return [ArgumentValue + "-0", true];
  }

  if (argumentIndex >= 0) {
    return [ArgumentValue + "-" + argumentIndex, false];
  }

  return [undefined, false];
}

export default getValueInputFromFunctionByType;