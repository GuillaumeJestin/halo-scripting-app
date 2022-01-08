import ScriptNodeType from "../../../../types/node-type/ScriptNodeType";
import NodeContainer from "./NodeContainer";
import NodeHeader from "./NodeHeader";
import NodeProps from "./NodeProps";
import { ImArrowRight } from "react-icons/im";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import NodeContent from "./NodeContent";
import FlowHandler from "../edges/FlowHandler";
import useEdges from "../hooks/useEdges";
import { FlowOutput } from "../constants/FlowHandlers";

const ScriptNode = ({ data, id }: NodeProps<ScriptNodeType>) => {

  const scriptColor = TypesColors.script || TypesColors.default;

  const edges = useEdges(id);

  return (
    <NodeContainer style={{ minWidth: 250 }} id={id}>
      <NodeHeader style={{ display: "flex", alignItems: "center" }} leftColor={scriptColor} rightColor={scriptColor} >
        <ImArrowRight size={"2rem"} style={{ marginRight: "0.5rem" }} />
        <div>
          <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>{data.name}</div>
          <div style={{ fontStyle: "italic", fontSize: "0.75rem" }}>{data.type}</div>
        </div>
      </NodeHeader>
      <NodeContent style={{ display: "flex", justifyContent: "flex-end" }}>
        <FlowHandler nodeId={id} type="source" id={FlowOutput} connected={!!edges.outgoers[FlowOutput]} isConnectable={!edges.outgoers[FlowOutput]} />
      </NodeContent>
    </NodeContainer>
  )
}

export default ScriptNode;