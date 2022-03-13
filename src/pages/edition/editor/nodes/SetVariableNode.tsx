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
import { isNode, useUpdateNodeInternals } from "react-flow-renderer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { ActionSetElements, EditorReducerAction } from "../store/EditorReducer";
import Checkbox from "../../../../common/Checkbox";
import TextInput from "../../../../common/TextInput";

const SetVariableNode = ({ data, id }: NodeProps<SetVariableNodeType>) => {

  const edges = useEdges(id);

  const valueType = useTypeFromEdge(edges.incomers[ArgumentValue], "source");
  const variableType = useTypeFromEdge(edges.incomers[VariableValue], "source");

  const type = valueType || variableType || ["any"];

  const isFlowConnected = !!edges.incomers[FlowInput];

  const color = TypesColors[type[0]] || TypesColors.default;

  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    updateNodeInternals(id);
  }, [isFlowConnected, id, updateNodeInternals]);

  const isValueConnected = !!edges.incomers[ArgumentValue];

  const value = data?.argumentValues?.[type[0]];

  const dispatch = useDispatch<Dispatch<EditorReducerAction>>();

  const onValueChange = (value: string) => {
    dispatch({
      type: ActionSetElements, setElements: elements => {
        const newElements = [...elements];

        const index = newElements.findIndex(node => isNode(node) && node.id === id);

        if (index >= 0) {
          const node = newElements[index] as SetVariableNodeType;

          const argumentValues = { ...(node.data?.argumentValues || {}), [type[0]]: value };

          const newNode = { ...node, data: { ...node.data, argumentValues } };

          newElements[index] = newNode;
        }

        return newElements;
      }
    })
  }

  const variableConnected = !!edges.incomers[VariableValue];
  const valueConnected = !!edges.incomers[ArgumentValue];

  return (
    <NodeContainer style={{ minWidth: 250 }} id={id}>
      <NodeHeader style={{ display: "flex", alignItems: "center" }} leftColor={color} rightColor={color} >
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
            <ValueHandler nodeId={id} type="target" id={VariableValue} valueType={type[0] || "any"} connected={variableConnected} isConnectable={!variableConnected} />
            <div style={{ marginLeft: "0.25rem" }}>Variable</div>
          </HandlerContainer>
          <HandlerContainer>
            <ValueHandler nodeId={id} type="target" id={ArgumentValue} valueType={type[0] || "any"} connected={valueConnected} isConnectable={!valueConnected} />
            <div style={{ marginLeft: "0.25rem" }}>Value</div>
            {!isValueConnected &&
              (type[0] === "boolean" ?
                <Checkbox value={value === "true"} onChange={value => onValueChange(value ? "true" : "false")} style={{ margin: "0 .25rem" }} />
                :
                <TextInput value={value} onChange={onValueChange} style={{ margin: "0 .25rem" }} />)
            }
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