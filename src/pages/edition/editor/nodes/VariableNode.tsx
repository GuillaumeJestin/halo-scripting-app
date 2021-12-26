import { useContext } from "react";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import VariableNodeType from "../../../../types/node-type/VariableNodeType";
import { VariableValue } from "../constants/ValueHandlers";
import VariableContext from "../contexts/VariableContext";
import ValueHandler from "../edges/ValueHandler";
import useEdges from "../hooks/useEdges";
import NodeContainer from "./NodeContainer";
import NodeHeader from "./NodeHeader";
import NodeProps from "./NodeProps";

const VariableNode = ({ data, id }: NodeProps<VariableNodeType>) => {
  const { variables } = useContext(VariableContext);

  const variable = variables.find(variable => variable.id === data.variableId);

  const variableColor = variable ? TypesColors[variable.type] || TypesColors.default : TypesColors.default;

  const edges = useEdges(id);

  const connected = !!edges.outgoers[VariableValue]

  return (
    <NodeContainer id={id}>
      <NodeHeader style={{ display: "flex", alignItems: "center" }} leftColor={variableColor} rightColor={variableColor} >
        <div style={{ flex: 1, fontWeight: "bold", fontSize: "1.25rem", paddingRight: "2rem" }}>{variable?.name}</div>
        {variable && <ValueHandler nodeId={id} type="source" id={VariableValue} valueType={variable.type} connected={connected} />}
      </NodeHeader>
    </NodeContainer>
  )
}

export default VariableNode;