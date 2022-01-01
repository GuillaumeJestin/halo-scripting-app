import { Menu } from "@headlessui/react";
import _ from "lodash";
import { Fragment } from "react";
import styled from "styled-components";
import PressableDiv from "./PressableDiv";

type DropdownProps<T> = {
  options?: Readonly<T[]>;
  selected?: T | T[] | ((option: T) => boolean);
  onSelection?: (option: T) => void;
  optionDisplay?: (props: { option: T }) => JSX.Element;
  message?: JSX.Element;
};

function Dropdown<T>({ options, selected: _selected, optionDisplay: OptionDisplay, message }: DropdownProps<T>) {

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

  return (
    <Menu>
      <MenuButton>
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
      <Menu.Items>
        {
          options?.map((option, index) => {
            const display = OptionDisplay ? <OptionDisplay option={option} /> : _.toString(option);

            return (
              <Menu.Item>
                {({ active }) => (
                  <PressableDiv style={active ? { color: "blue" } : {}} >
                    {display}
                  </PressableDiv>
                )}
              </Menu.Item>
            )
          })
        }
      </Menu.Items>
    </Menu>
  )
};

const MenuButton = styled(Menu.Button)`
  color: var(--text-color);
  background: var(--darker);
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
`;

export default Dropdown;