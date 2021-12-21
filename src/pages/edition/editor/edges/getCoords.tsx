import { XYPosition } from "react-flow-renderer";

const getCoords = (nodeId: string, handleId: string, project: (position: XYPosition) => XYPosition) => {
  const node = document.getElementById(nodeId);
  const handle = node?.querySelector("#" + handleId);

  const rect = handle?.getBoundingClientRect();

  const x = (rect?.x || 0) + (rect?.width || 0) / 2;
  const y = (rect?.y || 0) + (rect?.height || 0) / 2;

  return project({ x, y });
}

export default getCoords;