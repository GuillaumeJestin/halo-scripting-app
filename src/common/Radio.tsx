import { CSSProperties } from "react";
import styled from "styled-components";

type RadioProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
  style?: CSSProperties;
};

const Radio = ({ value, onChange, style }: RadioProps) => {

  return (
    <Container
      type="Radio"
      checked={value}
      onChange={() => onChange?.(!value)}
      style={{ ...style }}
    />
  )
}

const Container = styled.input`
  color: var(--text-color);
  background: var(--darker);
  border: none;
  border-radius: 0.25rem;
`;

export default Radio;