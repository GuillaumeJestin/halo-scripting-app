import _ from "lodash";
import { useState, useEffect, useMemo } from "react";
import { useStoreState, useZoomPanHelper, XYPosition } from "react-flow-renderer";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import EdgeType from "../../../../types/edge-type/EdgeType";
import NodeType from "../../../../types/node-type/NodeType";
import getColorFromNode from "../utility/getColorFromNode";
import createPath from "./createPath";
import getCoords from "./getCoords";
import { shallowEqual, useSelector } from "react-redux";
import { EditorReducerState } from "../store/EditorReducer";
import VariableType from "../../../../types/variable-type/VariableType";
import EdgePoint from "./EdgePoint";
import useOnPathClick from "../hooks/useOnPathClick";

type ValueEdgeProps = {
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

const ValueEdge = ({
  source, sourceHandleId, sourceX, sourceY,
  target, targetHandleId, targetX, targetY,
  id, data
}: ValueEdgeProps) => {
  const { project } = useZoomPanHelper();
  const zoom = useStoreState(state => state.transform[2], shallowEqual);

  const gradientId = source + sourceHandleId + target + targetHandleId;

  const variables = useSelector<EditorReducerState, VariableType[]>(state => state.variables, shallowEqual);
  const container = useSelector<EditorReducerState, HTMLDivElement | undefined>(state => state.container, shallowEqual);

  const [sourceNode, targetNode] = useStoreState(
    (state) => [state.nodes.find(({ id }) => id === source), state.nodes.find(({ id }) => id === target)],
    (a, b) => _.isEqual(_.pick(a, ["id", "data", "type"]), _.pick(b, ["id", "data", "type"]))
  ) as [NodeType, NodeType];

  const [startColor, endColor] = useStoreState((state) => {
    const elements = [...state.edges, ...state.nodes] as (NodeType | EdgeType)[];

    return [getColorFromNode(sourceNode, sourceHandleId, variables, elements) || TypesColors.default
      , getColorFromNode(targetNode, targetHandleId, variables, elements) || TypesColors.default];
  }, shallowEqual);

  const [sourceCoords, setSourceCoords] = useState<XYPosition>(() => getCoords(source, sourceHandleId, project, container, zoom));
  const [targetCoords, setTargetCoords] = useState<XYPosition>(() => getCoords(target, targetHandleId, project, container, zoom));

  useEffect(() => {
    setSourceCoords(getCoords(source, sourceHandleId, project, container, zoom));
  }, [sourceX, sourceY, project, source, sourceHandleId, container, zoom]);

  useEffect(() => {
    setTargetCoords(getCoords(target, targetHandleId, project, container, zoom));
  }, [targetX, targetY, project, target, targetHandleId, container, zoom]);

  const invertColor = sourceCoords.y < targetCoords.y;

  const onPathClick = useOnPathClick(id);

  const points = data?.points || [];

  const path = createPath(sourceCoords, targetCoords, points);

  return (<>
    <defs>
      <linearGradient id={gradientId} x1="0%" y1={invertColor ? "100%" : "0%"} x2="0%" y2={invertColor ? "0%" : "100%"}>
        <stop offset="0%" stopColor={`rgb(${endColor[0]}, ${endColor[1]}, ${endColor[2]})`} />
        <stop offset="100%" stopColor={`rgb(${startColor[0]}, ${startColor[1]}, ${startColor[2]})`} />
      </linearGradient>
    </defs>
    <g>
      <path d={path} stroke={`url(#${gradientId})`} fill="none" strokeWidth={1.5} />
      <path onClick={onPathClick} d={path} stroke="none" fill="none" style={{ cursor: "pointer" }} strokeWidth={10} />
    </g>
    {
      points?.map((point, index) => {
        return <EdgePoint size={9} key={index} index={index} id={id} coords={point} color={startColor} />
      })
    }
  </>);
}

export default ValueEdge;