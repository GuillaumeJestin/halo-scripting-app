import { isEdge } from "react-flow-renderer";
import EdgeType from "../../../../types/edge-type/EdgeType";
import NodeType from "../../../../types/node-type/NodeType";
import isInputFlowHandle from "./isInputFlowHandle";

const getInputFlowFromNode = (elements: (NodeType | EdgeType)[], nodeId: string) => {
  return elements.filter(edge => {
    if (isEdge(edge) && edge.target === nodeId && isInputFlowHandle(edge.targetHandle)) {
      return true;
    }
  }) as EdgeType[];
}

export default getInputFlowFromNode;