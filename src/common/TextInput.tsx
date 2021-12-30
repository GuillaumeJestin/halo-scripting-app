import { CSSProperties, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

type TextInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  style?: CSSProperties;
  fontSize?: number | string;
  placeholder?: string;
  noAdaptiveSize?: boolean;
}

const TextInput = ({ value, onChange, style, fontSize: _fontSize, placeholder, noAdaptiveSize }: TextInputProps) => {

  const widthControlRef = useRef<HTMLDivElement>(null!);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const width = widthControlRef.current?.getBoundingClientRect()?.width || 0;
    setWidth(width);
  }, [value]);

  const fontSize = _fontSize || "0.75rem";

  return (
    <>
      <Container
        placeholder={placeholder}
        style={{ ...(noAdaptiveSize ? {} : { width }), ...style, fontSize }}
        value={value || ""}
        onChange={e => {
          const value = e.target?.value || "";
          onChange?.(value);
        }}
      />
      {
        createPortal(<div style={{ position: "absolute", top: 0, left: 0, opacity: 0, zIndex: -1 }} >
          <div style={{ display: "inline-block", whiteSpace: "nowrap", fontSize }} ref={widthControlRef}>
            {value}
          </div>
        </div>, document.body)
      }
    </>
  )
}

const Container = styled.input`
  color: var(--text-color);
  background: var(--darker);
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 0.75rem;
`;

export default TextInput;