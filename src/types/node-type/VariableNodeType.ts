import { Node } from "react-flow-renderer"

type VariableNodeType = Omit<Node, "data" | "type"> & {
  type: "variable",
  data: {
    variableId: string;
  }
};

export default VariableNodeType;