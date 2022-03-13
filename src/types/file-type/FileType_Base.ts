import EdgeType from "../edge-type/EdgeType";
import NodeType from "../node-type/NodeType";
import VariableType from "../variable-type/VariableType";

type FileType_Base = {
  name: string;
  elements: (NodeType | EdgeType)[];
  variables: VariableType[];
  id: string;
  zoom?: number;
  position?: [number, number];
  type?: string;
};

export default FileType_Base;