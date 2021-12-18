import { Node } from "react-flow-renderer"

type MacroNodeType = Omit<Node, "data" | "type"> & {
  type: "macro",
  data: {
    macro: string;
    // TODO: the rest
  }
};

export default MacroNodeType;