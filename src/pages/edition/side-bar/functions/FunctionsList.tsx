import { memo, useState } from "react";
import TextInput from "../../../../common/TextInput";
import VirtualizedList, { VirtualizedListItem } from "../../../../common/VirtualizedList";
import Functions from "../../../../functions/Functions";
import FunctionCategoryType from "../../../../types/function-type/FunctionCategoryType";
import FunctionType from "../../../../types/function-type/FunctionType";
import CategoryChoice from "./CategoryChoice";
import FunctionsListElement, { getFunctionName } from "./FunctionsListElement";

type FunctionsListProps = {
  onDragEnd: (event: MouseEvent, offset: { x: number, y: number }, func: FunctionType, category: FunctionCategoryType) => void;
}

const FunctionsList = ({ onDragEnd }: FunctionsListProps) => {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<FunctionCategoryType>("common");

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto" }}>
      <div style={{ display: "flex", padding: "1rem" }}>
        <TextInput fontSize="1rem" value={search} onChange={setSearch} style={{ width: undefined, flex: 1 }} placeholder="Search" />
      </div>
      <div style={{ padding: "1rem", paddingTop: 0 }}>
        <CategoryChoice {...{ category, setCategory }} />
      </div>
      <VirtualizedList style={{ flex: 1, overflow: "auto", padding: "1rem", paddingTop: 0 }} expectedHeight={49}>
        {
          getFilteredFunctions(category, search).map(func => {
            return (
              <VirtualizedListItem key={func.id} id={func.id}>
                <FunctionsListElement category={category} onDragEnd={onDragEnd} function={func} />
              </VirtualizedListItem>
            )
          })
        }
      </VirtualizedList>
    </div >
  )
}

export const getFilteredFunctions = (category: FunctionCategoryType, search: string) => {
  return Functions[category].filter(func => search ? getFunctionName(func.name).toLowerCase().includes(search.toLowerCase()) : true);
}

export default memo(FunctionsList);