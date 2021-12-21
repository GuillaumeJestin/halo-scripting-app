import _ from "lodash";
import { useState, useEffect, useContext, useMemo } from "react";
import { useStoreState, useZoomPanHelper, XYPosition } from "react-flow-renderer";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import EdgeType from "../../../../types/edge-type/EdgeType";
import NodeType from "../../../../types/node-type/NodeType";
import ElementsContext from "../contexts/ElementsContext";
import VariableContext from "../contexts/VariableContext";
import getColorFromNode from "../utility/getColorFromNode";
import createPath from "./createPath";
import getCoords from "./getCoords";
import { useDrag } from '@use-gesture/react'

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

  const gradientId = source + sourceHandleId + target + targetHandleId;

  const { variables } = useContext(VariableContext);

  const [sourceNode, targetNode] = useStoreState(
    (state) => [state.nodes.find(({ id }) => id === source), state.nodes.find(({ id }) => id === target)],
    (a, b) => _.isEqual(_.pick(a, ["id", "data", "type"]), _.pick(b, ["id", "data", "type"]))
  ) as [NodeType, NodeType];

  const [startColor, endColor] = useMemo(() => {
    return [getColorFromNode(sourceNode, sourceHandleId, variables) || TypesColors.default
      , getColorFromNode(targetNode, targetHandleId, variables) || TypesColors.default];
  }, [sourceNode, sourceHandleId, targetNode, targetHandleId, variables]);

  const [sourceCoords, setSourceCoords] = useState<XYPosition>(() => getCoords(source, sourceHandleId, project));
  const [targetCoords, setTargetCoords] = useState<XYPosition>(() => getCoords(target, targetHandleId, project));

  useEffect(() => {
    setSourceCoords(getCoords(source, sourceHandleId, project));
  }, [sourceX, sourceY, project, source, sourceHandleId]);

  useEffect(() => {
    setTargetCoords(getCoords(target, targetHandleId, project));
  }, [targetX, targetY, project, target, targetHandleId]);

  const invertColor = sourceCoords.y < targetCoords.y;

  const { setElements } = useContext(ElementsContext);

  const onPathClick = (e: React.MouseEvent<SVGPathElement>) => {
    const coords = project({ x: e.clientX, y: e.clientY });

    setElements(elements => {
      const newElements = [...elements];

      const index = newElements.findIndex(o => o.id === id);

      if (index >= 0) {
        const edge = newElements[index] as EdgeType;

        edge.data = {
          ...edge.data,
          points: [...(edge.data?.points || []), coords]
        }

        newElements[index] = { ...edge };
      }

      return newElements;
    })
  }

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
        return <Point key={index} index={index} setElements={setElements} id={id} coords={point} color={startColor} />
      })
    }
  </>);
}

type PointProps = {
  index: number;
  setElements: React.Dispatch<React.SetStateAction<(NodeType | EdgeType)[]>>;
  id: string;
  coords: XYPosition;
  color: number[];
}

const Point = ({ index, setElements, id, coords, color }: PointProps) => {

  const bind = useDrag(({ delta }) => {
    console.log(delta);
    setElements(elements => {
      const newElements = [...elements];

      const edgeIndex = newElements.findIndex(o => o.id === id);

      if (edgeIndex >= 0) {
        const edge = newElements[edgeIndex] as EdgeType;

        const points = [...(edge.data?.points || [])];

        points[index] = { x: points[index].x + delta[0], y: points[index].y + delta[1] };

        edge.data = {
          ...edge.data,
          points
        }

        newElements[edgeIndex] = { ...edge };
      }

      return newElements;
    })
  })

  const onClick = (e: React.MouseEvent<SVGPathElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (e.metaKey || e.ctrlKey) {
      setElements(elements => {
        const newElements = [...elements];

        const edgeIndex = newElements.findIndex(o => o.id === id);

        if (edgeIndex >= 0) {
          const edge = newElements[edgeIndex] as EdgeType;

          const points = [...(edge.data?.points || [])];

          points.splice(index, 1);

          edge.data = {
            ...edge.data,
            points
          }

          newElements[edgeIndex] = { ...edge };
        }

        return newElements;
      })
    }
  }

  return (
    <circle
      onClick={onClick}
      cx={coords.x}
      cy={coords.y}
      r={5}
      fill={`rgb(${color[0]},${color[1]},${color[2]})`}
      style={{ cursor: "grab", backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})` }}
      {...bind()}
    />
  )
}

export default ValueEdge;