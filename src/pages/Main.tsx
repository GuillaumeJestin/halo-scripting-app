import { useState } from "react";
import EditionPage from "./edition/EditionPage";
import { v4 as uuidv4 } from 'uuid';
import testState from "./edition/editor/testState";
import FileType from "../types/file-type/FileType";
import { useCallback } from "react";

const _files: FileType[] = [
  {
    id: uuidv4(),
    name: "My File 1",
    elements: testState,
    variables: [
      { id: "a", name: "My Device", type: "device" },
      { id: "b", name: "My number var", type: "real" },
      { id: "c", name: "TrueOrFalse", type: "boolean" },
    ],
    macros: [],
    position: [451.37862705675957, 489.0628835309243],
    zoom: 1.148698354997035
  },
  {
    id: uuidv4(),
    name: "Foo Bar",
    elements: [],
    variables: [],
    macros: [],
  }, {
    id: uuidv4(),
    name: "Weirdo file",
    elements: [],
    variables: [],
    macros: [],
  },
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
        <EditionPage {...{ file, setFile, onFileSelection }} files={files} />
      </div>
    </>
  )
};

export default Main;