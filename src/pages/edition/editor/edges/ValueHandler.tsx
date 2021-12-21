import { Handle, Position } from "react-flow-renderer";
import styled from "styled-components";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import ValueType from "../../../../types/value-type/ValueType";

type ValueHandlerProp = {
  type: 'source' | 'target';
  id: string;
  connected?: boolean;
  valueType: ValueType;
}

const SIZE = 16;
const INNER_SIZE = 10;

const ValueHandler = ({ type, id, connected, valueType }: ValueHandlerProp) => {

  const color = TypesColors[valueType] || TypesColors.default;

  return (
    <div style={{ position: "relative", display: "inline-flex" }} id={id}>
      <StyledHandle
        type={type}
        position={type === "source" ? Position.Right : Position.Left}
        id={id}
      />
      <Circle
        style={{ backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})` }}
      >
        {!connected && <InnerCircle />}
      </Circle>
    </div>
  )
}

const Circle = styled.div`
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: 100%;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerCircle = styled.div`
  width: ${INNER_SIZE}px;
  height: ${INNER_SIZE}px;
  border-radius: 100%;
  background-color: var(--node-background-color);
`

const StyledHandle = styled(Handle)`
  top: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: unset !important;
  height: unset !important;
  transform: unset;
  border-radius: unset;
  opacity: 0;
`

export default ValueHandler;