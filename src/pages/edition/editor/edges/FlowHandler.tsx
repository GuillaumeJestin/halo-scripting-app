import { Handle, Position } from 'react-flow-renderer';
import styled from 'styled-components';

type FlowHandlerProp = {
  type: 'source' | 'target';
  id: string;
  connected?: boolean;
  hide?: boolean;
}

const FlowHandler = ({ type, id, connected, hide }: FlowHandlerProp) => {

  const properties = connected ?
    {
      fill: "white",
      stroke: "none"
    }
    :
    {
      fill: "none",
      stroke: "white",
      strokeWidth: 2,
      style: { transform: "scale(0.9)", transformOrigin: "center" }
    }

  return (
    <div style={{ position: "relative", display: "inline-flex", ...(hide ? { opacity: 0 } : {}) }} id={id}>
      <StyledHandle
        isConnectable={!hide}
        type={type}
        position={type === "source" ? Position.Right : Position.Left}
        id={id}
      />
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 22">
        <path
          d="M2,22a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H6.926l8.81,7.7c1.68,1.468,1.68,5.139,0,6.606L6.926,22H2Z"
          {...properties}
        />
      </svg>
    </div>
  )
}

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

export default FlowHandler;