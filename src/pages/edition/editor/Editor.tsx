import ReactFlow, { Background, BackgroundVariant, ReactFlowProvider } from "react-flow-renderer";
import NodeType from "../../../types/node-type/NodeType";
import VariableType from "../../../types/variable-type/VariableType";
import VariableContext from "./contexts/VariableContext";
import FunctionNode from "./nodes/FunctionNode";
import ScriptNode from "./nodes/ScriptNode";
import VariableNode from "./nodes/VariableNode";
import FlowEdge from "./edges/FlowEdge";
import createEdge from "./utility/createEdge";
import ValueEdge from "./edges/ValueEdge";
import EdgeType from "../../../types/edge-type/EdgeType";
import ElementsContext from "./contexts/ElementsContext";

type EditorType = {
  elements: (NodeType | EdgeType)[];
  setElements: React.Dispatch<React.SetStateAction<(NodeType | EdgeType)[]>>;
  variables: VariableType[];
  setVariables: (nodes: VariableType[]) => void;
}

const nodeTypes = {
  script: ScriptNode,
  variable: VariableNode,
  function: FunctionNode,
};

const edgeTypes = {
  flow: FlowEdge,
  value: ValueEdge,
};

const Editor = ({ elements, variables, setElements }: EditorType) => {

  return (<>
    <VariableContext.Provider value={{ variables }}>
      <ElementsContext.Provider value={{ setElements }}>
        <ReactFlow
          elements={elements}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          defaultPosition={[window.innerWidth / 2, window.innerHeight / 2]}
          onConnect={params => {
            console.log(params);
            const edge = createEdge(params);
            if (edge) {
              setElements([...elements, edge]);
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
      </ElementsContext.Provider>
    </VariableContext.Provider>
  </>);
}

const EditorWrapper = (props: EditorType) => {
  return (
    <ReactFlowProvider>
      <Editor {...props} />
    </ReactFlowProvider>
  )
}

export default EditorWrapper;