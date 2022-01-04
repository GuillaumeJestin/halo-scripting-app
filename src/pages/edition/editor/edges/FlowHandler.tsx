import { useRef, useEffect } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import useKeyPress from '../../../../common/useKeyPress';
import { ActionSetElements, EditorReducerAction } from '../store/EditorReducer';
import removeFlowEdge from '../utility/removeFlowEdge';

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

  const dispatch = useDispatch<Dispatch<EditorReducerAction>>();

  useEffect(() => {
    if (isContolPressed) {
      const container = containerRef.current;
      const handle = handleRef.current;

      const containerCallback = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch({
          type: ActionSetElements, setElements: elements => {
            return removeFlowEdge(elements, nodeId, id, type);
          }
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
  }, [isContolPressed, id, dispatch, type, nodeId]);

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