import { forwardRef, memo, useEffect, useState } from "react";
import FunctionType from "../../../../types/function-type/FunctionType";
import ListElementContainer from "../ListElementContainer";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import PressableDiv from "../../../../common/PressableDiv";
import { motion, AnimatePresence } from "framer-motion";
import ArgumentDisplay from "./ArgumentDisplay";
import FunctionCategoryType from "../../../../types/function-type/FunctionCategoryType";
import _ from "lodash";

type FunctionsListElementProps = {
  function: FunctionType;
  category: FunctionCategoryType;
  onDragEnd: (event: MouseEvent, offset: { x: number, y: number }, func: FunctionType, category: FunctionCategoryType) => void;
}

const cache: Partial<{ [key in FunctionCategoryType]: { [key: string]: boolean } }> = {};

const FunctionsListElement = forwardRef<HTMLDivElement, FunctionsListElementProps>(({ function: func, category, onDragEnd }, ref) => {

  const id = func.id;

  const [open, setOpen] = useState(cache[category]?.[id] || false);

  useEffect(() => {
    _.set(cache, `["${category}"]["${id}"]`, open);
  }, [open, category, id]);

  const isThereAnyArgs = func.arguments.length > 0 || func.additionalArguments;

  return (
    <ListElementContainer ref={ref} onDragEnd={(e, offset) => onDragEnd(e, offset, func, category)}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, fontWeight: "bold", wordBreak: "break-all" }}>{getCategoryIcon(category)} {getName(func.name)}</div>
        <PressableDiv onPress={() => setOpen(o => !o)}>
          <motion.div initial={{ transform: `rotate(${open ? "-90" : "0"}deg)` }} animate={{ transform: `rotate(${open ? "-90" : "0"}deg)` }}>
            <HiOutlineChevronLeft />
          </motion.div>
        </PressableDiv>
      </div>
      <AnimatePresence initial={false}>
        {open &&
          <motion.div
            style={{ overflow: "hidden", fontSize: "0.75rem" }}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
          >
            {func.description && <div style={{ fontStyle: "italic" }}>
              {func.description}
            </div>}
            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div style={{ flex: 1 }}>
                {isThereAnyArgs && <div style={{ textDecoration: "underline" }} >Arguments</div>}
                {
                  func.arguments.map((arg, index) => {

                    return (
                      <ArgumentDisplay key={index} arg={arg} />
                    )
                  })
                }
                {
                  func.additionalArguments && <ArgumentDisplay arg={func.additionalArguments} additional />
                }
              </div>
              {func.returns && <div style={{ flex: 1 }}>
                <div style={{ textDecoration: "underline" }}>Returns</div>
                <ArgumentDisplay arg={func.returns} />
              </div>}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </ListElementContainer>
  );
})

export default memo(FunctionsListElement);

const getName = (name: string) => _.capitalize(name.split("_").join(" "));

const getCategoryIcon = (category: FunctionCategoryType) => {
  switch (category) {
    case "hce":
      return <RiNumber1 />
    case "h2":
      return <RiNumber2 />
    case "h3":
      return <RiNumber3 />
  }

  return undefined;
}