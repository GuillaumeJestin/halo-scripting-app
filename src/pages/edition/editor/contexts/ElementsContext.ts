import { createContext } from "react"
import EdgeType from "../../../../types/edge-type/EdgeType";
import NodeType from "../../../../types/node-type/NodeType";

type ElementsContextType = {
  setElements: React.Dispatch<React.SetStateAction<(NodeType | EdgeType)[]>>;
}

const ElementsContext = createContext<ElementsContextType>({
  setElements: () => { }
});

export default ElementsContext;