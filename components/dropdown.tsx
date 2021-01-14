import { FC, Fragment, ReactNode } from "react";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import ButtonNone from "./button/button-none";
import { Menu, Transition } from "@headlessui/react";

type DropdownProps = {
  button?: FC<object>;
  icon?: ReactNode;
  id: string;
  label: string;
  options: ReactNode[];
};

type DropdownComponent = FC<DropdownProps>;

const Dropdown: DropdownComponent = ({
  button: Button = ButtonNone,
  label,
  options,
  ...props
}) => (
  <Menu>
    {({ open }) => (
      <>
        <span>
          <Menu.Button as={Fragment}>
            <Button {...props} rightIcon={<Fa icon="caret-down" />}>
              {label}
            </Button>
          </Menu.Button>
        </span>
        <Transition
          show={open}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
            <Menu.Items static>
              {options.map((option) => (
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#support"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                    >
                      {option}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </div>
        </Transition>
      </>
    )}
  </Menu>
);

export default Dropdown;
