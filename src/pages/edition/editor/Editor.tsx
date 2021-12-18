import { Edge } from "react-flow-renderer";
import NodeType from "../../../types/node-type/NodeType";

type EditorType = {
  nodes: (NodeType | Edge)[];
  setNodes: (nodes: (NodeType | Edge)[]) => void;
}

const Editor = ({ }: EditorType) => {

  return <>Editorrrrrr</>
}

export default Editor;