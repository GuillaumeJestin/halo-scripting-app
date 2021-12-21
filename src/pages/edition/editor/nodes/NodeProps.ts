import { Node, Position } from "react-flow-renderer";

type NodeProps<T extends Node> = {
  id: string;
  data: T["data"];
  type: T["type"];
  selected: boolean;
  isConnectable: boolean;
  xPos?: number;
  yPos?: number;
  targetPosition?: Position;
  sourcePosition?: Position;
  isDragging?: boolean;
  dragHandle?: string;
}

export default NodeProps;