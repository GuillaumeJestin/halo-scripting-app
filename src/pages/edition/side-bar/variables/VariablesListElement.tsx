import Dropdown from "../../../../common/Dropdown";
import TextInput from "../../../../common/TextInput";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import TypesIcons from "../../../../theme/types-colors/TypesIcons";
import ValueType from "../../../../types/value-type/ValueType";
import ValueTypes from "../../../../types/value-type/ValueTypes";
import VariableType from "../../../../types/variable-type/VariableType";
import { getArgumentName } from "../../editor/nodes/FunctionNode";
import ListElementContainer from "../ListElementContainer";
import { IoMdTrash } from "react-icons/io";
import PressableDiv from "../../../../common/PressableDiv";

type VariablesListElementProps = {
  variable: VariableType;
  onVariableChange: (variable: VariableType) => void;
  onVariableDragEnd: (event: MouseEvent, offset: { x: number; y: number; }, variable: VariableType) => void;
  onVariableDelete: (variable: VariableType) => void;
}

const LABEL_WIDTH = "4rem"

const VariablesListElement = ({ variable, onVariableChange, onVariableDragEnd, onVariableDelete }: VariablesListElementProps) => {

  return (
    <ListElementContainer onDragEnd={(event, offset) => onVariableDragEnd(event, offset, variable)} >
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", marginBottom: "0.25rem" }}>
            <div style={{ width: LABEL_WIDTH, fontWeight: "bold" }}>Name</div>
            <TextInput value={variable.name} fontSize="1rem" style={{ flex: 1, width: undefined }} onChange={name => onVariableChange({ ...variable, name })} />
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: LABEL_WIDTH, fontWeight: "bold" }}>Type</div>
            <Dropdown
              options={ValueTypes.slice(1)}
              optionDisplay={TypeDisplay}
              selected={variable.type}
              onSelection={type => onVariableChange({ ...variable, type })}
            />
          </div>
        </div>
        <div>
          <PressableDiv onPress={() => onVariableDelete(variable)}>
            <IoMdTrash />
          </PressableDiv>
        </div>
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