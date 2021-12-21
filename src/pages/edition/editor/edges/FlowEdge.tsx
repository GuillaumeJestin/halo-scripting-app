import _ from "lodash";
import { useEffect, useState } from "react";
import { useZoomPanHelper, XYPosition } from "react-flow-renderer";

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

const OFFSET = 30;
const MIN_CURVE_OFFSET = 50;
const MAX_CURVE_OFFSET = 150;

const FlowEdge = ({
  source, sourceHandleId, sourceX, sourceY,
  target, targetHandleId, targetX, targetY,
}: FlowEdgeProps) => {
  const { project } = useZoomPanHelper();

  const [sourceCoords, setSourceCoords] = useState<XYPosition>(() => getCoords(source, sourceHandleId, project));
  const [targetCoords, setTargetCoords] = useState<XYPosition>(() => getCoords(target, targetHandleId, project));

  useEffect(() => {
    setSourceCoords(getCoords(source, sourceHandleId, project));
  }, [sourceX, sourceY]);

  useEffect(() => {
    setTargetCoords(getCoords(target, targetHandleId, project));
  }, [targetX, targetY]);

  return <path d={createPath(sourceCoords, targetCoords)} stroke="white" strokeWidth={4} fill="none" />;
}

export default FlowEdge;

const createPath = (sourceCoords: XYPosition, targetCoords: XYPosition) => {

  const curveOffset = _.clamp((targetCoords.x - sourceCoords.x) / 2, MIN_CURVE_OFFSET, MAX_CURVE_OFFSET);

  const p1 = sourceCoords;
  const p2 = { x: sourceCoords.x + OFFSET, y: sourceCoords.y };
  const c1 = { x: p2.x + curveOffset, y: p2.y };
  const p3 = { x: targetCoords.x - OFFSET, y: targetCoords.y };
  const c2 = { x: p3.x - curveOffset, y: p3.y };
  const p4 = targetCoords;

  return `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${p3.x} ${p3.y} L ${p4.x} ${p4.y}`;
}

const getCoords = (nodeId: string, handleId: string, project: (position: XYPosition) => XYPosition) => {
  const node = document.getElementById(nodeId);
  const handle = node?.querySelector("#" + handleId);

  const rect = handle?.getBoundingClientRect();

  const x = (rect?.x || 0) + (rect?.width || 0) / 2;
  const y = (rect?.y || 0) + (rect?.height || 0) / 2;

  return project({ x, y });
}