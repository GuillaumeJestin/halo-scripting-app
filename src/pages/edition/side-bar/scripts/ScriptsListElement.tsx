import TextInput from "../../../../common/TextInput";
import ListElementContainer from "../ListElementContainer";
import { IoMdTrash } from "react-icons/io";
import PressableDiv from "../../../../common/PressableDiv";
import ScriptNodeType from "../../../../types/node-type/ScriptNodeType";
import { memo } from "react";
import ScriptTypes from "../../../../types/script-type/ScriptTypes";
import Dropdown from "../../../../common/Dropdown";

type ScriptsListElementProps = {
  script: ScriptNodeType;
  onScriptChange: (script: ScriptNodeType) => void;
  onScriptDelete: (script: ScriptNodeType) => void;
}

const LABEL_WIDTH = "4rem"

const ScriptsListElement = ({ script, onScriptChange, onScriptDelete }: ScriptsListElementProps) => {

  return (
    <ListElementContainer noDrag >
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", marginBottom: "0.25rem" }}>
            <div style={{ width: LABEL_WIDTH, fontWeight: "bold" }}>Name</div>
            <TextInput value={script.data.name} fontSize="1rem" style={{ flex: 1, width: undefined }} onChange={name => onScriptChange({ ...script, data: { ...script.data, name } })} />
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: LABEL_WIDTH, fontWeight: "bold" }}>Type</div>
            <Dropdown
              options={ScriptTypes}
              selected={script.data.type}
              onSelection={type => onScriptChange({ ...script, data: { ...script.data, type } })}
            />
          </div>
        </div>
        <div>
          <PressableDiv onPress={() => onScriptDelete(script)}>
            <IoMdTrash />
          </PressableDiv>
        </div>
      </div>
    </ListElementContainer>
  )
}

export default memo(ScriptsListElement);