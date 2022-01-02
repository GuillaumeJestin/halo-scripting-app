import { Menu } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";
import { Fragment, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

type DropdownProps<T> = {
  options?: Readonly<T[]>;
  selected?: T | T[] | ((option: T) => boolean);
  onSelection?: (option: T) => void;
  optionDisplay?: (props: { option: T }) => JSX.Element;
  message?: JSX.Element;
};

function Dropdown<T>({ options, selected: _selected, optionDisplay: OptionDisplay, message, onSelection }: DropdownProps<T>) {

  const selected = _selected ?
    typeof _selected === "function" ?
      options?.filter(option => (_selected as any)(option)) ?? []
      :
      Array.isArray(_selected) ?
        _selected
        :
        [_selected]
    :
    [];

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton {...{ ref: buttonRef }}>
            {
              selected.length > 0 ?
                selected.map((option, index) => {
                  const display = OptionDisplay ? <OptionDisplay option={option} /> : _.toString(option);
                  const isLast = index === selected.length - 1;

                  return <Fragment key={index}>{display}{!isLast && <span>,</span>}</Fragment>
                })
                :
                (message || "Open")
            }
          </MenuButton>
          <DropdownContent {...{ options, optionDisplay: OptionDisplay, open, buttonRef, onSelection }} />
        </>
      )}
    </Menu>
  )
};

type DropdownContentProps<T> = {
  options?: Readonly<T[]>;
  optionDisplay?: (props: { option: T }) => JSX.Element;
  open: boolean;
  buttonRef: React.RefObject<HTMLButtonElement>;
  onSelection?: (option: T) => void;
}

function DropdownContent<T>({ options, optionDisplay: OptionDisplay, open, buttonRef, onSelection }: DropdownContentProps<T>) {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (open && buttonRef.current) {
      const button = buttonRef.current;
      const callback = () => {
        const boundingRect = button.getBoundingClientRect();

        setPosition({ x: boundingRect.x, y: boundingRect.y + boundingRect.height });
      }

      callback();

      window.addEventListener("scroll", callback, true);
      window.addEventListener("resize", callback);

      return () => {
        window.removeEventListener("scroll", callback, true);
        window.removeEventListener("resize", callback);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return createPortal(
    <AnimatePresence>
      {open && <Container
        initial={{ opacity: 0, translateY: "-1rem" }}
        animate={{ opacity: 1, translateY: "0.25rem" }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ ease: "easeInOut" }}
        style={{ left: position.x, top: position.y }}
      >
        <Menu.Items static style={{ overflow: "auto", flex: 1, padding: "0.25rem" }}>
          {
            options?.map((option, index) => {
              const display = OptionDisplay ? <OptionDisplay option={option} /> : _.toString(option);

              return (
                <Menu.Item key={index} onClick={() => onSelection?.(option)} >
                  {({ active }) => (
                    <div style={{ cursor: "pointer", ...(active ? { color: "var(--primary)" } : {}) }} >
                      {display}
                    </div>
                  )}
                </Menu.Item>
              )
            })
          }
        </Menu.Items>
      </Container>}
    </AnimatePresence>
    , document.body);
}

const MenuButton = styled(Menu.Button)`
  color: var(--text-color);
  background: var(--darker);
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
`;

const Container = styled(motion.div)`
  position: absolute;
  background: var(--darker);
  color: var(--text-color);
  border-radius: 0.25rem;
  height: 400px;
  z-index: 10;
  box-shadow: 0px 0.25rem 0.5rem rgba(0,0,0,0.3);
  display: flex;
`

export default Dropdown;