import { ReactNode, useMemo } from "react";
import styled from "styled-components";
import convert from 'color-convert';

const OFFSET = 15;

type ColorType = number[];

type NodeHeaderProps = {
  children?: ReactNode;
  leftColor: ColorType;
  rightColor: ColorType;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "color">;

const NodeHeader = ({ children, leftColor, rightColor, style, ...props }: NodeHeaderProps) => {

  const background = useMemo(() => generateBG(leftColor, rightColor), [leftColor, rightColor]);

  return (
    <Container
      {...props}
      style={{ background, ...style }}
    >
      {children}
    </Container>
  )
}

export default NodeHeader;

const Container = styled.div`
  padding: 0.5rem 1rem;
  position: relative;
`

const generateBG = (leftColor: ColorType, rightColor: ColorType) => {

  const hotterHsl = convert.rgb.hsl(leftColor[0], leftColor[1], leftColor[2]);
  const colderHsl = convert.rgb.hsl(rightColor[0], rightColor[1], rightColor[2]);

  const hotter = convert.hsl.rgb([hotterHsl[0] + OFFSET, hotterHsl[1], hotterHsl[2]]);
  const colder = convert.hsl.rgb([colderHsl[0] - OFFSET, colderHsl[1], colderHsl[2]]);

  return `radial-gradient(ellipse at bottom right, rgba(${colder[0]},${colder[1]},${colder[2]}, 0.5), transparent 50%, transparent), 
  radial-gradient(ellipse at top left, rgba(${hotter[0]},${hotter[1]},${hotter[2]}, 0.5), transparent 50%, transparent),
  linear-gradient(0.25turn, rgba(${leftColor[0]},${leftColor[1]},${leftColor[2]}, 0.75), rgba(${rightColor[0]},${rightColor[1]},${rightColor[2]}, 0.75)) `
}