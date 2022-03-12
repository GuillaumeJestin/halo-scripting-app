import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import convert from 'color-convert';
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import { Tween, Easing } from "@tweenjs/tween.js";

extend([mixPlugin]);

const OFFSET = 15;

type ColorType = number[];

type NodeHeaderProps = {
  children?: ReactNode;
  leftColor: ColorType;
  rightColor: ColorType;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "color">;

const NodeHeader = ({ children, leftColor, rightColor, style, ...props }: NodeHeaderProps) => {

  const [previousLeftColor, setPreviousLeftColor] = useState(leftColor);
  const [previousRightColor, setPreviousRightColor] = useState(rightColor);
  const [transition, setTransition] = useState(1);

  const mixedLeftColor = useMemo(() => {
    const color = colord({ r: previousLeftColor[0], g: previousLeftColor[1], b: previousLeftColor[2] })
      .mix({ r: leftColor[0], g: leftColor[1], b: leftColor[2] }, transition).toRgb();

    return [color.r, color.g, color.b];
  }, [previousLeftColor, leftColor, transition]);
  const mixedRightColor = useMemo(() => {
    const color = colord({ r: previousRightColor[0], g: previousRightColor[1], b: previousRightColor[2] })
      .mix({ r: rightColor[0], g: rightColor[1], b: rightColor[2] }, transition).toRgb();

    return [color.r, color.g, color.b];
  }, [previousRightColor, rightColor, transition]);

  const tween = useRef<Tween<{ value: number; }> | undefined>(undefined);
  const isAlive = useRef(true);
  useEffect(() => () => { isAlive.current = false; tween.current?.stop(); }, []);
  useEffect(() => () => {
    if (isAlive.current) {
      setTransition(0);
      setPreviousLeftColor(leftColor);
      setPreviousRightColor(rightColor);

      tween.current?.stop();

      tween.current = new Tween({ value: 0 })
        .to({ value: 1 }, 200)
        .easing(Easing.Quadratic.InOut)
        .onUpdate(({ value }) => {
          setTransition(value);
        })
        .start()

    }
  }, [leftColor, rightColor]);

  const background = useMemo(() => generateBG(mixedLeftColor, mixedRightColor), [mixedLeftColor, mixedRightColor]);

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
  transition: all .2s;
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