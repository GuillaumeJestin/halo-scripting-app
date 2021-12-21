import { ArgumentValue } from "../constants/ValueHandlers";

const isInputValueHandle = (id: string | null | undefined) => {
  if (!id) return false;
  return id.includes(ArgumentValue);
}

export default isInputValueHandle;