import { FlowInput } from "../constants/FlowHandlers";

const isInputFlowHandle = (id: string | null | undefined) => {
  if (!id) return false;
  return id === FlowInput;
}

export default isInputFlowHandle;