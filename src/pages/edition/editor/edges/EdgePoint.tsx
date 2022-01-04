import { useDrag } from "@use-gesture/react";
import { useStoreState, XYPosition } from "react-flow-renderer";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import useKeyPress from "../../../../common/useKeyPress";
import EdgeType from "../../../../types/edge-type/EdgeType";
import { ActionSetElements, EditorReducerAction } from "../store/EditorReducer";

type EdgePointProps = {
  index: number;
  id: string;
  coords: XYPosition;
  color: number[];
  size: number
}

const EdgePoint = ({ index, id, coords, color, size }: EdgePointProps) => {

  const zoom = useStoreState(state => state.transform[2]);

  const dispatch = useDispatch<Dispatch<EditorReducerAction>>();

  const isContolPressed = useKeyPress(["control", "meta"]);

  const bind = useDrag(({ delta }) => {
    dispatch({
      type: ActionSetElements, setElements: elements => {
        const newElements = [...elements];

        const edgeIndex = newElements.findIndex(o => o.id === id);

        if (edgeIndex >= 0) {
          const edge = newElements[edgeIndex] as EdgeType;

          const points = [...(edge.data?.points || [])];

          points[index] = { x: points[index].x + delta[0] / zoom, y: points[index].y + delta[1] / zoom };

          edge.data = {
            ...edge.data,
            points
          }

          newElements[edgeIndex] = { ...edge };
        }

        return newElements;
      }
    });
  })

  const onClick = (e: React.MouseEvent<SVGPathElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (e.metaKey || e.ctrlKey) {
      dispatch({
        type: ActionSetElements, setElements: elements => {
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
        }
      });
    }
  }

  return (
    <circle
      onClick={onClick}
      cx={coords.x}
      cy={coords.y}
      r={1}
      style={{ cursor: isContolPressed ? "pointer" : "grab", filter: "drop-shadow( 0 0 0.5rem rgba(0, 0, 0, .5))" }}
      {...bind()}
      stroke={`rgb(${color[0]},${color[1]},${color[2]})`}
      strokeWidth={size}
    />
  )
}

export default EdgePoint;