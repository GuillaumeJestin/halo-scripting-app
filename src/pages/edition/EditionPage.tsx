import { useCallback, useRef, useState } from "react";
import { isEdge, isNode, OnLoadParams } from "react-flow-renderer";
import EdgeType from "../../types/edge-type/EdgeType";
import FunctionType from "../../types/function-type/FunctionType";
import NodeType from "../../types/node-type/NodeType";
import VariableType from "../../types/variable-type/VariableType";
import Editor from "./editor/Editor";
import testState from "./editor/testState";
import { v4 as uuidv4 } from 'uuid';
import FunctionCategoryType from "../../types/function-type/FunctionCategoryType";
import { checkEdgeValueType, isValueEdge } from "./editor/utility/createEdge";
import SideBar from "./side-bar/SideBar";

const EditionPage = () => {
  const [elements, setElements] = useState<(NodeType | EdgeType)[]>(testState);
  const [variables, setVariables] = useState<VariableType[]>([
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

  const onVariableChange = (variable: VariableType, start?: boolean) => {
    setVariables(variables => {
      if (start) {
        return [variable, ...variables];
      }

      const newVariables = [...variables];

      const index = newVariables.findIndex(v => v.id === variable.id);

      if (index >= 0) {
        newVariables[index] = variable;
      } else {
        newVariables.push(variable);
      }

      setElements(elements => {
        return elements.filter(edge => {
          if (isEdge(edge) && isValueEdge(edge)) {
            return checkEdgeValueType(edge, elements, newVariables);
          }
          return true;
        })
      });

      return newVariables;
    });
  };

  const onVariableDelete = (variable: VariableType) => {
    setVariables(variables => {
      const newVariables = [...variables];

      const index = newVariables.findIndex(v => v.id === variable.id);

      if (index >= 0) {
        newVariables.splice(index, 1);
      }

      return newVariables;
    });
    setElements(elements => {
      const newElements = [...elements];

      const variableNodes = elements.filter(node => isNode(node) && node.type === "variable" && node.data.variableId === variable.id) as NodeType[];

      return newElements.filter(
        element => {
          if (isNode(element) && element.type === "variable" && element.data.variableId === variable.id) {
            return false;
          } else if (isEdge(element) && variableNodes.some(node => node.id === element.target || node.id === element.source)) {
            return false;
          }

          return true;
        }
      );
    });
  }

  const onVariableDragEnd = useCallback((event: MouseEvent, offset: { x: number, y: number }, variable: VariableType) => {
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
      const coords = instanceRef.current?.project({ x: event.clientX - offset.x, y: event.clientY - offset.y }) || { x: 0, y: 0 };
      const zoom = instanceRef.current?.toObject().zoom ?? 1;

      setElements((elements) => {
        return [
          {
            id: uuidv4(),
            type: "variable",
            data: {
              variableId: variable.id
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
        <SideBar
          onFunctionDragEnd={onFunctionDragEnd}
          variables={variables}
          onVariableChange={onVariableChange}
          onVariableDragEnd={onVariableDragEnd}
          onVariableDelete={onVariableDelete}
        />
      </div>
    </>
  )
}

export default EditionPage;