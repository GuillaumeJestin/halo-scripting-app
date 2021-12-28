import { useState } from "react";
import EdgeType from "../../types/edge-type/EdgeType";
import NodeType from "../../types/node-type/NodeType";
import VariableType from "../../types/variable-type/VariableType";
import Editor from "./editor/Editor";
import testState from "./editor/testState";

const EditionPage = () => {
  const [elements, setElements] = useState<(NodeType | EdgeType)[]>(testState);
  const [variables] = useState<VariableType[]>([
    { id: "a", name: "My Device", type: "device" },
    { id: "b", name: "My number var", type: "real" },
    { id: "c", name: "TrueOrFalse", type: "boolean" },
  ]);

  console.log(elements);

  return (
    <>
      <div>
        HELLO WORLD
      </div>
      <div style={{ flex: 1, display: "flex" }}>
        <div >
          fedasfwe
        </div>
        <div style={{ flex: 1 }}>
          <Editor {...{ variables, elements, setElements }} />
        </div>
        <div >
          fedasfwe
        </div>
      </div>
    </>
  )
}

export default EditionPage;