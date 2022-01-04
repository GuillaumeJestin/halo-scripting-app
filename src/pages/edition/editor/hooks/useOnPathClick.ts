import { useStoreState, useZoomPanHelper } from "react-flow-renderer";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import EdgeType from "../../../../types/edge-type/EdgeType";
import { ActionSetElements, EditorReducerAction, EditorReducerState } from "../store/EditorReducer";

const useOnPathClick = (id: string) => {
  const { project } = useZoomPanHelper();
  const dispatch = useDispatch<Dispatch<EditorReducerAction>>();
  const zoom = useStoreState(state => state.transform[2]);
  const container = useSelector<EditorReducerState, HTMLDivElement | undefined>(state => state.container, shallowEqual);

  const onPathClick = (e: React.MouseEvent<SVGPathElement>) => {

    const coords = project({ x: e.clientX, y: e.clientY });

    const containerRect = container?.getBoundingClientRect();
    const offsetX = containerRect?.x ?? 0;
    const offsetY = containerRect?.y ?? 0;

    dispatch({
      type: ActionSetElements, setElements: elements => {
        const newElements = [...elements];

        const index = newElements.findIndex(o => o.id === id);

        if (index >= 0) {
          const edge = newElements[index] as EdgeType;

          edge.data = {
            ...edge.data,
            points: [...(edge.data?.points || []), { x: coords.x - offsetX / zoom, y: coords.y - offsetY / zoom }]
          }

          newElements[index] = { ...edge };
        }

        return newElements;
      }
    })
  }

  return onPathClick;
}

export default useOnPathClick;