import { Edge, Connection } from "react-flow-renderer";
import { FlowInput, FlowOutput } from "../constants/FlowHandlers";
import { v4 as uuidv4 } from 'uuid';

const createEdge = (params: Edge | Connection) => {
  if (params.sourceHandle === FlowOutput && params.targetHandle === FlowInput) {
    return { ...params, id: uuidv4(), type: "flow" } as Edge
  }
  return undefined;
}

export default createEdge;