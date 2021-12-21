import styled from "styled-components";

const NodeContainer = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}

export default NodeContainer;

const Container = styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--node-background-color);
  color: var(--text-color);
  box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
`;