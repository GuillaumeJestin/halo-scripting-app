import { Node } from "react-flow-renderer"

type IfNodeType = Omit<Node, "data" | "type"> & {
  type: "if",
};

export default IfNodeType;