import { isEdge } from "react-flow-renderer";
import EdgeType from "../../../../types/edge-type/EdgeType";
import NodeType from "../../../../types/node-type/NodeType";
import isOutputFlowHandle from "./isOutputFlowHandle";

const getOutpuFlowFromNode = (elements: (NodeType | EdgeType)[], nodeId: string) => {
  return elements.filter(edge => {
    if (isEdge(edge) && edge.source === nodeId && isOutputFlowHandle(edge.sourceHandle)) {
      return true;
    }
  }) as EdgeType[];
}

export default getOutpuFlowFromNode;