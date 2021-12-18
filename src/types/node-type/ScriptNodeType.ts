import { Node } from "react-flow-renderer"
import ScriptType from "../script-type/ScriptType";

type ScriptNodeType = Omit<Node, "data" | "type"> & {
  type: "script",
  data: {
    name: string;
    type: ScriptType;
  }
};

export default ScriptNodeType;