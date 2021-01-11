import Button from "./button";
import Container from "./container";
import Control from "./control";
import Input from "./input";

const Nav = ({ icon, title }: { icon: any; title: any }) => (
  <nav>
    <Container>
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center p-2 space-x-2">
          <span>{icon}</span>
          <span className="hidden sm:inline">{title}</span>
        </div>
        <div className="flex items-center p-2 space-x-2">
          <Control label={["search", "Search"]} showLabel={false}>
            <Input.Search
              id="search"
              name="search"
              className="w-0 sm:w-auto focus:w-auto pr-0 sm:pr-3 focus:pr-3"
            ></Input.Search>
          </Control>
        </div>
      </div>
    </Container>
  </nav>
);

export default Nav;
