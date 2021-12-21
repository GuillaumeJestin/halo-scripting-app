import _ from "lodash";
import { useMemo } from "react";
import { Edge, useStoreState } from "react-flow-renderer";

const useEdges = (id: string) => {

  const edges = useStoreState(
    (state) => state.edges.filter(edge => edge.source === id || edge.target === id),
    _.isEqual
  );

  return useMemo(() => {
    const res: {
      incomers: {
        [key: string]: Edge<any>
      },
      outgoers: {
        [key: string]: Edge<any>
      }
    } = { incomers: {}, outgoers: {} };

    edges.forEach(edge => {
      if (edge.source === id && edge.sourceHandle) {
        res.outgoers[edge.sourceHandle] = edge;
      } else if (edge.target === id && edge.targetHandle) {
        res.incomers[edge.targetHandle] = edge;
      }
    });

    console.log("Edges form " + id);
    console.log(res)

    return res;
  }, [edges]);
}

export default useEdges;