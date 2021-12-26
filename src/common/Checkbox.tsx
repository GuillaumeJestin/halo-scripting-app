import { CSSProperties } from "react";
import styled from "styled-components";

type CheckboxProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
  style?: CSSProperties;
};

const Checkbox = ({ value, onChange, style }: CheckboxProps) => {

  return (
    <Container
      type="checkbox"
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

export default Checkbox;