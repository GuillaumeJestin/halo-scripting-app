import { useState } from "react";
import { Edge } from "react-flow-renderer";
import NodeType from "../../types/node-type/NodeType";
import VariableType from "../../types/variable-type/VariableType";
import Editor from "./editor/Editor";
import testState from "./editor/testState";

const EditionPage = () => {
  const [elements, setElements] = useState<(NodeType | Edge)[]>(testState);
  const [variables, setVariables] = useState<VariableType[]>([
    { id: "a", name: "My Device", type: "device" },
    { id: "b", name: "My number var", type: "real" },
    { id: "c", name: "TrueOrFalse", type: "boolean" },
  ]);

  console.log(elements)

  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#383849" }}>
      <Editor {...{ variables, setVariables, elements, setElements }} />
    </div>
  )
}

export default EditionPage;