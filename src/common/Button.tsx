import { ReactNode } from "react";
import { usePress } from '@react-aria/interactions';
import styled from "styled-components";

type ButtonProps = {
  children?: ReactNode;
  onPress?: () => void;
  primary?: boolean;
}

const Button = ({ children, onPress, primary }: ButtonProps) => {

  const { pressProps } = usePress({
    onPress: e => onPress?.()
  });

  return (
    <Container
      {...pressProps}
      style={{
        ...(primary ? { background: "var(--primary)" } : {})
      }}
    >
      {children}
    </Container>
  );
}

const Container = styled.button`
  color: var(--text-color);
  background: var(--darker);
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
`

export default Button;