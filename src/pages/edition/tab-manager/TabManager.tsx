import styled from "styled-components";
import FileType from "../../../types/file-type/FileType";
import Tab from "./Tab";
import { Reorder } from "framer-motion";
import { useMemo, useState } from "react";

const HEIGHT = "3rem";

type EditionPageProps = {
  files: FileType[];
  currentFile: FileType;
  onFileSelection: (file: FileType) => void;
}

const TabManager = ({ files, currentFile, onFileSelection }: EditionPageProps) => {

  const [order, setOrder] = useState(files.map(file => file.id));

  const orderedFiles = useMemo(() => {
    const sanatizedOrder = order.filter(id => files.some(file => file.id === id));

    const orderedFiles: FileType[] = [];
    const forgottenFiles: FileType[] = [];

    for (const file of files) {
      const index = sanatizedOrder.indexOf(file.id);

      if (index >= 0) {
        orderedFiles[index] = file;
      } else {
        forgottenFiles.push(file);
      }
    }

    return [...orderedFiles, ...forgottenFiles];
  }, [order, files]);

  const onReorder = (files: FileType[]) => {
    setOrder(files.map(file => file.id));
  }

  return (
    <Container
      axis="x"
      values={orderedFiles}
      onReorder={onReorder}
    >
      {
        orderedFiles.map((file) => {

          const isCurrent = file.id === currentFile.id;

          const onClick = () => {
            onFileSelection(file);
          }

          return (
            <Tab key={file.id} {...{ file, isCurrent, onClick }} />
          )
        })
      }
    </Container>
  );
};

export default TabManager;

const Container = styled(Reorder.Group)`
  background: var(--dark);
  height: ${HEIGHT};
  display: flex;
  overflow: auto;
`;