import { Node } from "react-flow-renderer"

type SetVariableNodeType = Omit<Node, "data" | "type"> & {
  type: "setVariable",
  data: {
    argumentValues?: { [key: string]: string };
  }
};

export default SetVariableNodeType;