import { useState } from "react";
import { Edge } from "react-flow-renderer";
import NodeType from "../../types/node-type/NodeType";
import Editor from "./editor/Editor";
import testState from "./editor/testState";

const EditionPage = () => {
  const [nodes, setNodes] = useState<(NodeType | Edge)[]>(testState);

  return (
    <div>
      <Editor nodes={nodes} setNodes={setNodes} />
    </div>
  )
}

export default EditionPage;