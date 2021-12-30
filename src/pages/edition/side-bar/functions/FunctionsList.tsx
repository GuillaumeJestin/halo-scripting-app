import { memo, useState } from "react";
import TextInput from "../../../../common/TextInput";
import Functions from "../../../../functions/Functions";
import FunctionCategoryType from "../../../../types/function-type/FunctionCategoryType";
import FunctionType from "../../../../types/function-type/FunctionType";
import FunctionsListElement from "./FunctionsListElement";

type FunctionsListProps = {
  onDragEnd: (event: MouseEvent, offset: { x: number, y: number }, func: FunctionType, category: FunctionCategoryType) => void;
}

const FunctionsList = ({ onDragEnd }: FunctionsListProps) => {

  const [search, setSearch] = useState("");

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto" }}>
      <div style={{ display: "flex", padding: "1rem" }}>
        <TextInput fontSize="1rem" value={search} onChange={setSearch} style={{ width: undefined, flex: 1 }} placeholder="Search" />
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: "1rem", paddingTop: 0 }}>
        {
          Functions.common.map(func => {
            return (
              <FunctionsListElement category="common" onDragEnd={onDragEnd} key={func.symbol} function={func} />
            )
          })
        }
      </div>
    </div >
  )
}

export default memo(FunctionsList);