import { CSSProperties } from "react";
import styled from "styled-components";

type RadioProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
  style?: CSSProperties;
  tabIndex?: number;
};

const Radio = ({ value, onChange, style, tabIndex }: RadioProps) => {

  return (
    <Container
      type="Radio"
      checked={value}
      onChange={() => onChange?.(!value)}
      style={{ ...style }}
      tabIndex={tabIndex}
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