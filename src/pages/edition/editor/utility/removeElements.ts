import { isEdge, isNode, removeElements as removeElementsFlow } from "react-flow-renderer";
import EdgeType from "../../../../types/edge-type/EdgeType";
import NodeType from "../../../../types/node-type/NodeType";
import getInputFlowFromNode from "./getInputFlowFromNode";
import getOutpuFlowFromNode from "./getOutpuFlowFromNode";
import isInputFlowHandle from "./isInputFlowHandle";
import isOutputFlowHandle from "./isOutputFlowHandle";
import removeFlowEdge from "./removeFlowEdge";

const removeElements = (elementsToRemove: (NodeType | EdgeType)[], elements: (NodeType | EdgeType)[]) => {
  console.log("to remove")
  console.log(elementsToRemove)

  let newElements = [...elements];

  for (const element of elementsToRemove) {
    if (isEdge(element)) {
      if (isOutputFlowHandle(element.sourceHandle) || isInputFlowHandle(element.targetHandle)) {
        const sourceNode = newElements.find(node => node.id === element.source);
        if (sourceNode && isOutputFlowHandle(element.sourceHandle)) {
          newElements = removeFlowEdge(newElements, sourceNode.id, element.sourceHandle!, "source");
        } else {
          const targetNode = newElements.find(node => node.id === element.target);

          if (targetNode && isInputFlowHandle(element.targetHandle)) {
            newElements = removeFlowEdge(newElements, targetNode.id, element.targetHandle!, "target");
          }
        }
      }
    }
    if (isNode(element)) {
      const outputEdges = getOutpuFlowFromNode(newElements, element.id);
      outputEdges.forEach(outputEdge => {
        newElements = removeFlowEdge(newElements, element.id, outputEdge.sourceHandle!, "source");
      });
      const inputEdges = getInputFlowFromNode(newElements, element.id);
      inputEdges.forEach(inputEdge => {
        newElements = removeFlowEdge(newElements, element.id, inputEdge.targetHandle!, "target");
      });
    }
  }


  return removeElementsFlow(elementsToRemove, newElements) as (NodeType | EdgeType)[];
}

export default removeElements;