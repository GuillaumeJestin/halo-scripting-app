import VariableType from "../../../../types/variable-type/VariableType";
import VariablesListElement from "./VariablesListElement";

type VariablesListProps = {
  variables: VariableType[];
  onVariableChange: (variable: VariableType) => void;
};

const VariablesList = ({ variables, onVariableChange }: VariablesListProps) => {

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto", padding: "1rem" }}>
      {
        variables.map(variable => {

          return (
            <VariablesListElement key={variable.id} variable={variable} onVariableChange={onVariableChange} />
          )
        })
      }
    </div >
  )
}

export default VariablesList;