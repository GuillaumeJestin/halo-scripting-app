import Dropdown from "../../../../common/Dropdown";
import TextInput from "../../../../common/TextInput";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import TypesIcons from "../../../../theme/types-colors/TypesIcons";
import ValueType from "../../../../types/value-type/ValueType";
import ValueTypes from "../../../../types/value-type/ValueTypes";
import VariableType from "../../../../types/variable-type/VariableType";
import { getArgumentName } from "../../editor/nodes/FunctionNode";
import ListElementContainer from "../ListElementContainer";

type VariablesListElementProps = {
  variable: VariableType;
  onVariableChange: (variable: VariableType) => void;
}

const VariablesListElement = ({ variable }: VariablesListElementProps) => {

  return (
    <ListElementContainer >
      <div style={{ display: "flex" }}>
        <div>Name</div>
        <TextInput value={variable.name} fontSize="1rem" style={{ flex: 1, width: undefined }} />
      </div>
      <div style={{ display: "flex" }}>
        <div>Type</div>
        {/* <TextInput value={variable.type} /> */}
        <Dropdown
          options={ValueTypes}
          optionDisplay={TypeDisplay}
          selected={variable.type}
        />
      </div>
    </ListElementContainer>
  )
}

const TypeDisplay = ({ option }: { option: ValueType }) => {
  const color = TypesColors[option] || TypesColors.default;
  const Icon = TypesIcons[option] || TypesIcons.default;

  return <><Icon color={`rgb(${color[0]},${color[1]},${color[2]})`} /> {getArgumentName(option)}</>
}

export default VariablesListElement;