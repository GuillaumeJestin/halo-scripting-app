import _ from 'lodash';
import { useRef, useContext, useEffect } from 'react';
import { Handle, isEdge, isNode, Position } from 'react-flow-renderer';
import styled from 'styled-components';
import useKeyPress from '../../../../common/useKeyPress';
import EdgeType from '../../../../types/edge-type/EdgeType';
import ElementsContext from '../contexts/ElementsContext';
import getInputFlowFromNode from '../utility/getInputFlowFromNode';
import getOutpuFlowFromNode from '../utility/getOutpuFlowFromNode';

type FlowHandlerProp = {
  type: 'source' | 'target';
  id: string;
  connected?: boolean;
  isConnectable?: boolean;
  nodeId: string;
}

const FlowHandler = ({ type, id, connected, isConnectable, nodeId }: FlowHandlerProp) => {

  const properties = connected ?
    {
      fill: "white",
      stroke: "none"
    }
    :
    {
      fill: "none",
      stroke: "white",
      strokeWidth: 2,
      style: { transform: "scale(0.9)", transformOrigin: "center" }
    }


  const isContolPressed = useKeyPress(["control", "meta"]);

  const containerRef = useRef<HTMLDivElement>(null!);
  const handleRef = useRef<HTMLDivElement>(null!);

  const { setElements } = useContext(ElementsContext);

  useEffect(() => {
    if (isContolPressed) {
      const container = containerRef.current;
      const handle = handleRef.current;

      const containerCallback = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        setElements(elements => {
          const newElements = [...elements];

          // Gathering all edges to remove, we gotta remove all the flow from this node until the end of the execution line
          const edgesToRemove: string[] = [];
          const startingEdges: EdgeType[] = [];

          if (type === "target") {
            elements.forEach(edge => {
              if (isEdge(edge) && edge.target === nodeId && edge.targetHandle === id) {
                startingEdges.push(edge);
              }
            })
          } else {
            const start = elements.find(edge => {
              if (isEdge(edge) && edge.source === nodeId && edge.sourceHandle === id) {
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
        });
      }

      const handleCallback = (e: MouseEvent) => {
        e.preventDefault();
      }

      container.addEventListener("mousedown", containerCallback);
      handle.addEventListener("mousedown", handleCallback);

      return () => {
        container.removeEventListener("mousedown", containerCallback);
        handle.removeEventListener("mousedown", handleCallback);
      }
    }
  }, [isContolPressed, id, setElements, type, nodeId]);

  return (
    <div ref={containerRef} style={{ position: "relative", display: "inline-flex", ...(isContolPressed ? { cursor: "pointer" } : {}) }} id={id}>
      <StyledHandle
        ref={handleRef}
        isConnectable={isConnectable && !isContolPressed}
        type={type}
        position={type === "source" ? Position.Right : Position.Left}
        id={id}
        style={isContolPressed ? { cursor: "pointer" } : {}}
      />
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 22">
        <path
          d="M2,22a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H6.926l8.81,7.7c1.68,1.468,1.68,5.139,0,6.606L6.926,22H2Z"
          {...properties}
        />
      </svg>
    </div>
  )
}

const StyledHandle = styled(Handle)`
  top: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: unset !important;
  height: unset !important;
  transform: unset;
  border-radius: unset;
  opacity: 0;
`

export default FlowHandler;