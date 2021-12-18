import { Node } from "react-flow-renderer"

type WakeNodeType = Omit<Node, "data" | "type"> & {
  type: "wake",
  data: {
    script?: string;
    argumentValue?: number;
  }
};

export default WakeNodeType;