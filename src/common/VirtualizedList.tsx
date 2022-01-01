
/**
 * Making my own virtual list component because I don't like the already made ones
 */

import { createContext, CSSProperties, ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";
import ReactTestRenderer from 'react-test-renderer';
import styled from "styled-components";
import { throttle, debounce } from 'throttle-debounce';

type Cartographer = {
  items: { id: string, height?: number }[];
  indexMap: Map<string, number>;
};

type VirtualizedListProps = {
  children: ReactNode;
  style?: CSSProperties;
  expectedHeight: number;
};

const VirtualizedList = ({ children, style, expectedHeight }: VirtualizedListProps) => {

  const ref = useRef<HTMLDivElement>(null);

  const previousCartographer = useRef<Cartographer | undefined>(undefined);

  const buildCartographer = () => {
    const renderer = ReactTestRenderer.create(
      <VirtualizedListContext.Provider value={{ acquiring: true, itemsToShow: new Set(), setCartographer: () => { } }}>{children}</VirtualizedListContext.Provider>
    );

    const tree = renderer.toTree();

    const ids = tree ? (Array.isArray(tree) ? tree : [tree]).filter(
      elem => (elem.type as any).name === "VirtualizedListItem"
    ).map(elem => elem.props.id) : [];

    const indexMap = new Map<string, number>();

    const items: { id: string, height?: number }[] = ids.map((id, index) => {

      indexMap.set(id, index);

      const height = previousCartographer.current ? previousCartographer.current.items[previousCartographer.current.indexMap.get(id) || -1]?.height : undefined;

      return { id, height };
    });

    return { items, indexMap };
  }

  const [cartographer, setCartographer] = useState(() => buildCartographer());
  previousCartographer.current = cartographer;

  useEffect(() => {
    setCartographer(() => buildCartographer());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  const [[
    itemsToShow,
    firstDivHeight,
    lastDivHeight
  ], setDisplayState] = useState<[Set<string>, number, number]>(() => [new Set(), 0, 0]);

  useEffect(() => {
    if (ref.current) {

      const container = ref.current;

      const callback = throttle(100, () => {

        if (ref.current) {
          const containerHeight = ref.current.getBoundingClientRect().height;
          const containerScroll = ref.current.scrollTop;

          setDisplayState(() => {
            return getItemsToShow(cartographer, containerHeight, containerScroll, expectedHeight);
          })
        }
      })

      callback();

      container.addEventListener("scroll", callback);
      window.addEventListener("resize", callback);

      return () => {
        container?.removeEventListener("scroll", callback);
        window.removeEventListener("resize", callback);
      }
    }
  }, [cartographer, expectedHeight]);

  return (
    <div ref={ref} {...{ style }}>
      <VirtualizedListContext.Provider value={{ itemsToShow, setCartographer }}>
        <div style={{ height: firstDivHeight }} />
        {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          useMemo(() => children, [cartographer])
        }
        <div style={{ height: lastDivHeight }} />
      </VirtualizedListContext.Provider>
    </div>
  )
}

export default VirtualizedList;

const getItemsToShow = (cartographer: Cartographer, containerHeight: number, scroll: number, expectedHeight: number): [Set<string>, number, number] => {
  const itemsToShow: string[] = [];

  const offset = 2 * expectedHeight;

  let firstDivHeight = 0;
  let lastDivHeight = 0;

  let currentHeight = 0;

  for (let index = 0; index < cartographer.items.length; index++) {
    const element = cartographer.items[index];
    const height = element.height === undefined ? expectedHeight : element.height;

    if (((scroll - offset) - height) >= currentHeight) {
      firstDivHeight += height;
    } else if (((scroll + offset) + containerHeight) >= currentHeight) {
      itemsToShow.push(element.id);
    } else {
      lastDivHeight += height;
    }

    currentHeight += height;
  }

  return [new Set(itemsToShow), firstDivHeight, lastDivHeight];
}

const VirtualizedListContext = createContext<{
  acquiring?: boolean,
  itemsToShow: Set<string>,
  setCartographer: React.Dispatch<React.SetStateAction<{
    items: {
      id: string;
      height?: number | undefined;
    }[];
    indexMap: Map<string, number>;
  }>>
}>({ itemsToShow: new Set(), setCartographer: () => { } });

type VirtualizedListItemProps = {
  children: ReactNode;
  id: string;
} & React.HTMLAttributes<HTMLDivElement>;

const VirtualizedListItem = ({ children, id, ...props }: VirtualizedListItemProps) => {

  const context = useContext(VirtualizedListContext);

  const ref = useRef<HTMLDivElement>(null);

  const show = context.itemsToShow.has(id);

  useEffect(() => {
    if (show && ref.current) {
      const container = ref.current;

      const resizeObserver = new ResizeObserver(debounce(50, () => {
        if (ref.current) {
          const height = ref.current.getBoundingClientRect().height;

          context.setCartographer(cartographer => {

            const newCartographer = { ...cartographer };

            const index = cartographer.indexMap.get(id);

            if (index !== undefined) {
              const newItems = [...newCartographer.items];
              newItems[index].height = height;
              newCartographer.items = newItems;
            }

            return newCartographer;
          })
        }
      }));

      resizeObserver.observe(container);

      return () => {
        resizeObserver.disconnect();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, id]);

  if (context.acquiring || !show) return null;

  return <Item ref={ref} {...props}>{children}</Item>;
}

const Item = styled.div`
  overflow: overlay;
`

export { VirtualizedListItem }; 