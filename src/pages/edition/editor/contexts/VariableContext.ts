import { createContext } from "react"
import VariableType from "../../../../types/variable-type/VariableType";

type VariableContextType = {
  variables: VariableType[];
}

const VariableContext = createContext<VariableContextType>({
  variables: []
});

export default VariableContext;