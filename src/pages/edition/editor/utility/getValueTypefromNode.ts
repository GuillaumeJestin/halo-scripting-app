import _ from "lodash";
import { isEdge, isNode } from "react-flow-renderer";
import Functions from "../../../../functions/Functions";
import EdgeType from "../../../../types/edge-type/EdgeType";
import NodeType from "../../../../types/node-type/NodeType";
import ValueType from "../../../../types/value-type/ValueType";
import VariableType from "../../../../types/variable-type/VariableType";
import { ArgumentValue, ReturnsValue, VariableValue } from "../constants/ValueHandlers";

const getValueTypefromNode = (node: NodeType, handle: string | null | undefined, variables: VariableType[], elements?: (NodeType | EdgeType)[]): ValueType[] | undefined => {

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
  } else if (node.type === "setVariable" && elements) {
    if (handle === ArgumentValue) {
      const variableEdge = elements.find(edge => isEdge(edge) && edge.target === node.id && edge.targetHandle === VariableValue) as EdgeType | undefined;

      if (!variableEdge) return ["any"] as ValueType[];

      const variableNode = elements.find(node => isNode(node) && node.id === variableEdge.source) as NodeType | undefined;

      if (variableNode) return getValueTypefromNode(variableNode, variableEdge.sourceHandle, variables, elements);
    } else if (handle === VariableValue) {
      const valueEdge = elements.find(edge => isEdge(edge) && edge.target === node.id && edge.targetHandle === ArgumentValue) as EdgeType | undefined;

      if (!valueEdge) return ["any"] as ValueType[];

      const valueNode = elements.find(node => isNode(node) && node.id === valueEdge.source) as NodeType | undefined;

      if (valueNode) return getValueTypefromNode(valueNode, valueEdge.sourceHandle, variables, elements);
    }

  }

  return undefined;
}

export default getValueTypefromNode;