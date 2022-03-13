import MacroStartNodeType from "../../../../types/node-type/MacroStartNodeType";
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

const MacroStartNode = ({ data, id }: NodeProps<MacroStartNodeType>) => {

  const edges = useEdges(id);

  const color = TypesColors.macro;

  return (
    <NodeContainer style={{ minWidth: 250 }} id={id}>
      <NodeHeader style={{ display: "flex", alignItems: "center" }} leftColor={color} rightColor={color} >
        <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Start</div>
      </NodeHeader>
      <NodeContent>
        <FlowContainer>
          <FlowHandler nodeId={id} type="source" id={FlowOutput} connected={!!edges.outgoers[FlowOutput]} isConnectable />
        </FlowContainer>
        <div>
          poopoo
        </div>
      </NodeContent>
    </NodeContainer>
  )
}

export default MacroStartNode;

// const HandlerContainer = styled.div`
//   display: flex;
//   font-size: 0.75rem;
//   margin-top: 0.5rem;
//   align-items: center;

//   &:first-child {
//     margin-top: 0;
//   }
// `