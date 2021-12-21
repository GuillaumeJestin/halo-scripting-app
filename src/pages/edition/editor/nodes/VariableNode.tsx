import { useContext } from "react";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import VariableNodeType from "../../../../types/node-type/VariableNodeType";
import VariableContext from "../contexts/VariableContext";
import NodeContainer from "./NodeContainer";
import NodeHeader from "./NodeHeader";
import NodeProps from "./NodeProps";

const VariableNode = ({ data }: NodeProps<VariableNodeType>) => {

  const { variables } = useContext(VariableContext);

  const variable = variables.find(variable => variable.id === data.variableId);

  const variableColor = variable ? TypesColors[variable.type] || TypesColors.default : TypesColors.default;

  return (
    <NodeContainer >
      <NodeHeader leftColor={variableColor} rightColor={variableColor} >
        <div style={{ fontWeight: "bold", fontSize: "1.25rem", paddingRight: "2rem" }}>{variable?.name}</div>
      </NodeHeader>
    </NodeContainer>
  )
}

export default VariableNode;