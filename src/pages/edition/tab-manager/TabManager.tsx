import styled from "styled-components";
import FileType from "../../../types/file-type/FileType";
import Tab from "./Tab";

const HEIGHT = "3rem";

type EditionPageProps = {
  files: FileType[];
}

const TabManager = ({ files }: EditionPageProps) => {

  return (
    <Container>
      {
        files.map((file) => {

          return (
            <Tab key={file.id} {...{ file }} />
          )
        })
      }
    </Container>
  );
};

export default TabManager;

const Container = styled.div`
  background: var(--dark);
  height: ${HEIGHT};
  display: flex;
  overflow: auto;
`;