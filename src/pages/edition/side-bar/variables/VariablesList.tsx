import { HiPlus } from "react-icons/hi";
import Button from "../../../../common/Button";
import VariableType from "../../../../types/variable-type/VariableType";
import VariablesListElement from "./VariablesListElement";
import { v4 as uuidv4 } from 'uuid';
import { memo } from "react";

type VariablesListProps = {
  variables: VariableType[];
  onVariableChange: (variable: VariableType, start?: boolean) => void;
  onVariableDragEnd: (event: MouseEvent, offset: { x: number; y: number; }, variable: VariableType) => void;
  onVariableDelete: (variable: VariableType) => void;
};

const VariablesList = ({ variables, onVariableChange, onVariableDragEnd, onVariableDelete }: VariablesListProps) => {

  const addVariable = (start?: boolean) => {
    onVariableChange({
      id: uuidv4(),
      name: "New variable",
      type: "boolean"
    }, start)
  }

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto", padding: "1rem" }}>
      <Button primary onPress={() => addVariable(true)} style={{ marginBottom: "0.75rem" }}><HiPlus /> Add Variable</Button>
      {
        variables.map(variable => {

          return (
            <VariablesListElement key={variable.id} variable={variable} onVariableChange={onVariableChange} onVariableDragEnd={onVariableDragEnd} onVariableDelete={onVariableDelete} />
          )
        })
      }
      <Button primary onPress={() => addVariable()}><HiPlus /> Add Variable</Button>
    </div >
  )
}

export default memo(VariablesList);