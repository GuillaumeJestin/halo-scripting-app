import _ from "lodash";
import { useEffect, useRef } from "react";
import { Handle, isEdge, Position } from "react-flow-renderer";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import useKeyPress from "../../../../common/useKeyPress";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import ValueType from "../../../../types/value-type/ValueType";
import { ActionSetElements, EditorReducerAction } from "../store/EditorReducer";

type ValueHandlerProp = {
  type: 'source' | 'target';
  id: string;
  connected?: boolean;
  valueType: ValueType;
  isConnectable?: boolean;
  nodeId: string;
}

const SIZE = 16;
const INNER_SIZE = 10;

const ValueHandler = ({ type, id, connected, valueType, isConnectable, nodeId }: ValueHandlerProp) => {

  const color = TypesColors[valueType] || TypesColors.default;

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

        // Removing all connected edges to this handle :)
        dispatch({
          type: ActionSetElements, setElements: elements => {
            const newElements = [...elements];

            _.remove(newElements, edge => {
              if (isEdge(edge)) {
                return (
                  (type === "source" && edge.source === nodeId && edge.sourceHandle === id) ||
                  (type === "target" && edge.target === nodeId && edge.targetHandle === id)
                )
              }
            });

            return newElements;
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
    <div ref={containerRef} style={{ position: "relative", display: "inline-flex", ...(isContolPressed ? { cursor: "pointer" } : {}) }} id={id} data-node-handle>
      <StyledHandle
        ref={handleRef}
        type={type}
        position={type === "source" ? Position.Right : Position.Left}
        id={id}
        isConnectable={isConnectable && !isContolPressed}
        style={isContolPressed ? { cursor: "pointer" } : {}}
      />
      <Circle
        style={{ backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})` }}
      >
        {!connected && <InnerCircle />}
      </Circle>
    </div>
  )
}

const Circle = styled.div`
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: 100%;
  box-shadow: 0 0 0.25rem rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerCircle = styled.div`
  width: ${INNER_SIZE}px;
  height: ${INNER_SIZE}px;
  border-radius: 100%;
  background-color: var(--node-background-color);
`

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

export default ValueHandler;