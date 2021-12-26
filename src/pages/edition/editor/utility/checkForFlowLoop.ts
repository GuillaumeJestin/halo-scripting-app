import { isEdge } from "react-flow-renderer";
import EdgeType from "../../../../types/edge-type/EdgeType";
import NodeType from "../../../../types/node-type/NodeType";
import isInputFlowHandle from "./isInputFlowHandle";
import { analyzeGraphFast } from 'graph-cycles';

const checkForFlowLoop = (elements: (NodeType | EdgeType)[]) => {

  const graph = elements.filter(edge => isEdge(edge) && isInputFlowHandle(edge.targetHandle)).map((_edge) => {
    const edge = _edge as EdgeType;

    return [edge.source, [edge.target]];
  })

  const analysis = analyzeGraphFast(graph as any);

  return analysis.cyclic.length > 0;
}

export default checkForFlowLoop;