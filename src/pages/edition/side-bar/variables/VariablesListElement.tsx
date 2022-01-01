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
  onVariableDragEnd: (event: MouseEvent, offset: { x: number; y: number; }, variable: VariableType) => void
}

const VariablesListElement = ({ variable, onVariableChange, onVariableDragEnd }: VariablesListElementProps) => {

  return (
    <ListElementContainer onDragEnd={(event, offset) => onVariableDragEnd(event, offset, variable)} >
      <div style={{ display: "flex" }}>
        <div>Name</div>
        <TextInput value={variable.name} fontSize="1rem" style={{ flex: 1, width: undefined }} onChange={name => onVariableChange({ ...variable, name })} />
      </div>
      <div style={{ display: "flex" }}>
        <div>Type</div>
        <Dropdown
          options={ValueTypes.slice(1)}
          optionDisplay={TypeDisplay}
          selected={variable.type}
          onSelection={type => onVariableChange({ ...variable, type })}
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