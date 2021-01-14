import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";

const TextBackgroundColorDropdown = () => (
  <span className="relative inline-block text-left">
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="inline-flex justify-center p-2 space-x-2 font-medium rounded-l-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2">
            <span>
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon
                  className="text-yellow-300"
                  icon={{
                    prefix: "fas",
                    iconName: "underscore",
                    icon: [
                      448,
                      512,
                      [],
                      "e40f",
                      "m432 448h-416a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z",
                    ],
                  }}
                />
                <FontAwesomeIcon icon="highlighter" transform="shrink-3 up-2" />
              </span>
            </span>
            <span>
              <FontAwesomeIcon icon="caret-down" />
            </span>
          </Menu.Button>
          <Transition
            className="origin-top-right absolute right-0 -mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items static>
              <Menu.Item className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <span>Item 1</span>
              </Menu.Item>
              <Menu.Item className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <span>Item 2</span>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  </span>
);

export default TextBackgroundColorDropdown;
