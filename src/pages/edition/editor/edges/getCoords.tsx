import { XYPosition } from "react-flow-renderer";

const getCoords = (nodeId: string, handleId: string, project: (position: XYPosition) => XYPosition, container?: HTMLDivElement | undefined, zoom?: number) => {
  const node = document.getElementById(nodeId);
  const handle = node?.querySelector("#" + handleId);

  const containerRect = container?.getBoundingClientRect();
  const offsetX = containerRect?.x ?? 0;
  const offsetY = containerRect?.y ?? 0;

  const rect = handle?.getBoundingClientRect();

  const x = (rect?.x || 0) + (rect?.width || 0) / 2;
  const y = (rect?.y || 0) + (rect?.height || 0) / 2;

  const projected = project({ x, y });

  return { x: projected.x - offsetX / (zoom || 1), y: projected.y - offsetY / (zoom || 1) };
}

export default getCoords;