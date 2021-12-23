import FunctionNodeType from "../../../../types/node-type/FunctionNodeType";
import NodeContainer from "./NodeContainer";
import NodeHeader from "./NodeHeader";
import NodeProps from "./NodeProps";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import Functions from "../../../../functions/Functions";
import _ from "lodash";
import { useContext, useEffect, useMemo } from "react";
import NodeContent from "./NodeContent";
import FlowHandler from "../edges/FlowHandler";
import useEdges from "../hooks/useEdges";
import styled from "styled-components";
import { FlowInput, FlowOutput } from "../constants/FlowHandlers";
import { isEdge, isNode, useUpdateNodeInternals } from "react-flow-renderer";
import ValueHandler from "../edges/ValueHandler";
import { ArgumentValue, ReturnsValue } from "../constants/ValueHandlers";
import ValueType from "../../../../types/value-type/ValueType";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import Button from "../../../../common/Button";
import ElementsContext from "../contexts/ElementsContext";
import PressableDiv from "../../../../common/PressableDiv";

const FunctionNode = ({ data, id }: NodeProps<FunctionNodeType>) => {
  const category = data.category;
  const functionSymbol = data.function;

  const functionDefinition = useMemo(() => Functions[category].find(func => func.symbol === functionSymbol), [category, functionSymbol]);

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
  }, [isFlowConnected, id, updateNodeInternals]);

  const { setElements } = useContext(ElementsContext)
  const additionalArgumentsType = functionDefinition?.additionalArguments;
  const additionalArguments = _.compact(data.argumentsValue?.filter(({ index }) => index >= (functionDefinition?.arguments.length || 0)).map(() => additionalArgumentsType));
  const onAddArgument = () => {
    setElements(elements => {
      const newElements = [...elements];

      const index = newElements.findIndex(node => node.id === id);
      const node = newElements[index];
      if (node && isNode(node) && node.type === "function") {
        const newNode = { ...node };

        let argumentIndex = functionDefinition?.arguments.length || 0;
        if (newNode.data.argumentsValue) {
          const biggestIndex = _.max(newNode.data.argumentsValue.map(({ index }) => index));
          if (biggestIndex !== undefined && biggestIndex >= argumentIndex) {
            argumentIndex = biggestIndex + 1;
          }
        }

        newNode.data = {
          ...newNode.data,
          argumentsValue: [...(newNode.data.argumentsValue || []), { index: argumentIndex }]
        };

        newElements[index] = newNode;
      }

      return newElements;
    })
  }
  const onRemoveArgument = (argIndex: number) => {
    setElements(elements => {
      console.log(argIndex)
      const newElements = [...elements];

      // Removing the edge that could be connected to that value
      const edgeId = ArgumentValue + "-" + argIndex;
      const edgeIndex = newElements.findIndex(edge => isEdge(edge) && edge.targetHandle === edgeId);
      if (edgeIndex >= 0) {
        newElements.splice(edgeIndex, 1);
      }

      const index = newElements.findIndex(node => node.id === id);
      const node = newElements[index];
      if (node && isNode(node) && node.type === "function") {
        console.log(node)
        const newNode = { ...node };

        if (newNode.data.argumentsValue) {
          // Gathering also edges to update
          const handlesToUpdate: string[] = [];
          const newArgumentsValue = newNode.data.argumentsValue.filter(arg => arg.index !== argIndex).map(arg => {
            if (arg.index > argIndex) {
              handlesToUpdate.push(ArgumentValue + "-" + arg.index);
              return { ...arg, index: arg.index - 1 };
            }
            return arg;
          });

          newNode.data = {
            ...newNode.data,
            argumentsValue: newArgumentsValue,
          }

          // Updating edges from higher indexes
          handlesToUpdate.forEach(id => {
            const index = newElements.findIndex(edge => isEdge(edge) && edge.targetHandle === id);
            const edge = newElements[index];
            if (edge && isEdge(edge) && edge.targetHandle) {
              const argIndex = _.toNumber(edge.targetHandle.split("-")[1]) - 1;
              newElements[index] = {
                ...edge,
                targetHandle: ArgumentValue + "-" + argIndex,
              };
            }
          });
        }

        newElements[index] = newNode;
      }


      return newElements;
    })
  }

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
            {[...(functionDefinition?.arguments || []), ...additionalArguments].map((arg, index) => {
              const type = Array.isArray(arg) ? arg[0] : arg;

              const name = getArgumentName(arg);

              const id = ArgumentValue + "-" + index;

              const connected = !!edges.incomers[id];

              const isAdditional = index >= (functionDefinition?.arguments.length || 0);

              return (
                <ValueContainer key={index}>
                  <ValueHandler type="target" id={id} valueType={type} connected={connected} isConnectable={!connected} />
                  <div style={{ marginLeft: "0.25rem" }}>{name}</div>
                  {isAdditional && <PressableDiv onPress={() => onRemoveArgument(index)} style={{ display: "flex" }}><BiMinus /></PressableDiv>}
                </ValueContainer>
              )
            })}
            {
              additionalArgumentsType && <ValueContainer>
                <Button onPress={onAddArgument}>
                  <BsPlusLg /> Add {getArgumentName(additionalArgumentsType)}
                </Button>
              </ValueContainer>
            }
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "baseline" }}>
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

const getArgumentName = (arg: ValueType | ValueType[]) => {
  const type = Array.isArray(arg) ? arg[0] : arg;

  return _.isEqual(arg, ["real", "short", "long"]) ? "Number" : _.capitalize(type.split("_").join(" "));
}

const FlowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ValueContainer = styled.div`
  display: flex;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  align-items: center;

  &:first-child {
    margin-top: 0;
  }
`

export default FunctionNode;