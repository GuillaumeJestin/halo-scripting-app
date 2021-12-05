import { Node } from "react-flow-renderer"

type FunctionNodeType = Omit<Node, "data" | "type"> & {
  type: "function",
  data: {
    function: string;
    argumentsValue?: {
      index: number;
      value: string | number;
    }[];
  }
};

export default FunctionNodeType;