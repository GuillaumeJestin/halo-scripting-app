import EdgeType from "../edge-type/EdgeType";
import NodeType from "../node-type/NodeType";
import VariableType from "../variable-type/VariableType";

type FileType = {
  name: string;
  elements: (NodeType | EdgeType)[];
  variables: VariableType[];
  macros: FileType[];
  id: string;
  zoom?: number;
  position?: [number, number];
};

export default FileType;