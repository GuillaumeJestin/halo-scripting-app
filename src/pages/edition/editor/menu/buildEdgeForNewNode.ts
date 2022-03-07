import { ConnectionLineComponentProps } from "react-flow-renderer";
import EdgeType from "../../../../types/edge-type/EdgeType";
import FunctionType from "../../../../types/function-type/FunctionType";
import VariableType from "../../../../types/variable-type/VariableType";
import { FlowInput } from "../constants/FlowHandlers";
import getValueTypefromNode from "../utility/getValueTypefromNode";
import isOutputFlowHandle from "../utility/isOutputFlowHandle";
import isOutputValueHandle from "../utility/isOutputValueHandle";
import { v4 as uuidv4 } from 'uuid';
import FunctionNodeType from "../../../../types/node-type/FunctionNodeType";
import getValueInputFromFunctionByType from "../utility/getValueInputFromFunctionByType";

const buildEdgeForNewNode = (connectionProps: ConnectionLineComponentProps | undefined, node: FunctionNodeType, func: FunctionType, variables: VariableType[]): EdgeType | undefined => {
  if (connectionProps) {
    // If temporary connection is of type flow
    if (isOutputFlowHandle(connectionProps.sourceHandle?.id)) {
      return {
        id: uuidv4(),
        type: "flow",
        source: connectionProps.sourceNode!.id,
        target: node.id,
        sourceHandle: connectionProps.sourceHandle!.id,
        targetHandle: FlowInput,
        data: {}
      }
    }
    else if (isOutputValueHandle(connectionProps.sourceHandle?.id)) {

      const sourceTypes = getValueTypefromNode(connectionProps.sourceNode! as any, connectionProps.sourceHandle! as any, variables);

      const [handle, shouldAddExtraArg] = getValueInputFromFunctionByType(func, sourceTypes);

      if (handle) {
        if (shouldAddExtraArg) {
          node.data = { ...node.data, argumentsValue: [{ index: 0 }] };
        }
        return {
          id: uuidv4(),
          type: "value",
          source: connectionProps.sourceNode!.id,
          target: node.id,
          sourceHandle: connectionProps.sourceHandle!.id,
          targetHandle: handle,
          data: {}
        }
      }
    }
  }

  return undefined;
}

export default buildEdgeForNewNode;