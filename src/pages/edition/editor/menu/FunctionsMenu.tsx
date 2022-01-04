import { AnimatePresence, motion } from "framer-motion";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { useStoreState } from "react-flow-renderer";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import PressableDiv from "../../../../common/PressableDiv";
import TextInput from "../../../../common/TextInput";
import VirtualizedList, { VirtualizedListItem } from "../../../../common/VirtualizedList";
import FunctionCategoryType from "../../../../types/function-type/FunctionCategoryType";
import FunctionType from "../../../../types/function-type/FunctionType";
import CategoryChoice from "../../side-bar/functions/CategoryChoice";
import { getFilteredFunctions } from "../../side-bar/functions/FunctionsList";
import { ActionSetElements, ActionSetMenuSelectionPosition, EditorReducerAction, EditorReducerState } from "../store/EditorReducer";
import { v4 as uuidv4 } from 'uuid';

const FunctionsMenu = () => {

  const [offsetX, offsetY, zoom] = useStoreState(state => state.transform);

  const position = useSelector<EditorReducerState, { x: number, y: number } | undefined>(state => state.menuSelectionPosition, shallowEqual);

  const isOpen = !!position;

  const projectedPosition = position ? position : undefined;

  const dispatch = useDispatch<Dispatch<EditorReducerAction>>();

  const onFunctionPress = useCallback((category: FunctionCategoryType, func: FunctionType) => {
    dispatch({
      type: ActionSetElements, setElements: (elements) => {
        return [
          ...elements,
          {
            id: uuidv4(),
            type: "function",
            data: {
              function: func.symbol,
              category: category
            },
            position: position || { x: 0, y: 0 }
          }
        ]
      }
    });
    dispatch({ type: ActionSetMenuSelectionPosition });
  }, [dispatch, position])

  return (
    <AnimatePresence>
      {
        isOpen ?
          <motion.div
            key={position.x + "" + position.y}
            style={{ position: "absolute", left: (projectedPosition?.x || 0) * zoom + offsetX, top: (projectedPosition?.y || 0) * zoom + offsetY, zIndex: 10 }}
          >
            <FunctionsMenuContent onFunctionPress={onFunctionPress} />
          </motion.div>
          :
          null
      }
    </AnimatePresence>
  )
}

export default memo(FunctionsMenu);

type FunctionsMenuContentProps = {
  onFunctionPress: (category: FunctionCategoryType, func: FunctionType) => void
}

const FunctionsMenuContent = ({ onFunctionPress }: FunctionsMenuContentProps) => {

  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<Dispatch<EditorReducerAction>>();

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState<FunctionCategoryType>("common");

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 200)

    const callback = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as any)) {
        dispatch({ type: ActionSetMenuSelectionPosition });
      }
    };

    window.addEventListener("click", callback);

    return () => {
      window.removeEventListener("click", callback);
    }
  }, [dispatch]);

  return (
    <ModalContainer
      ref={ref}
      initial={{ height: 0 }}
      animate={{ height: 600, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: .2 }}
    >
      <Container>
        <div style={{ display: "flex" }}>
          <TextInput ref={inputRef} style={{ flex: 1, width: 0 }} placeholder="Search" value={search} onChange={setSearch} />
        </div>
        <div style={{}}>
          <CategoryChoice {...{ category, setCategory }} />
        </div>
        <VirtualizedList style={{ flex: 1, overflow: "auto" }} expectedHeight={20}>
          {
            getFilteredFunctions(category, search).map(func => {
              return (
                <VirtualizedListItem key={func.id} id={func.id}>
                  <PressableDiv onPress={() => onFunctionPress(category, func)} style={{ wordBreak: "break-word" }}>
                    {func.name}
                  </PressableDiv>
                </VirtualizedListItem>
              )
            })
          }
        </VirtualizedList>
      </Container>
    </ModalContainer>
  )
}

const ModalContainer = styled(motion.div)`
  background-color: var(--dark);
  color: var(--text-color);
  overflow: hidden;
  width: 250px;
  border-radius: 0.5rem;
  display: flex;
  box-shadow: 0px 0.25rem 0.5rem rgba(0,0,0,0.2);
`;

const Container = styled.div`
  padding: 0.5rem 0.75rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
`;