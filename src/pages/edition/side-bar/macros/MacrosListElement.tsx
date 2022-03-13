import ListElementContainer from "../ListElementContainer";
import { IoMdTrash } from "react-icons/io";
import PressableDiv from "../../../../common/PressableDiv";
import { memo, useEffect, useState } from "react";
import FileTypeMacro from "../../../../types/file-type/FileTypeMacro";
import _ from "lodash";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineChevronLeft, HiPencil } from "react-icons/hi";
import Button from "../../../../common/Button";

type MacrosListElementProps = {
  macro: FileTypeMacro;
  onMacroDelete: (macro: FileTypeMacro) => void;
  onMacroDragEnd: (event: MouseEvent, offset: { x: number; y: number; }, macro: FileTypeMacro) => void;
  onMacroEdition: (macro: FileTypeMacro) => void;
}

const cache: Partial<{ [key: string]: boolean }> = {};

const MacrosListElement = ({ macro, onMacroDelete, onMacroDragEnd, onMacroEdition }: MacrosListElementProps) => {

  const id = macro.id;

  const [open, setOpen] = useState(cache[id] || false);

  useEffect(() => {
    _.set(cache, `["${id}"]`, open);
  }, [open, id]);

  return (
    <ListElementContainer onDragEnd={(event, offset) => onMacroDragEnd(event, offset, macro)} >
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, display: "flex", marginBottom: "0.25rem", alignItems: "center" }}>
          <div style={{ fontWeight: "bold" }}>{macro.name}</div>
          <Button primary style={{ fontSize: "0.75rem", marginLeft: "0.5rem" }} onPress={() => onMacroEdition(macro)}><HiPencil /> Edit Macro</Button>
        </div>
        <div style={{ marginRight: "1rem" }}>
          <PressableDiv onPress={() => onMacroDelete(macro)}>
            <IoMdTrash />
          </PressableDiv>
        </div>
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
            macro
          </motion.div>
        }
      </AnimatePresence>
    </ListElementContainer>
  )
}

export default memo(MacrosListElement);