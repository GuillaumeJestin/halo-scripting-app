import { Node } from "react-flow-renderer"

type RandomNodeType = Omit<Node, "data" | "type"> & {
  type: "random",
  data: {
    outputAmount: number;
  }
};

export default RandomNodeType;