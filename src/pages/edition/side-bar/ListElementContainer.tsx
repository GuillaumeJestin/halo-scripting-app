import styled from "styled-components";
import { FaEllipsisV } from "react-icons/fa";
import { forwardRef, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import mergeRefs from "react-merge-refs";

type ListElementContainerProps = {
  children: React.ReactNode;
  onDragEnd?: (event: MouseEvent, offset: { x: number, y: number }) => void;
  noDrag?: boolean;
}

const ListElementContainer = forwardRef<HTMLDivElement, ListElementContainerProps>(({ children, onDragEnd, noDrag }, ref) => {

  const [isDragging, setIsDragging] = useState(false);
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const ellipsisRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ellipsisRef.current && containerRef.current) {
      const ref = ellipsisRef.current;

      const callback = (event: MouseEvent) => {
        setIsDragging(true);
        const boundingRect = containerRef.current?.getBoundingClientRect();
        const width = boundingRect?.width ?? 0;
        setWidth(width);
        setPosition({ x: event.clientX, y: event.clientY });
        const offsetX = boundingRect ? event.clientX - boundingRect.x : 0;
        const offsetY = boundingRect ? event.clientY - boundingRect.y : 0;
        setOffset({ x: offsetX, y: offsetY });

        const onMoveCallback = (event: MouseEvent) => {
          setPosition({ x: event.clientX, y: event.clientY });
          const sel = window.getSelection();
          if (sel) {
            if (sel.removeAllRanges) {
              sel.removeAllRanges();
            } else if (sel.empty) {
              sel.empty();
            }
          }
        }

        const onMouseUp = (event: MouseEvent) => {
          setIsDragging(false);
          onDragEnd?.(event, { x: offsetX, y: offsetY })
          window.removeEventListener("mousemove", onMoveCallback);
          window.removeEventListener("mouseup", onMouseUp);
        }

        window.addEventListener("mousemove", onMoveCallback);
        window.addEventListener("mouseup", onMouseUp);
      }

      ref.addEventListener("mousedown", callback);

      return () => {
        ref.removeEventListener("mousedown", callback);
      }
    }
  }, [onDragEnd]);

  return (
    <>
      <Container ref={mergeRefs([containerRef, ref])}>
        {!noDrag && <IconContainer ref={ellipsisRef}>
          <FaEllipsisV />
          <FaEllipsisV />
        </IconContainer>}
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
      {
        isDragging && createPortal(
          <div style={{ width, position: "absolute", left: position.x - offset.x, top: position.y - offset.y, zIndex: 10 }}>
            <Container>
              <IconContainer>
                <FaEllipsisV />
                <FaEllipsisV />
              </IconContainer>
              <ContentContainer>
                {children}
              </ContentContainer>
            </Container>
          </div>,
          document.body
        )
      }
    </>
  );
})

const Container = styled.div`
  background-color: var(--lighter);
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: grab;
  margin-right: 0.75rem;

  & svg {
    margin: 0 -5px 0 -4px;
  }
`

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export default ListElementContainer;