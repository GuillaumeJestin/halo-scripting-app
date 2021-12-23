import { CSSProperties, ReactNode } from "react";
import { usePress } from '@react-aria/interactions';
import styled from "styled-components";

type PressableDivProps = {
  children?: ReactNode;
  onPress?: () => void;
  style?: CSSProperties;
}

const PressableDiv = ({ children, onPress, style }: PressableDivProps) => {

  const { pressProps } = usePress({
    onPress: e => onPress?.()
  });

  return (
    <Container style={style} {...pressProps} role="button" tabIndex={0}>
      {children}
    </Container>
  );
}


const Container = styled.div`
  cursor: pointer;
`

export default PressableDiv;