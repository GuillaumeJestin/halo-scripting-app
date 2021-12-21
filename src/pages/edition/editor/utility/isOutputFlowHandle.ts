import { FlowOutput } from "../constants/FlowHandlers";

const isOutputFlowHandle = (id: string | null | undefined) => {
  if (!id) return false;
  return id === FlowOutput;
}

export default isOutputFlowHandle;