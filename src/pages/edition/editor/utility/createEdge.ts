import { Edge, Connection } from "react-flow-renderer";
import { v4 as uuidv4 } from 'uuid';
import EdgeType from "../../../../types/edge-type/EdgeType";
import isInputFlowHandle from "./isInputFlowHandle";
import isInputValueHandle from "./isInputValueHandle";
import isOutputFlowHandle from "./isOutputFlowHandle";
import isOutputValueHandle from "./isOutputValueHandle";

const createEdge = (params: Edge | Connection) => {
  if (isOutputFlowHandle(params.sourceHandle) && isInputFlowHandle(params.targetHandle)) {
    return { ...params, id: uuidv4(), type: "flow" } as EdgeType
  }
  if (isOutputValueHandle(params.sourceHandle) && isInputValueHandle(params.targetHandle)) {
    console.log("fff")
    return { ...params, id: uuidv4(), type: "value" } as EdgeType
  }
  return undefined;
}

export default createEdge;