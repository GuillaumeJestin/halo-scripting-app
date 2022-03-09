import { useCallback, useRef } from "react";
import { isEdge, isNode, OnLoadParams } from "react-flow-renderer";
import EdgeType from "../../types/edge-type/EdgeType";
import FunctionType from "../../types/function-type/FunctionType";
import NodeType from "../../types/node-type/NodeType";
import VariableType from "../../types/variable-type/VariableType";
import Editor from "./editor/Editor";
import { v4 as uuidv4 } from 'uuid';
import FunctionCategoryType from "../../types/function-type/FunctionCategoryType";
import { checkEdgeValueType, isValueEdge } from "./editor/utility/createEdge";
import SideBar from "./side-bar/SideBar";
import ScriptNodeType from "../../types/node-type/ScriptNodeType";
import { FlowOutput } from "./editor/constants/FlowHandlers";
import removeFlowEdge from "./editor/utility/removeFlowEdge";
import FileType from "../../types/file-type/FileType";
import TabManager from "./tab-manager/TabManager";

type EditionPageProps = {
  file: FileType;
  setFile: React.Dispatch<React.SetStateAction<FileType>>;
  files: FileType[];
  onFileSelection: (file: FileType) => void;
}

const EditionPage = ({ file, setFile, files, onFileSelection }: EditionPageProps) => {

  const { variables, elements } = file;

  const editorRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<OnLoadParams<NodeType | EdgeType>>(null);

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

      setFile(file => {
        const { elements } = file;

        return {
          ...file,
          elements: [
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
          ]
        }
      });
    }
  }, [setFile]);

  const onVariableChange = (variable: VariableType, start?: boolean) => {
    setFile(file => {

      if (start) {
        return { ...file, variables: [variable, ...file.variables] };
      }

      const newVariables = [...file.variables];

      const index = newVariables.findIndex(v => v.id === variable.id);

      if (index >= 0) {
        newVariables[index] = variable;
      } else {
        newVariables.push(variable);
      }

      const elements = file.elements;

      return {
        ...file,
        variables: newVariables,
        elements: elements.filter(edge => {
          if (isEdge(edge) && isValueEdge(edge)) {
            return checkEdgeValueType(edge, elements, newVariables);
          }
          return true;
        })
      };
    });
  };

  const onVariableDelete = (variable: VariableType) => {

    setFile(file => {
      const { variables, elements } = file;

      const newVariables = [...variables];

      const index = newVariables.findIndex(v => v.id === variable.id);

      if (index >= 0) {
        newVariables.splice(index, 1);
      }

      const newElements = [...elements];

      const variableNodes = elements.filter(node => isNode(node) && node.type === "variable" && node.data.variableId === variable.id) as NodeType[];

      return {
        ...file,
        variables: newVariables,
        elements: newElements.filter(
          element => {
            if (isNode(element) && element.type === "variable" && element.data.variableId === variable.id) {
              return false;
            } else if (isEdge(element) && variableNodes.some(node => node.id === element.target || node.id === element.source)) {
              return false;
            }

            return true;
          }
        )
      }
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

      setFile(file => {

        const { elements } = file;

        return {
          ...file,
          elements: [
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
          ]
        }
      });
    }
  }, [setFile]);

  const scripts = elements.filter(element => isNode(element) && element.type === "script") as ScriptNodeType[];

  const onScriptChange = (script: ScriptNodeType) => {

    setFile(file => {

      const newElements = [...file.elements];

      const index = newElements.findIndex(v => v.id === script.id);

      if (index >= 0) {
        newElements[index] = script;
      }

      return {
        ...file,
        elements: newElements
      }
    });
  }

  const createScript = (start?: boolean) => {

    setFile(file => {
      const editorPosition = instanceRef.current?.toObject().position || [0, 0];
      const editorBoundingRect = editorRef.current?.getBoundingClientRect();
      const editorWidth = editorBoundingRect?.width ?? 0;
      const editorHeight = editorBoundingRect?.height ?? 0;

      const position = { x: -editorPosition[0] + editorWidth / 2, y: -editorPosition[1] + editorHeight / 2 };

      const script: ScriptNodeType = {
        id: uuidv4(),
        type: "script",
        data: {
          name: "New Script",
          type: "startup"
        },
        position
      };

      const { elements } = file;

      if (start) return { ...file, elements: [script, ...elements] };

      return { ...file, elements: [...elements, script] };
    });
  }

  const onScriptDelete = (script: ScriptNodeType) => {

    setFile(file => {
      let newElements = [...file.elements];

      newElements = removeFlowEdge(newElements, script.id, FlowOutput, "source");

      const index = newElements.findIndex(node => node.id === script.id);

      if (index >= 0) {
        newElements.splice(index, 1);
      }

      return { ...file, elements: newElements };
    });
  };

  const setElements = useCallback((elements: (NodeType | EdgeType)[]) => {
    setFile(file => ({
      ...file,
      elements
    }));
  }, [setFile]);

  const onMoveEnd = useCallback((value?: { x: number, y: number, zoom: number }) => {
    if (value) {
      setFile(file => ({
        ...file,
        zoom: value.zoom,
        position: [value.x, value.y]
      }));
    }
  }, [setFile]);

  return (
    <>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto" }}>
        <TabManager {...{ files, onFileSelection }} currentFile={file} />
        <Editor
          key={file.id}
          ref={editorRef}
          {...{ variables, elements, setElements, onMoveEnd }}
          defaultZoom={file.zoom}
          defaultPosition={file.position}
          instanceRef={instanceRef}
        />
      </div>
      <SideBar
        onFunctionDragEnd={onFunctionDragEnd}
        variables={variables}
        onVariableChange={onVariableChange}
        onVariableDragEnd={onVariableDragEnd}
        onVariableDelete={onVariableDelete}
        scripts={scripts}
        onScriptChange={onScriptChange}
        createScript={createScript}
        onScriptDelete={onScriptDelete}
      />
    </>
  )
}

export default EditionPage;