import _ from "lodash";
import Functions from "../../../../functions/Functions";
import NodeType from "../../../../types/node-type/NodeType";
import VariableType from "../../../../types/variable-type/VariableType";
import { ArgumentValue, ReturnsValue } from "../constants/ValueHandlers";

const getValueTypefromNode = (node: NodeType, handle: string | null | undefined, variables: VariableType[]) => {

  if (!handle) return undefined;

  if (node.type === "variable") {
    const variableId = node.data.variableId;
    const variable = variables.find(({ id }) => id === variableId);

    if (variable) {
      return [variable.type];
    }
  } else if (node.type === "function") {
    const category = node.data.category;
    const functionSymbol = node.data.function;

    const functionDefinition = Functions[category].find(func => func.symbol === functionSymbol);

    if (!functionDefinition) return undefined;

    if (handle === ReturnsValue) {
      return functionDefinition.returns ? [functionDefinition.returns] : undefined;
    }
    if (handle.includes(ArgumentValue)) {
      const index = _.toNumber(handle.split("-")[1]);

      if (index >= functionDefinition.arguments.length) {
        const type = functionDefinition.additionalArguments;
        return type ?
          Array.isArray(type) ? type : [type]
          : undefined
      }

      const type = functionDefinition.arguments[index];

      if (!type) return undefined;

      return Array.isArray(type) ? type : [type];
    }
  }

  return undefined;
}

export default getValueTypefromNode;