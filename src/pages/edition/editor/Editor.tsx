import ReactFlow, { Background, BackgroundVariant, OnLoadParams, ReactFlowProvider } from "react-flow-renderer";
import NodeType from "../../../types/node-type/NodeType";
import VariableType from "../../../types/variable-type/VariableType";
import FunctionNode from "./nodes/FunctionNode";
import ScriptNode from "./nodes/ScriptNode";
import VariableNode from "./nodes/VariableNode";
import FlowEdge from "./edges/FlowEdge";
import createEdge from "./utility/createEdge";
import ValueEdge from "./edges/ValueEdge";
import EdgeType from "../../../types/edge-type/EdgeType";
import EditorReducer, { EditorReducerState, EditorReducerAction, ActionSetElements, ActionSetState, ActionSetContainer } from "./store/EditorReducer";
import { applyMiddleware, createStore, Dispatch } from "redux";
import { Provider, useSelector, useDispatch, shallowEqual } from "react-redux";
import { forwardRef, ForwardedRef, useEffect, useMemo, useRef } from "react";
import _ from "lodash";

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

  const dispatch = useDispatch<Dispatch<EditorReducerAction>>();

  return (<>
    <ReactFlow
      onLoad={(instance: OnLoadParams<NodeType | EdgeType>) => {
        if (instanceRef) {
          if (typeof instanceRef === "function") {
            instanceRef(instance);
          } else {
            instanceRef.current = instance;
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
      }}
      style={{ backgroundColor: "var(--darker)" }}
      elements={elements}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      defaultPosition={[window.innerWidth / 2, window.innerHeight / 2]}
      onConnect={params => {
        console.log(params);
        const edge = createEdge(params, elements, variables);
        if (edge) {
          dispatch({ type: ActionSetElements, elements: [...elements, edge] });
        }
      }}
    >
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
    { elements, variables, macros: [] },
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
      store.dispatch({ type: ActionSetState, elements, variables, macros: [] })
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