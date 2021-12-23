import _ from "lodash";
import { XYPosition } from "react-flow-renderer";

const OFFSET = 30;
const MIN_CURVE_OFFSET = 30;
const MAX_CURVE_OFFSET = 150;

const createPath = (sourceCoords: XYPosition, targetCoords: XYPosition, points?: XYPosition[]) => {

  const start = { x: sourceCoords.x + OFFSET, y: sourceCoords.y };
  const end = { x: targetCoords.x - OFFSET, y: targetCoords.y };

  const intervals = createIntervals(start, end, points);

  return `M ${sourceCoords.x} ${sourceCoords.y} L ${start.x} ${start.y}` + intervals.map(interval => getIntervalPath(interval)).join(" ") + `M ${end.x} ${end.y} L ${targetCoords.x} ${targetCoords.y}`;
}

export default createPath;

const getIntervalPath = (interval: [XYPosition, XYPosition]) => {
  const start = interval[0];
  const end = interval[1];

  const curveOffset = _.clamp((end.x - start.x) / 2, MIN_CURVE_OFFSET, MAX_CURVE_OFFSET);

  const p1 = start;
  const c1 = { x: p1.x + curveOffset, y: p1.y };
  const p2 = end;
  const c2 = { x: p2.x - curveOffset, y: p2.y };

  return `M ${p1.x} ${p1.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${p2.x} ${p2.y}`;
}

const createIntervals = (sourceCoords: XYPosition, targetCoords: XYPosition, points?: XYPosition[]): [XYPosition, XYPosition][] => {
  if (points?.length) {
    const res: [XYPosition, XYPosition][] = [];

    let lastPoint = sourceCoords;

    points.forEach(point => {
      res.push([lastPoint, point]);
      lastPoint = point;
    })

    res.push([lastPoint, targetCoords]);

    return res;
  }
  return [[sourceCoords, targetCoords]];
}