import ReactFlow, { Background, BackgroundVariant, ConnectionLineComponentProps, OnLoadParams, ReactFlowProvider, useZoomPanHelper } from "react-flow-renderer";
import NodeType from "../../../types/node-type/NodeType";
import VariableType from "../../../types/variable-type/VariableType";
import FunctionNode from "./nodes/FunctionNode";
import ScriptNode from "./nodes/ScriptNode";
import VariableNode from "./nodes/VariableNode";
import FlowEdge from "./edges/FlowEdge";
import createEdge from "./utility/createEdge";
import ValueEdge from "./edges/ValueEdge";
import EdgeType from "../../../types/edge-type/EdgeType";
import EditorReducer, { EditorReducerState, EditorReducerAction, ActionSetElements, ActionSetState, ActionSetContainer, ActionSetMenuSelectionPosition, ActionSetTempConnection } from "./store/EditorReducer";
import { applyMiddleware, createStore, Dispatch } from "redux";
import { Provider, useSelector, useDispatch, shallowEqual } from "react-redux";
import { forwardRef, ForwardedRef, useEffect, useMemo, useRef } from "react";
import _ from "lodash";
import FunctionsMenu from "./menu/FunctionsMenu";
import DragEdge, { DragEdgeStandaloneContainer } from "./edges/DragEdge";
import isElementHandle from "./utility/isElementHandle";

const nodeTypes = {
  script: ScriptNode,
  variable: VariableNode,
  function: FunctionNode,
};

const edgeTypes = {
  flow: FlowEdge,
  value: ValueEdge,
};

type EditorProps = {
  instanceRef?: ForwardedRef<OnLoadParams<NodeType | EdgeType>>;
}

const Editor = forwardRef<HTMLDivElement, EditorProps>(({ instanceRef }, ref) => {

  const elements = useSelector<EditorReducerState, (NodeType | EdgeType)[]>(state => state.elements, shallowEqual);
  const variables = useSelector<EditorReducerState, VariableType[]>(state => state.variables, shallowEqual);
  const container = useSelector<EditorReducerState, HTMLDivElement | undefined>(state => state.container, shallowEqual);
  const tempConnection = useSelector<EditorReducerState, ConnectionLineComponentProps | undefined>(state => state.tempConnection, shallowEqual);

  const dispatch = useDispatch<Dispatch<EditorReducerAction>>();

  const { project } = useZoomPanHelper();

  const onPanelLeftClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const boundingRect = container?.getBoundingClientRect();
    const offsetX = boundingRect?.x || 0;
    const offsetY = boundingRect?.y || 0;
    dispatch({ type: ActionSetMenuSelectionPosition, position: project({ x: e.clientX - offsetX, y: e.clientY - offsetY }) })
  }

  const instance = useRef<OnLoadParams<NodeType | EdgeType>>();

  return (<>
    <ReactFlow
      onLoad={(flowInstance: OnLoadParams<NodeType | EdgeType>) => {
        instance.current = flowInstance;
        if (instanceRef) {
          if (typeof instanceRef === "function") {
            instanceRef(flowInstance);
          } else {
            instanceRef.current = flowInstance;
          }
        }
      }}
      ref={flowRef => {
        flowRef && dispatch({ type: ActionSetContainer, container: flowRef });
        if (ref) {
          if (typeof ref === "function") {
            ref(flowRef);
          } else {
            ref.current = flowRef;
          }
        }
        if (flowRef) {
          flowRef.addEventListener("scroll", () => {
            flowRef.scrollLeft = 0;
            flowRef.scrollTop = 0;
          })
        }
      }}
      style={{ backgroundColor: "var(--darker)" }}
      elements={elements}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      defaultPosition={[window.innerWidth / 2, window.innerHeight / 2]}
      onConnect={params => {
        const edge = createEdge(params, elements, variables);
        if (edge) {
          dispatch({ type: ActionSetElements, elements: [...elements, edge] });
        }
      }}
      onMouseDown={e => {
        const element = document.elementFromPoint(e.clientX, e.clientY);
        if (element && document.elementFromPoint(e.clientX, e.clientY)?.classList.contains("react-flow__pane")) {
          if (e.button === 2) {
            onPanelLeftClick(e);
          }
        }
      }}
      onNodeDragStop={() => {
        if (instance.current) {
          dispatch({ type: ActionSetElements, elements: instance.current.getElements() as (EdgeType | NodeType)[] })
        }
      }}
      connectionLineComponent={DragEdge}
      onConnectEnd={(e) => {
        const element = document.elementFromPoint(e.clientX, e.clientY);
        if (!(element && isElementHandle(element))) {
          dispatch({ type: ActionSetTempConnection });
        }
      }}
    >
      {
        tempConnection && <DragEdgeStandaloneContainer>
          <DragEdge {...tempConnection} />
        </DragEdgeStandaloneContainer>
      }
      <FunctionsMenu />
      <Background
        variant={BackgroundVariant.Lines}
        gap={48}
        size={2}
        color="rgba(255,255,255,0.16)"
      />
    </ReactFlow>
  </>);
})

type EditorWrapperProps = {
  elements: (NodeType | EdgeType)[];
  setElements: (elements: (NodeType | EdgeType)[]) => void;
  variables: VariableType[];
  instanceRef?: ForwardedRef<OnLoadParams<NodeType | EdgeType>>;
}

const EditorWrapper = forwardRef<HTMLDivElement, EditorWrapperProps>(({ elements, setElements, variables, instanceRef }, ref) => {

  const setElementsRef = useRef(setElements);
  useEffect(() => { setElementsRef.current = setElements }, [setElements]);

  const store = useMemo(() => createStore(
    EditorReducer,
    { elements, variables, macros: [], tempConnectionPropsRef: {}, },
    applyMiddleware(
      store => next => action => {
        const result: EditorReducerState = next(action);

        setElementsRef.current((store.getState() as EditorReducerState).elements);

        return result;
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ), []);

  useEffect(() => {
    if (
      !_.isEqual(elements, store.getState().elements) ||
      !_.isEqual(variables, store.getState().variables)
    ) {
      store.dispatch({ type: ActionSetState, elements, variables, macros: [], tempConnectionPropsRef: {}, })
    }
  }, [elements, variables, store]);

  return (
    <ReactFlowProvider>
      <Provider store={store}>
        <Editor ref={ref} instanceRef={instanceRef} />
      </Provider>
    </ReactFlowProvider>
  )
})

export default EditorWrapper;