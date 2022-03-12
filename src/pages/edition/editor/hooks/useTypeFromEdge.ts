import EdgeType from "../../../../types/edge-type/EdgeType";
import _ from "lodash";
import { useStoreState, isNode, Edge } from "react-flow-renderer";
import { shallowEqual, useSelector } from "react-redux";
import { EditorReducerState } from "../store/EditorReducer";
import VariableType from "../../../../types/variable-type/VariableType";
import getValueTypefromNode from "../utility/getValueTypefromNode";
import NodeType from "../../../../types/node-type/NodeType";

const useTypeFromEdge = (edge: Edge | undefined, from: "source" | "target") => {

  const variables = useSelector<EditorReducerState, VariableType[]>(state => state.variables, shallowEqual);

  const types = useStoreState(
    (state) => {
      if (edge) {

        const elements = [...state.nodes, ...state.edges] as (NodeType | EdgeType)[];

        const node = elements.find(node => isNode(node) && node.id === (edge[from])) as NodeType;

        if (node) {
          return getValueTypefromNode(node, from === "source" ? edge.sourceHandle : edge.targetHandle, variables, elements);
        }
      }
      return undefined;
    },
    _.isEqual
  );

  return types;
}

export default useTypeFromEdge;