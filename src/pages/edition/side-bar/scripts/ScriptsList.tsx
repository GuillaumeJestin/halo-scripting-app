import { HiPlus } from "react-icons/hi";
import Button from "../../../../common/Button";
import ScriptNodeType from "../../../../types/node-type/ScriptNodeType";
import ScriptsListElement from "./ScriptsListElement";

type ScriptsListProps = {
  scripts: ScriptNodeType[];
  onScriptChange: (script: ScriptNodeType) => void;
  createScript: (start?: boolean) => void;
  onScriptDelete: (script: ScriptNodeType) => void;
};

const ScriptsList = ({ scripts, onScriptChange, createScript, onScriptDelete }: ScriptsListProps) => {

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto", padding: "1rem" }}>
      <Button primary style={{ marginBottom: "0.75rem" }} onPress={() => createScript(true)}><HiPlus /> Add Script</Button>
      {
        scripts.map(script => {
          return <ScriptsListElement script={script} key={script.id} onScriptChange={onScriptChange} onScriptDelete={onScriptDelete} />
        })
      }
      <Button primary style={{ marginBottom: "0.75rem" }} onPress={() => createScript()}><HiPlus /> Add Script</Button>
    </div >
  )
}

export default ScriptsList;