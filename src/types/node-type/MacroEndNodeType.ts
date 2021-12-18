import { Node } from "react-flow-renderer"

type MacroEndNodeType = Omit<Node, "data" | "type"> & {
  type: "macroEnd",
};

export default MacroEndNodeType;