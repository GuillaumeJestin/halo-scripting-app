import SetVariableNodeType from "../../../../types/node-type/SetVariableNodeType";
import NodeContainer from "./NodeContainer";
import NodeHeader from "./NodeHeader";
import NodeProps from "./NodeProps";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import NodeContent from "./NodeContent";
import FlowHandler from "../edges/FlowHandler";
import useEdges from "../hooks/useEdges";
import { FlowInput, FlowOutput } from "../constants/FlowHandlers";
import { FlowContainer } from "./FunctionNode";
import styled from "styled-components";
import ValueHandler from "../edges/ValueHandler";
import { ArgumentValue, VariableValue } from "../constants/ValueHandlers";
import _ from "lodash";
import useTypeFromEdge from "../hooks/useTypeFromEdge";

const SetVariableNode = ({ data, id }: NodeProps<SetVariableNodeType>) => {

  const scriptColor = TypesColors.script || TypesColors.default;

  const edges = useEdges(id);

  const valueType = useTypeFromEdge(edges.incomers[ArgumentValue], "source");
  const variableType = useTypeFromEdge(edges.incomers[VariableValue], "source");

  const type = valueType || variableType || ["any"];

  const isFlowConnected = !!edges.incomers[FlowInput];

  return (
    <NodeContainer style={{ minWidth: 250 }} id={id}>
      <NodeHeader style={{ display: "flex", alignItems: "center" }} leftColor={scriptColor} rightColor={scriptColor} >
        <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Set Variable</div>
      </NodeHeader>
      <NodeContent>
        <FlowContainer>
          <FlowHandler nodeId={id} type="target" id={FlowInput} connected={isFlowConnected} />
          {isFlowConnected && <FlowHandler nodeId={id} type="source" id={FlowOutput} connected={!!edges.outgoers[FlowOutput]} isConnectable={!edges.outgoers[FlowOutput]} />}
        </FlowContainer>
        <div style={{ fontStyle: "italic", fontSize: "0.75rem", margin: "0.5rem 0" }}>
          Sets the value of a defined global variable.
        </div>
        <div>
          <HandlerContainer>
            <ValueHandler nodeId={id} type="target" id={ArgumentValue} valueType={type[0] || "any"} connected={false} isConnectable={!false} />
            <div style={{ marginLeft: "0.25rem" }}>Value</div>
          </HandlerContainer>
          <HandlerContainer>
            <ValueHandler nodeId={id} type="target" id={VariableValue} valueType={type[0] || "any"} connected={false} isConnectable={!false} />
            <div style={{ marginLeft: "0.25rem" }}>Variable</div>
          </HandlerContainer>
        </div>
      </NodeContent>
    </NodeContainer>
  )
}

export default SetVariableNode;

const HandlerContainer = styled.div`
  display: flex;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  align-items: center;

  &:first-child {
    margin-top: 0;
  }
`