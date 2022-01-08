import _ from "lodash";
import { ConnectionLineComponentProps } from "react-flow-renderer";
import EdgeType from "../../../../types/edge-type/EdgeType";
import FunctionType from "../../../../types/function-type/FunctionType";
import VariableType from "../../../../types/variable-type/VariableType";
import { FlowInput } from "../constants/FlowHandlers";
import { ArgumentValue } from "../constants/ValueHandlers";
import getValueTypefromNode from "../utility/getValueTypefromNode";
import isOutputFlowHandle from "../utility/isOutputFlowHandle";
import isOutputValueHandle from "../utility/isOutputValueHandle";
import { doValueTypesMatch } from "../utility/createEdge"
import { v4 as uuidv4 } from 'uuid';
import FunctionNodeType from "../../../../types/node-type/FunctionNodeType";

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

      let argumentIndex = func.arguments.findIndex(types => {
        return doValueTypesMatch(sourceTypes, types);
      });

      if (argumentIndex < 0 && func.additionalArguments && doValueTypesMatch(sourceTypes, func.additionalArguments)) {
        argumentIndex = 0;
        node.data = { ...node.data, argumentsValue: [{ index: 0 }] };
      }

      if (argumentIndex >= 0) {
        return {
          id: uuidv4(),
          type: "value",
          source: connectionProps.sourceNode!.id,
          target: node.id,
          sourceHandle: connectionProps.sourceHandle!.id,
          targetHandle: ArgumentValue + "-" + argumentIndex,
          data: {}
        }
      }

    }
  }

  return undefined;
}

export default buildEdgeForNewNode;