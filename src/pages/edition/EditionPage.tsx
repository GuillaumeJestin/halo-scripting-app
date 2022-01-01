import { useCallback, useRef, useState } from "react";
import { OnLoadParams } from "react-flow-renderer";
import EdgeType from "../../types/edge-type/EdgeType";
import FunctionType from "../../types/function-type/FunctionType";
import NodeType from "../../types/node-type/NodeType";
import VariableType from "../../types/variable-type/VariableType";
import Editor from "./editor/Editor";
import testState from "./editor/testState";
import FunctionsList from "./side-bar/functions/FunctionsList";
import { v4 as uuidv4 } from 'uuid';
import FunctionCategoryType from "../../types/function-type/FunctionCategoryType";
import VariablesList from "./side-bar/variables/VariablesList";

const EditionPage = () => {
  const [elements, setElements] = useState<(NodeType | EdgeType)[]>(testState);
  const [variables, setVariable] = useState<VariableType[]>([
    { id: "a", name: "My Device", type: "device" },
    { id: "b", name: "My number var", type: "real" },
    { id: "c", name: "TrueOrFalse", type: "boolean" },
  ]);

  const editorRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<OnLoadParams<NodeType | EdgeType>>(null);

  console.log(elements);

  const onFunctionDragEnd = useCallback((event: MouseEvent, offset: { x: number, y: number }, func: FunctionType, category: FunctionCategoryType) => {
    // Checking if the dragged function is inside the editor view
    const editorBoundingRect = editorRef.current?.getBoundingClientRect();
    const editorX = editorBoundingRect?.x ?? 0;
    const editorY = editorBoundingRect?.y ?? 0;
    const editorWidth = editorBoundingRect?.width ?? 0;
    const editorHeight = editorBoundingRect?.height ?? 0;
    if (
      event.clientX >= editorX && event.clientX <= (editorX + editorWidth) &&
      event.clientY >= editorY && event.clientY <= (editorY + editorHeight)
    ) {
      console.log(func.name)
      console.log(event.clientX, event.clientY);
      console.log(instanceRef.current?.toObject())

      const coords = instanceRef.current?.project({ x: event.clientX - offset.x, y: event.clientY - offset.y }) || { x: 0, y: 0 };
      const zoom = instanceRef.current?.toObject().zoom ?? 1;

      setElements((elements) => {
        return [
          {
            id: uuidv4(),
            type: "function",
            data: {
              function: func.symbol,
              category: category
            },
            position: {
              x: coords.x - editorX / zoom,
              y: coords.y - editorY / zoom,
            }
          },
          ...elements
        ];
      })
    }
  }, []);

  const onVariableChange = (variable: VariableType) => {
    console.log(variable);
  };

  return (
    <>
      <div>
        HELLO WORLD
      </div>
      <div style={{ flex: 1, display: "flex", overflow: "auto" }}>
        <div >
          fedasfwe
        </div>
        <div style={{ flex: 1 }}>
          <Editor ref={editorRef} {...{ variables, elements, setElements }} instanceRef={instanceRef} />
        </div>
        <div style={{ background: "var(--dark)", width: 400, display: "flex", flexDirection: "column", overflow: "auto" }}>
          {/* <FunctionsList onDragEnd={onFunctionDragEnd} /> */}
          <VariablesList variables={variables} onVariableChange={onVariableChange} />
        </div>
      </div>
    </>
  )
}

export default EditionPage;