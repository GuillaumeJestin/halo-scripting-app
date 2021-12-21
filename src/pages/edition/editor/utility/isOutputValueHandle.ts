import { VariableValue, ReturnsValue } from "../constants/ValueHandlers";

const isOutputValueHandle = (id: string | null | undefined) => {
  if (!id) return false;
  return id === VariableValue ||
    id === ReturnsValue
}

export default isOutputValueHandle;