import ReactFlow, { addEdge, Background, BackgroundVariant, Edge } from "react-flow-renderer";
import NodeType from "../../../types/node-type/NodeType";
import VariableType from "../../../types/variable-type/VariableType";
import VariableContext from "./contexts/VariableContext";
import FunctionNode from "./nodes/FunctionNode";
import ScriptNode from "./nodes/ScriptNode";
import VariableNode from "./nodes/VariableNode";
import { v4 as uuidv4 } from 'uuid';
import FlowEdge from "./edges/FlowEdge";

type EditorType = {
  elements: (NodeType | Edge)[];
  setElements: (nodes: (NodeType | Edge)[]) => void;
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
};

const Editor = ({ elements, variables, setElements }: EditorType) => {

  return (<>
    <VariableContext.Provider value={{ variables }}>
      <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultPosition={[window.innerWidth / 2, window.innerHeight / 2]}
        onConnect={params => {
          const edge: Edge = { ...params, id: uuidv4(), type: "flow" } as any;
          setElements([...elements, edge]);
        }}
      >
        <Background
          variant={BackgroundVariant.Lines}
          gap={48}
          size={2}
          color="rgba(255,255,255,0.16)"
        />
      </ReactFlow>
    </VariableContext.Provider>
  </>);
}

export default Editor;