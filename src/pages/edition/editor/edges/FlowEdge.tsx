import { useEffect, useState } from "react";
import { useZoomPanHelper, XYPosition } from "react-flow-renderer";
import { useSelector, shallowEqual } from "react-redux";
import { EditorReducerState } from "../store/EditorReducer";
import createPath from "./createPath";
import getCoords from "./getCoords";

type FlowEdgeProps = {
  id: string;
  source: string;
  sourceHandleId: string;
  sourceX: number;
  sourceY: number;
  target: string;
  targetHandleId: string;
  targetX: number;
  targetY: number;
}

const FlowEdge = ({
  source, sourceHandleId, sourceX, sourceY,
  target, targetHandleId, targetX, targetY,
}: FlowEdgeProps) => {
  const { project } = useZoomPanHelper();
  const container = useSelector<EditorReducerState, HTMLDivElement | undefined>(state => state.container, shallowEqual);

  const [sourceCoords, setSourceCoords] = useState<XYPosition>(() => getCoords(source, sourceHandleId, project, container));
  const [targetCoords, setTargetCoords] = useState<XYPosition>(() => getCoords(target, targetHandleId, project, container));

  useEffect(() => {
    setSourceCoords(getCoords(source, sourceHandleId, project, container));
  }, [sourceX, sourceY, project, source, sourceHandleId, container]);

  useEffect(() => {
    setTargetCoords(getCoords(target, targetHandleId, project, container));
  }, [targetX, targetY, project, target, targetHandleId, container]);

  return <path d={createPath(sourceCoords, targetCoords)} stroke="white" strokeWidth={4} fill="none" />;
}

export default FlowEdge;