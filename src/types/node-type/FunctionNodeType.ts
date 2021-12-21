import { Node } from "react-flow-renderer"
import FunctionCategoryType from "../function-type/FunctionCategoryType";

type FunctionNodeType = Omit<Node, "data" | "type"> & {
  type: "function",
  data: {
    function: string;
    category: FunctionCategoryType;
    argumentsValue?: {
      index: number;
      value?: string | number;
    }[];
  }
};

export default FunctionNodeType;