import { Reorder } from "framer-motion";
import styled from "styled-components";
import FileType from "../../../types/file-type/FileType";

type TabProps = {
  file: FileType;
  isCurrent: boolean;
  onClick: () => void;
};

const Tab = ({ file, isCurrent, onClick }: TabProps) => {

  return (
    <MasterContainer
      value={file}
    >
      <Container
        onClick={onClick}
        style={{ background: isCurrent ? "var(--lighter)" : "var(--darker)" }}
      >
        {file.name}
      </Container>
    </MasterContainer>
  )
};

export default Tab;

const MasterContainer = styled(Reorder.Item)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 0 0.25rem;
`;

const Container = styled.div`
  height: 75%;
  padding: 0 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem 0.5rem 0 0;
  white-space: nowrap;
`;