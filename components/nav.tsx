import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, ReactNode } from "react";
import Button from "./button";
import Container from "./container";
import Control from "./control";
import Input from "./input";

type NavProps = {
  icon: ReactNode;
  title: ReactNode;
};

type NavComponent = FunctionComponent<NavProps>;

const Nav: NavComponent = ({ icon, title }) => (
  <nav>
    <Container>
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-2 sm:hidden">
          <Button.None icon={<FontAwesomeIcon icon="bars" />} />
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span>{icon}</span>
            <span className="hidden sm:inline">{title}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Control label={["search", "Search"]} showLabel={false}>
            <Input.Search
              id="search"
              name="search"
              className="w-0 sm:w-auto focus:w-auto pr-0 sm:pr-3 focus:pr-3"
            />
          </Control>
        </div>
      </div>
    </Container>
  </nav>
);

export default Nav;
