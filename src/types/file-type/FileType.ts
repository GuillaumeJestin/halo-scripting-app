import EdgeType from "../edge-type/EdgeType";
import NodeType from "../node-type/NodeType";
import VariableType from "../variable-type/VariableType";

type FileType = {
  name: string;
  elements: (NodeType | EdgeType)[];
  variables: VariableType[];
  macros: FileType[];
};

export default FileType;