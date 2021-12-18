import { Node } from "react-flow-renderer"

type SetVariableNodeType = Omit<Node, "data" | "type"> & {
  type: "setVariable",
  data: {
    argumentValue?: string | number;
  }
};

export default SetVariableNodeType;