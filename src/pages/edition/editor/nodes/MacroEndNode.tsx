import MacroEndNodeType from "../../../../types/node-type/MacroEndNodeType";
import NodeContainer from "./NodeContainer";
import NodeHeader from "./NodeHeader";
import NodeProps from "./NodeProps";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import NodeContent from "./NodeContent";
import FlowHandler from "../edges/FlowHandler";
import useEdges from "../hooks/useEdges";
import { FlowInput, FlowOutput } from "../constants/FlowHandlers";
import { FlowContainer } from "./FunctionNode";
// import styled from "styled-components";
// import _ from "lodash";

const MacroEndNode = ({ data, id }: NodeProps<MacroEndNodeType>) => {

  const edges = useEdges(id);

  const color = TypesColors.macro;

  return (
    <NodeContainer style={{ minWidth: 250 }} id={id}>
      <NodeHeader style={{ display: "flex", alignItems: "center" }} leftColor={color} rightColor={color} >
        <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>End</div>
      </NodeHeader>
      <NodeContent>
        <FlowContainer>
          <FlowHandler nodeId={id} type="target" id={FlowInput} connected={!!edges.incomers[FlowInput]} />
        </FlowContainer>
        <div>
          peepee
        </div>
      </NodeContent>
    </NodeContainer>
  )
}

export default MacroEndNode;

// const HandlerContainer = styled.div`
//   display: flex;
//   font-size: 0.75rem;
//   margin-top: 0.5rem;
//   align-items: center;

//   &:first-child {
//     margin-top: 0;
//   }
// `