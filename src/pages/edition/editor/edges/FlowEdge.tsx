import _ from "lodash";
import { useEffect, useState } from "react";
import { useZoomPanHelper, XYPosition } from "react-flow-renderer";
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

  const [sourceCoords, setSourceCoords] = useState<XYPosition>(() => getCoords(source, sourceHandleId, project));
  const [targetCoords, setTargetCoords] = useState<XYPosition>(() => getCoords(target, targetHandleId, project));

  useEffect(() => {
    setSourceCoords(getCoords(source, sourceHandleId, project));
  }, [sourceX, sourceY, project, source, sourceHandleId]);

  useEffect(() => {
    setTargetCoords(getCoords(target, targetHandleId, project));
  }, [targetX, targetY, project, target, targetHandleId]);

  return <path d={createPath(sourceCoords, targetCoords)} stroke="white" strokeWidth={4} fill="none" />;
}

export default FlowEdge;