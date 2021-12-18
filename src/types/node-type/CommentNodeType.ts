import { Node } from "react-flow-renderer"

type CommentNodeType = Omit<Node, "data" | "type"> & {
  type: "comment",
  data: {
    width: number;
    height: number;
  }
};

export default CommentNodeType;