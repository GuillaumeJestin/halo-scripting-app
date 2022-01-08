import { ConnectionLineComponentProps } from "react-flow-renderer";
import EdgeType from "../../../../types/edge-type/EdgeType";
import FileType from "../../../../types/file-type/FileType";
import NodeType from "../../../../types/node-type/NodeType";
import VariableType from "../../../../types/variable-type/VariableType";

export type EditorReducerState = {
  elements: (NodeType | EdgeType)[];
  variables: VariableType[],
  macros: FileType[],
  container?: HTMLDivElement;
  menuSelectionPosition?: { x: number, y: number };
  tempConnection?: ConnectionLineComponentProps;
  tempConnectionPropsRef: { current?: ConnectionLineComponentProps };
};

const DefaultState: EditorReducerState = {
  elements: [],
  variables: [],
  macros: [],
  tempConnectionPropsRef: {},
}

export const ActionSetVariables = 1;

type ActionSetVariablesType = {
  type: typeof ActionSetVariables;
  variables: VariableType[];
}

export const ActionSetElements = 2;

type ActionSetElementsType = {
  type: typeof ActionSetElements;
  elements?: (NodeType | EdgeType)[];
  setElements?: (elements: (NodeType | EdgeType)[], variables: VariableType[]) => (NodeType | EdgeType)[];
}

export const ActionSetState = 3;

type ActionSetStateType = {
  type: typeof ActionSetState;
} & EditorReducerState;

export const ActionSetContainer = 4;

type ActionSetContainerType = {
  type: typeof ActionSetContainer;
  container: HTMLDivElement;
};

export const ActionSetMenuSelectionPosition = 5;

type ActionSetMenuSelectionPositionType = {
  type: typeof ActionSetMenuSelectionPosition;
  position?: { x: number, y: number };
};

export const ActionSetTempConnection = 6;

type ActionSetTempConnectionType = {
  type: typeof ActionSetTempConnection;
};

export type EditorReducerAction = ActionSetContainerType | ActionSetVariablesType | ActionSetElementsType | ActionSetStateType | ActionSetMenuSelectionPositionType | ActionSetTempConnectionType;

const EditorReducer = (state: EditorReducerState = DefaultState, action: EditorReducerAction): EditorReducerState => {
  switch (action.type) {
    case ActionSetVariables: {
      return { ...state, variables: action.variables };
    }
    case ActionSetElements: {
      if (action.elements) {
        return { ...state, elements: action.elements };
      }
      if (action.setElements) {
        return { ...state, elements: action.setElements(state.elements, state.variables) };
      }
      break;
    }
    case ActionSetState: {
      return { ...state, elements: action.elements, variables: action.variables, macros: action.macros };
    }
    case ActionSetContainer: {
      return { ...state, container: action.container };
    }
    case ActionSetMenuSelectionPosition: {
      return { ...state, menuSelectionPosition: action.position, ...(action.position ? {} : { tempConnection: undefined }) };
    }
    case ActionSetTempConnection: {
      const tempConnection = state.tempConnectionPropsRef.current;
      state.tempConnectionPropsRef.current = undefined;
      return { ...state, tempConnection, ...(tempConnection ? { menuSelectionPosition: { x: tempConnection.targetX, y: tempConnection.targetY } } : {}) };
    }
    default:
      return state;
  }
  return state;
}

export default EditorReducer;