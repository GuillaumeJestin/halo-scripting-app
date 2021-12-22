import FunctionNodeType from "../../../../types/node-type/FunctionNodeType";
import NodeContainer from "./NodeContainer";
import NodeHeader from "./NodeHeader";
import NodeProps from "./NodeProps";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import Functions from "../../../../functions/Functions";
import _ from "lodash";
import { useEffect, useMemo } from "react";
import NodeContent from "./NodeContent";
import FlowHandler from "../edges/FlowHandler";
import useEdges from "../hooks/useEdges";
import styled from "styled-components";
import { FlowInput, FlowOutput } from "../constants/FlowHandlers";
import { useUpdateNodeInternals } from "react-flow-renderer";
import ValueHandler from "../edges/ValueHandler";
import { ArgumentValue, ReturnsValue } from "../constants/ValueHandlers";

const FunctionNode = ({ data, id }: NodeProps<FunctionNodeType>) => {
  const category = data.category;

  const functionDefinition = Functions[category].find(func => func.symbol === data.function);

  const colors = useMemo(() => {
    if (functionDefinition) {
      const argumentsColors = _.uniqWith(
        _.flatMap([
          ...functionDefinition.arguments,
          ...(functionDefinition.additionalArguments ? [functionDefinition.additionalArguments] : []),
        ]).map(type => TypesColors[type] || TypesColors.default),
        _.isEqual
      );

      const returnColor = functionDefinition.returns ?
        (TypesColors[functionDefinition.returns] || TypesColors.default)
        : undefined;

      const leftColor = argumentsColors.length === 1 ?
        argumentsColors[0]
        : argumentsColors.length > 1 ?
          TypesColors.default
          : (returnColor || TypesColors.default);

      const rightColor = returnColor || leftColor;

      return [leftColor, rightColor]
    }

    return [TypesColors.default, TypesColors.default];
  }, [functionDefinition]);

  const edges = useEdges(id);

  const isFlowConnected = !!edges.incomers[FlowInput];

  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    updateNodeInternals(id);
  }, [isFlowConnected, id, updateNodeInternals])

  return (
    <NodeContainer style={{ minWidth: 250 }} id={id}>
      <NodeHeader style={{ display: "flex", alignItems: "center" }} leftColor={colors[0]} rightColor={colors[1]} >
        <div style={{ fontWeight: "bold", fontSize: "1.25rem", paddingRight: "2rem" }}>
          {_.capitalize(functionDefinition?.name.split("_").join(" "))}
        </div>
      </NodeHeader>
      <NodeContent>
        <FlowContainer>
          <FlowHandler type="target" id={FlowInput} connected={isFlowConnected} />
          {isFlowConnected && <FlowHandler type="source" id={FlowOutput} connected={!!edges.outgoers[FlowOutput]} isConnectable={!edges.outgoers[FlowOutput]} />}
        </FlowContainer>
        <div style={{ fontStyle: "italic", fontSize: "0.75rem", margin: "0.5rem 0" }}>
          {functionDefinition?.description}
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            {functionDefinition?.arguments.map((arg, index) => {
              const type = Array.isArray(arg) ? arg[0] : arg;

              const name = _.isEqual(arg, ["real", "short", "long"]) ? "Number" : _.capitalize(type.split("_").join(" "));

              const id = ArgumentValue + "-" + index;

              const connected = !!edges.incomers[id];

              return (
                <ValueContainer key={index}>
                  <ValueHandler type="target" id={id} valueType={type} connected={connected} />
                  <div style={{ marginLeft: "0.25rem" }}>{name}</div>
                </ValueContainer>
              )
            })}
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            {
              functionDefinition?.returns && (() => {
                const type = functionDefinition.returns;

                const name = _.capitalize(type.split("_").join(" "));

                const connected = !!edges.outgoers[ReturnsValue];

                return (
                  <ValueContainer>
                    <div style={{ marginRight: "0.25rem" }}>{name}</div>
                    <ValueHandler type="source" id={ReturnsValue} valueType={type} connected={connected} />
                  </ValueContainer>
                )
              })()
            }
          </div>
        </div>
      </NodeContent>
    </NodeContainer>
  )
}

const FlowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ValueContainer = styled.div`
  display: flex;
  font-size: 0.75rem;
`

export default FunctionNode;