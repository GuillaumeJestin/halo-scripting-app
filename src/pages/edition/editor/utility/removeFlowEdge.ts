import _ from "lodash";
import { isEdge, isNode } from "react-flow-renderer";
import EdgeType from "../../../../types/edge-type/EdgeType";
import NodeType from "../../../../types/node-type/NodeType";
import getInputFlowFromNode from "./getInputFlowFromNode";
import getOutpuFlowFromNode from "./getOutpuFlowFromNode";

const removeFlowEdge = (elements: (NodeType | EdgeType)[], nodeId: string, handleId: string, type: 'source' | 'target') => {
  const newElements = [...elements];

  // Gathering all edges to remove, we gotta remove all the flow from this node until the end of the execution line
  const edgesToRemove: string[] = [];
  const startingEdges: EdgeType[] = [];

  if (type === "target") {
    elements.forEach(edge => {
      if (isEdge(edge) && edge.target === nodeId && edge.targetHandle === handleId) {
        startingEdges.push(edge);
      }
    })
  } else {
    const start = elements.find(edge => {
      if (isEdge(edge) && edge.source === nodeId && edge.sourceHandle === handleId) {
        return true;
      }
      return false;
    }) as EdgeType | undefined;
    if (start) startingEdges.push(start);
  }

  startingEdges.forEach(edge => edgesToRemove.push(edge.id));

  const recursiveWalk = (edge: EdgeType) => {
    const node = elements.find(node => isNode(node) && node.id === edge.target);

    if (node) {
      const inputFlow = getInputFlowFromNode(elements, node.id);

      const arWeContinuing = inputFlow.filter(edge => edgesToRemove.includes(edge.id)).length === inputFlow.length;

      if (arWeContinuing) {
        const outputFlow = getOutpuFlowFromNode(elements, node.id);

        outputFlow.forEach(edge => edgesToRemove.push(edge.id));

        outputFlow.forEach(edge => recursiveWalk(edge));
      }
    }
  };

  startingEdges.forEach(edge => recursiveWalk(edge));

  // Removing all connected edges to this handle :)
  _.remove(newElements, edge => {
    return isEdge(edge) && edgesToRemove.includes(edge.id)
  });

  return newElements;
}

export default removeFlowEdge;