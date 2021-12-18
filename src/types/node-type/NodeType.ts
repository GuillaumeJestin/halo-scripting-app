import CommentNodeType from "./CommentNodeType";
import FunctionNodeType from "./FunctionNodeType";
import IfNodeType from "./IfNodeType";
import MacroEndNodeType from "./MacroEndNodeType";
import MacroNodeType from "./MacroNodeType";
import MacroStartNodeType from "./MacroStartNodeType";
import RandomNodeType from "./RandomNodeType";
import ScriptNodeType from "./ScriptNodeType";
import SetVariableNodeType from "./SetVariableNodeType";
import SleepNodeType from "./SleepNodeType";
import VariableNodeType from "./VariableNodeType";
import WakeNodeType from "./WakeNodeType";

type NodeType = FunctionNodeType
  | CommentNodeType
  | IfNodeType
  | MacroEndNodeType
  | MacroNodeType
  | MacroStartNodeType
  | RandomNodeType
  | ScriptNodeType
  | SetVariableNodeType
  | SleepNodeType
  | VariableNodeType
  | WakeNodeType;

export default NodeType;