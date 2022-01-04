import { Fragment, memo, ReactNode } from "react";
import FunctionCategoryType from "../../../types/function-type/FunctionCategoryType";
import FunctionType from "../../../types/function-type/FunctionType";
import VariableType from "../../../types/variable-type/VariableType";
import FunctionsList from "./functions/FunctionsList";
import VariablesList from "./variables/VariablesList";
import { Tab } from '@headlessui/react';
import styled from "styled-components";
import { IconType } from "react-icons";
import { HiVariable } from "react-icons/hi";
import { AiOutlineFunction } from "react-icons/ai";
import { IoMdReturnRight } from "react-icons/io";
import { MdFunctions } from "react-icons/md";
import ScriptsList from "./scripts/ScriptsList";
import ScriptNodeType from "../../../types/node-type/ScriptNodeType";

type SideBarProps = {
  onFunctionDragEnd: (event: MouseEvent, offset: { x: number, y: number }, func: FunctionType, category: FunctionCategoryType) => void;
  variables: VariableType[];
  onVariableChange: (variable: VariableType, start?: boolean) => void;
  onVariableDragEnd: (event: MouseEvent, offset: { x: number; y: number; }, variable: VariableType) => void;
  onVariableDelete: (variable: VariableType) => void;
  scripts: ScriptNodeType[];
  onScriptChange: (script: ScriptNodeType) => void;
  createScript: (start?: boolean) => void;
  onScriptDelete: (script: ScriptNodeType) => void;
}

const SideBar = ({ onFunctionDragEnd, variables, onVariableChange, onVariableDragEnd, onVariableDelete, scripts, onScriptChange, createScript, onScriptDelete }: SideBarProps) => {

  return (
    <div style={{ background: "var(--dark)", width: 400, display: "flex", flexDirection: "column", overflow: "auto" }}>
      <Tab.Group defaultIndex={2} >
        <Tab.List style={{ display: "flex", overflow: "auto", marginLeft: "-0.75rem", padding: "0.75rem", borderStyle: "none none solid none", borderWidth: "0.1rem", borderColor: "var(--lighter)" }} >
          <Tab as={Fragment}>
            {TabSelectionRender("Variables", HiVariable)}
          </Tab>
          <Tab as={Fragment}>
            {TabSelectionRender("Scripts", IoMdReturnRight)}
          </Tab>
          <Tab as={Fragment}>
            {TabSelectionRender("Functions", AiOutlineFunction)}
          </Tab>
          <Tab as={Fragment}>
            {TabSelectionRender("Macros", MdFunctions)}
          </Tab>
        </Tab.List>
        <Tab.Panels as={Fragment}>
          <Tab.Panel as={TabContainer}>
            <VariablesList variables={variables} onVariableChange={onVariableChange} onVariableDragEnd={onVariableDragEnd} onVariableDelete={onVariableDelete} />
          </Tab.Panel>
          <Tab.Panel as={TabContainer}>
            <ScriptsList scripts={scripts} onScriptChange={onScriptChange} createScript={createScript} onScriptDelete={onScriptDelete} />
          </Tab.Panel>
          <Tab.Panel as={TabContainer}>
            <FunctionsList onDragEnd={onFunctionDragEnd} />
          </Tab.Panel>
          <Tab.Panel as={TabContainer}>
            Coming soon
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

const TabContainer = styled.div`
  flex: 1; 
  display: flex; 
  flex-direction: column; 
  overflow: auto;
`

const TabSelectionRender = (name: ReactNode, Icon: IconType) => ({ selected }: { selected: boolean }) => (
  <TabSelectionContainer style={selected ? { backgroundColor: "var(--lighter)" } : {}}>
    <Icon size={"2rem"} />
    <div>{name}</div>
  </TabSelectionContainer>
)

const TabSelectionContainer = styled.div`
  border-radius: 0.5rem;
  height: 5rem;
  min-width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 0.75rem;
  cursor: pointer;
`

export default memo(SideBar);