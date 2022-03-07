import { motion, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import styled from "styled-components";
import FileType from "../../../types/file-type/FileType";

type TabProps = {
  file: FileType;
};

const Tab = ({ file }: TabProps) => {

  return (
    <MasterContainer>
      <Container >
        {file.name}
      </Container>
    </MasterContainer>
  )
};

export default Tab;

const onTop = { zIndex: 1 };
const flat = {
  zIndex: 0,
  transition: { delay: 0.3 }
};

const MasterContainer = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 0 0.25rem;
`;

const Container = styled.div`
  height: 75%;
  background: var(--darker);
  padding: 0 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem 0.5rem 0 0;
`;