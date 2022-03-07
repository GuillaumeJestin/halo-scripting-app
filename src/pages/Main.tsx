import { useState } from "react";
import EditionPage from "./edition/EditionPage";
import { v4 as uuidv4 } from 'uuid';
import testState from "./edition/editor/testState";
import FileType from "../types/file-type/FileType";

const files: FileType[] = [
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

  const [file, setFile] = useState<FileType>({
    id: uuidv4(),
    name: "My File 1",
    elements: testState,
    variables: [
      { id: "a", name: "My Device", type: "device" },
      { id: "b", name: "My number var", type: "real" },
      { id: "c", name: "TrueOrFalse", type: "boolean" },
    ],
    macros: []
  });

  console.log(file);

  return (
    <>
      <div>
        HELLO WORLD
      </div>
      <div style={{ flex: 1, display: "flex", overflow: "auto" }}>
        <div >
          fedasfwe
        </div>
        <EditionPage {...{ file, setFile }} files={[file, ...files]} />
      </div>
    </>
  )
};

export default Main;