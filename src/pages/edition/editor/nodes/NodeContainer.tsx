import { useCallback } from "react";
import { useStoreState, ReactFlowState } from "react-flow-renderer";
import styled from "styled-components";

const NodeContainer = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {

  const id = props.id;

  const selector = useCallback(({ selectedElements }: ReactFlowState) => {
    if (selectedElements) {
      return selectedElements.some(element => element.id === id);
    }
    return false;
  }, [id]);

  const isSelected = useStoreState(selector);

  return (
    <Container {...props} {...{ isSelected }}>
      {children}
    </Container>
  );
}

export default NodeContainer;

type ContainerProps = {
  isSelected: boolean;
}

const Container = styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--node-background-color);
  color: var(--text-color);
  box-shadow: ${({ isSelected }: ContainerProps) => isSelected ? SELECTED_SHADOW : REGULAR_SHADOW};
  transition: box-shadow .1s;
`;

const REGULAR_SHADOW = `0 0 0 0 transparent, inset 0 0 0.1rem transparent, 0 0.25rem 0.5rem rgba(0,0,0,0.2)`;
const SELECTED_SHADOW = `0 0 0 0.25rem var(--primary), inset 0 0 0.1rem var(--primary), 0 0.25rem 0.5rem rgba(0,0,0,0.2)`;