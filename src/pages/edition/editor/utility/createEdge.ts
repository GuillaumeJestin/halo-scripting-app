import { Edge, Connection, isEdge } from "react-flow-renderer";
import { v4 as uuidv4 } from 'uuid';
import EdgeType from "../../../../types/edge-type/EdgeType";
import NodeType from "../../../../types/node-type/NodeType";
import isInputFlowHandle from "./isInputFlowHandle";
import isInputValueHandle from "./isInputValueHandle";
import isOutputFlowHandle from "./isOutputFlowHandle";
import isOutputValueHandle from "./isOutputValueHandle";

const createEdge = (params: Edge | Connection, elements: (NodeType | EdgeType)[]) => {
  // Cannot connect to itself
  if (params.source === params.target) return undefined;

  if (isOutputFlowHandle(params.sourceHandle) && isInputFlowHandle(params.targetHandle)) {
    // Checking if the source is not already connected
    if (elements.some(edge => isEdge(edge) && edge.source === params.source && edge.sourceHandle === params.sourceHandle)) {
      return undefined;
    }

    return { ...params, id: uuidv4(), type: "flow" } as EdgeType
  }
  if (isOutputValueHandle(params.sourceHandle) && isInputValueHandle(params.targetHandle)) {
    // Checking if the target is not already connected
    if (elements.some(edge => isEdge(edge) && edge.target === params.target && edge.targetHandle === params.targetHandle)) {
      return undefined;
    }

    return { ...params, id: uuidv4(), type: "value" } as EdgeType
  }
  return undefined;
}

export default createEdge;