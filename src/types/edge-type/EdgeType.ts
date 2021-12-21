import { Edge } from "react-flow-renderer"

type EdgeType = Omit<Edge, "data" | "type"> & {
  type: "flow" | "value",
  data: {
    points?: { x: number, y: number }[];
  }
};

export default EdgeType;