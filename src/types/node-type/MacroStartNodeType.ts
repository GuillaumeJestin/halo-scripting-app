import { Node } from "react-flow-renderer"

type MacroStartNodeType = Omit<Node, "data" | "type"> & {
  type: "macroStart",
};

export default MacroStartNodeType;