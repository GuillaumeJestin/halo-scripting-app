import { useEffect, useState } from "react";
import { useStoreState, useZoomPanHelper, XYPosition } from "react-flow-renderer";
import { useSelector, shallowEqual } from "react-redux";
import EdgeType from "../../../../types/edge-type/EdgeType";
import useOnPathClick from "../hooks/useOnPathClick";
import { EditorReducerState } from "../store/EditorReducer";
import createPath from "./createPath";
import EdgePoint from "./EdgePoint";
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
  data: EdgeType["data"];
}

const FlowEdge = ({
  source, sourceHandleId, sourceX, sourceY,
  target, targetHandleId, targetX, targetY,
  id, data
}: FlowEdgeProps) => {
  const { project } = useZoomPanHelper();
  const zoom = useStoreState(state => state.transform[2]);
  const container = useSelector<EditorReducerState, HTMLDivElement | undefined>(state => state.container, shallowEqual);

  const [sourceCoords, setSourceCoords] = useState<XYPosition>(() => getCoords(source, sourceHandleId, project, container, zoom));
  const [targetCoords, setTargetCoords] = useState<XYPosition>(() => getCoords(target, targetHandleId, project, container, zoom));

  useEffect(() => {
    setSourceCoords(getCoords(source, sourceHandleId, project, container, zoom));
  }, [sourceX, sourceY, project, source, sourceHandleId, container, zoom]);

  useEffect(() => {
    setTargetCoords(getCoords(target, targetHandleId, project, container, zoom));
  }, [targetX, targetY, project, target, targetHandleId, container, zoom]);

  const onPathClick = useOnPathClick(id);

  const points = data?.points || [];

  const path = createPath(sourceCoords, targetCoords, points);

  return (
    <>
      <g>
        <path d={path} stroke="white" strokeWidth={4} fill="none" />
        <path onClick={onPathClick} d={path} stroke="none" fill="none" style={{ cursor: "pointer" }} strokeWidth={13} />
      </g>
      {
        points?.map((point, index) => {
          return <EdgePoint size={16} key={index} index={index} id={id} coords={point} color={[255, 255, 255]} />
        })
      }
    </>
  );
}

export default FlowEdge;