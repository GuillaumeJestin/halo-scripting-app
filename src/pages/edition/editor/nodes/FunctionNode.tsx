import FunctionNodeType from "../../../../types/node-type/FunctionNodeType";
import NodeContainer from "./NodeContainer";
import NodeHeader from "./NodeHeader";
import NodeProps from "./NodeProps";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import Functions from "../../../../functions/Functions";
import _ from "lodash";
import { useMemo } from "react";
import NodeContent from "./NodeContent";
import FlowHandler from "../edges/FlowHandler";
import useEdges from "../hooks/useEdges";
import styled from "styled-components";
import { FlowInput, FlowOutput } from "../constants/FlowHandlers";

const FunctionNode = ({ data, id }: NodeProps<FunctionNodeType>) => {
  console.log("HAYAA")

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
          <FlowHandler type="source" id={FlowOutput} connected={!!edges.outgoers[FlowOutput]} hide={!isFlowConnected} />
        </FlowContainer>
        <div style={{ fontStyle: "italic", fontSize: "0.75rem" }}>
          {functionDefinition?.description}
        </div>
      </NodeContent>
    </NodeContainer>
  )
}

const FlowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export default FunctionNode;