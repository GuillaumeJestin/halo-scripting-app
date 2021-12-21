import _ from "lodash";
import Functions from "../../../../functions/Functions";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import NodeType from "../../../../types/node-type/NodeType";
import VariableType from "../../../../types/variable-type/VariableType";
import { ArgumentValue, ReturnsValue } from "../constants/ValueHandlers";

const getColorFromNode = (node: NodeType | undefined, handle: string, variables: VariableType[]) => {
  if (!node) return undefined;
  
  if (node.type === "variable") {
    const variable = variables.find(({ id }) => id === node.data.variableId);
    if (variable) {
      return TypesColors[variable.type] || TypesColors.default;
    }
  } else if (node.type === "function") {
    const func = Functions[node.data.category].find(({ symbol }) => symbol === node.data.function);
    if (func) {
      if (handle === ReturnsValue) {
        return TypesColors[func.returns || "default"] || TypesColors.default;
      }
      if (handle.includes(ArgumentValue)) {
        const index = _.clamp(_.toNumber(handle.split("-")[1]), 0, func.arguments.length);
        const _type = func.arguments[index];
        const type = Array.isArray(_type) ? _type[0] : _type;
        return TypesColors[type] || TypesColors.default;
      }
    }
  }

  return undefined;
}

export default getColorFromNode;