import { ReactNode } from "react";
import { ConnectionLineComponentProps, Position, useStoreState, XYPosition } from "react-flow-renderer";
import { shallowEqual, useSelector } from "react-redux";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import VariableType from "../../../../types/variable-type/VariableType";
import { EditorReducerState } from "../store/EditorReducer";
import getColorFromNode from "../utility/getColorFromNode";
import isInputFlowHandle from "../utility/isInputFlowHandle";
import isInputValueHandle from "../utility/isInputValueHandle";
import isOutputFlowHandle from "../utility/isOutputFlowHandle";
import isOutputValueHandle from "../utility/isOutputValueHandle";
import createPath from "./createPath";

const DragEdge = (props: ConnectionLineComponentProps) => {

  const {
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    sourceHandle,
    sourceNode
  } = props;

  const tempConnectionPropsRef = useSelector<EditorReducerState, { current?: ConnectionLineComponentProps }>(state => state.tempConnectionPropsRef, () => true);

  tempConnectionPropsRef.current = props;

  const start = sourcePosition === Position.Left ? { x: targetX || 0, y: targetY || 0 } : { x: sourceX || 0, y: sourceY || 0 };
  const end = sourcePosition === Position.Left ? { x: sourceX || 0, y: sourceY || 0 } : { x: targetX || 0, y: targetY || 0 };

  if (isOutputFlowHandle(sourceHandle?.id) || isInputFlowHandle(sourceHandle?.id)) {
    return <FlowDragEdge start={start} end={end} sourcePosition={sourcePosition} />
  }

  if (isOutputValueHandle(sourceHandle?.id) || isInputValueHandle(sourceHandle?.id)) {
    return <ValueDragEdge start={start} end={end} sourcePosition={sourcePosition} sourceNode={sourceNode} sourceHandle={sourceHandle} />
  }

  return null;
};

export default DragEdge;

type FlowDragEdgeProps = {
  start: XYPosition;
  end: XYPosition;
  sourcePosition?: ConnectionLineComponentProps["sourcePosition"];
}

const FlowDragEdge = ({
  start,
  end,
  sourcePosition
}: FlowDragEdgeProps) => {

  const path = createPath(start, end, [], sourcePosition === Position.Left ? 1 : 2);

  return (
    <g>
      <path d={path} stroke="white" strokeWidth={4} fill="none" />
    </g>
  );
};

type ValueDragEdgeProps = {
  start: XYPosition;
  end: XYPosition;
  sourcePosition?: ConnectionLineComponentProps["sourcePosition"];
  sourceHandle?: ConnectionLineComponentProps["sourceHandle"];
  sourceNode?: ConnectionLineComponentProps["sourceNode"];
}

const ValueDragEdge = ({
  start,
  end,
  sourcePosition,
  sourceHandle,
  sourceNode
}: ValueDragEdgeProps) => {

  const variables = useSelector<EditorReducerState, VariableType[]>(state => state.variables, shallowEqual);

  const color = getColorFromNode(sourceNode as any, sourceHandle?.id || "", variables) || TypesColors.default;

  const path = createPath(start, end, [], sourcePosition === Position.Left ? 1 : 2);

  return (
    <g>
      <path d={path} stroke={`rgb(${color[0]},${color[1]},${color[2]})`} strokeWidth={1.5} fill="none" />
    </g>
  );
};

type DragEdgeStandaloneContainerProps = {
  children: ReactNode;
}

const DragEdgeStandaloneContainer = ({ children }: DragEdgeStandaloneContainerProps) => {

  const container = useSelector<EditorReducerState, HTMLDivElement | undefined>(state => state.container, shallowEqual);

  const boundingRect = container?.getBoundingClientRect();
  const width = boundingRect?.width || 0;
  const height = boundingRect?.height || 0;

  const transform = useStoreState(state => state.transform);

  return (
    <svg className="react-flow__edges" width={width} height={height}>
      <g transform={`translate(${transform[0]},${transform[1]}) scale(${transform[2]})`}>
        {children}
      </g>
    </svg>
  )
}

export { DragEdgeStandaloneContainer };