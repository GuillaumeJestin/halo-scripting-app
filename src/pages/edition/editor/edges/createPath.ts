import _ from "lodash";
import { XYPosition } from "react-flow-renderer";

const OFFSET = 30;
const MIN_CURVE_OFFSET = 30;
const MAX_CURVE_OFFSET = 150;

const createPath = (sourceCoords: XYPosition, targetCoords: XYPosition, points?: XYPosition[]) => {

  const intervals = createIntervals(sourceCoords, targetCoords, points);

  return intervals.map(interval => getIntervalPath(interval)).join(" ");
}

export default createPath;

const getIntervalPath = (interval: [XYPosition, XYPosition]) => {
  const start = interval[0];
  const end = interval[1];

  const curveOffset = _.clamp((end.x - start.x) / 2, MIN_CURVE_OFFSET, MAX_CURVE_OFFSET);

  const p1 = start;
  const p2 = { x: start.x + OFFSET, y: start.y };
  const c1 = { x: p2.x + curveOffset, y: p2.y };
  const p3 = { x: end.x - OFFSET, y: end.y };
  const c2 = { x: p3.x - curveOffset, y: p3.y };
  const p4 = end;

  return `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${p3.x} ${p3.y} L ${p4.x} ${p4.y}`;
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