import _ from "lodash";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import EdgeType from "../../../../types/edge-type/EdgeType";
import NodeType from "../../../../types/node-type/NodeType";
import VariableType from "../../../../types/variable-type/VariableType";
import getValueTypefromNode from "./getValueTypefromNode";

const getColorFromNode = (node: NodeType | undefined, handle: string, variables: VariableType[], elements?: (NodeType | EdgeType)[]) => {
  if (!node) return undefined;

  const types = getValueTypefromNode(node, handle, variables, elements);

  return types?.[0] ? (TypesColors[types?.[0]] || TypesColors.default) : TypesColors.default;
}

export default getColorFromNode;