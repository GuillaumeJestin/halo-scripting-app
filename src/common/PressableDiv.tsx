import { CSSProperties, forwardRef, ReactNode } from "react";
import { usePress } from '@react-aria/interactions';
import styled from "styled-components";

type PressableDivProps = {
  children?: ReactNode;
  onPress?: () => void;
  style?: CSSProperties;
}

const PressableDiv = forwardRef<HTMLDivElement, PressableDivProps>(({ children, onPress, style }, ref) => {

  const { pressProps } = usePress({
    onPress: e => onPress?.()
  });

  return (
    <Container ref={ref} style={style} {...pressProps} role="button" tabIndex={0}>
      {children}
    </Container>
  );
})


const Container = styled.div`
  cursor: pointer;
`

export default PressableDiv;