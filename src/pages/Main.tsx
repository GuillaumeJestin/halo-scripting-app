import { useState } from "react";
import EditionPage from "./edition/EditionPage";
import { v4 as uuidv4 } from 'uuid';
import testState from "./edition/editor/testState";
import FileType from "../types/file-type/FileType";
import { useCallback } from "react";
import FileTypeMacro from "../types/file-type/FileTypeMacro";

const id = uuidv4();

const _files: FileType[] = [
  {
    id: id,
    name: "My File 1",
    elements: testState,
    variables: [
      { id: "a", name: "My Device", type: "device" },
      { id: "b", name: "My number var", type: "real" },
      { id: "c", name: "TrueOrFalse", type: "boolean" },
    ],
    macros: [{
      id: uuidv4(),
      name: "Macro 1",
      variables: [],
      elements: [{
        id: uuidv4(),
        type: "macroStart",
        position: {
          x: -350,
          y: -250
        }
      }, {
        id: uuidv4(),
        type: "macroEnd",
        position: {
          x: 150,
          y: 200
        }
      }],
      type: "macro",
      parentFile: id,
    }],
    position: [451.37862705675957, 489.0628835309243],
    zoom: 1.148698354997035
  }
]

const Main = () => {

  const [files, setFiles] = useState(_files);
  const [selected, setSelected] = useState(_files[0].id);

  const file = files.find(file => selected === file.id)!;

  const setFile: React.Dispatch<React.SetStateAction<FileType>> = useCallback((value) => {
    setFiles(files => {
      const index = files.findIndex(file => file.id === selected);

      if (index >= 0) {
        const newFiles = [...files];

        newFiles[index] = typeof value === "function" ? value(files[index]) : value;

        return newFiles;
      }

      return files;
    })
  }, [selected]);

  const onFileSelection = (file: FileType) => {
    setSelected(file.id);
  }

  const onMacroEdition = (macro: FileTypeMacro) => {
    setFiles(files => {
      if (files.some(file => file.id === macro.id)) return files;
      return [macro, ...files];
    });
    setSelected(macro.id);
  }

  console.log(file.elements);

  return (
    <>
      <div>
        HELLO WORLD
      </div>
      <div style={{ flex: 1, display: "flex", overflow: "auto" }}>
        <div >
          fedasfwe
        </div>
        <EditionPage {...{ file, setFile, onFileSelection, onMacroEdition }} files={files} />
      </div>
    </>
  )
};

export default Main;