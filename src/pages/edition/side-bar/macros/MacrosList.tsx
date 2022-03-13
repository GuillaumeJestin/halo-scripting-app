import { HiPlus } from "react-icons/hi";
import Button from "../../../../common/Button";
import FileTypeMacro from "../../../../types/file-type/FileTypeMacro";
import MacrosListElement from "./MacrosListElement";

type MacrosListProps = {
  macros: FileTypeMacro[];
  onMacroEdition: (macro: FileTypeMacro) => void;
};

const MacrosList = ({ macros, onMacroEdition }: MacrosListProps) => {

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto", padding: "1rem" }}>
      <Button primary style={{ marginBottom: "0.75rem" }} onPress={() => null}><HiPlus /> Add Macro</Button>
      {
        macros.map(macro => {
          return <MacrosListElement macro={macro} key={macro.id} onMacroDelete={() => null} onMacroDragEnd={() => null} onMacroEdition={onMacroEdition} />
        })
      }
      <Button primary style={{ marginBottom: "0.75rem" }} onPress={() => null}><HiPlus /> Add Macro</Button>
    </div >
  )
}

export default MacrosList;