import { Node } from "react-flow-renderer"

type SleepNodeType = Omit<Node, "data" | "type"> & {
  type: "sleep",
  data: {
    script?: string;
    argumentValue?: number;
  }
};

export default SleepNodeType;