import _ from "lodash";
import { Edge, Connection, isEdge } from "react-flow-renderer";
import { v4 as uuidv4 } from 'uuid';
import EdgeType from "../../../../types/edge-type/EdgeType";
import NodeType from "../../../../types/node-type/NodeType";
import ValueType from "../../../../types/value-type/ValueType";
import VariableType from "../../../../types/variable-type/VariableType";
import { VariableValue } from "../constants/ValueHandlers";
import checkForFlowLoop from "./checkForFlowLoop";
import getValueTypefromNode from "./getValueTypefromNode";
import isInputFlowHandle from "./isInputFlowHandle";
import isInputValueHandle from "./isInputValueHandle";
import isOutputFlowHandle from "./isOutputFlowHandle";
import isOutputValueHandle from "./isOutputValueHandle";

const createEdge = (params: Edge | Connection, elements: (NodeType | EdgeType)[], variables: VariableType[]) => {
  // Cannot connect to itself
  if (params.source === params.target) return undefined;

  if (isOutputFlowHandle(params.sourceHandle) && isInputFlowHandle(params.targetHandle)) {
    // Checking if the source is not already connected
    if (elements.some(edge => isEdge(edge) && edge.source === params.source && edge.sourceHandle === params.sourceHandle)) {
      return undefined;
    }

    // Checking that creating that node won't create an execution loop
    if (checkForFlowLoop([...elements, { ...params, id: uuidv4(), type: "flow" } as EdgeType])) {
      return undefined;
    }

    console.log("baba ")
    console.log(params)

    return { ...params, id: uuidv4(), type: "flow" } as EdgeType
  }
  if (isValueEdge(params) || isVariableEdge(params)) {
    // Checking if the target is not already connected
    if (isTargetAlreadyConnected(params, elements)) {
      return undefined;
    }

    // Checking types
    if (!checkEdgeValueType(params, elements, variables)) {
      return undefined;
    }

    return { ...params, id: uuidv4(), type: "value" } as EdgeType
  }
  return undefined;
}

export default createEdge;

const isTargetAlreadyConnected = (params: Edge | Connection, elements: (NodeType | EdgeType)[]) => {
  return elements.some(edge => isEdge(edge) && edge.target === params.target && edge.targetHandle === params.targetHandle);
}

export const isVariableEdge = (params: Edge | Connection) => {
  return params.sourceHandle === VariableValue && params.targetHandle === VariableValue;
}

export const isValueEdge = (params: Edge | Connection) => {
  return isOutputValueHandle(params.sourceHandle) && isInputValueHandle(params.targetHandle);
}

export const checkEdgeValueType = (params: Edge | Connection, elements: (NodeType | EdgeType)[], variables: VariableType[]) => {
  const sourceNode = elements.find(node => node.id === params.source);
  const targetNode = elements.find(node => node.id === params.target);

  if (!sourceNode || isEdge(sourceNode) || !targetNode || isEdge(targetNode)) return undefined;

  const sourceTypes = getValueTypefromNode(sourceNode, params.sourceHandle, variables, elements);
  const targetTypes = getValueTypefromNode(targetNode, params.targetHandle, variables, elements);
  
  console.log(sourceTypes)
  console.log(targetTypes)

  return doValueTypesMatch(sourceTypes, targetTypes);
}

export const doValueTypesMatch = (a: ValueType | ValueType[] | undefined, b: ValueType | ValueType[] | undefined) => {
  const _a = Array.isArray(a) ? a : [a];
  const _b = Array.isArray(b) ? b : [b];

  if (
    !(
      _a?.includes("any") ||
      _b?.includes("any")
    ) &&
    _.intersection(_a, _b).length < 1
  ) {
    return false;
  }

  return true;
}