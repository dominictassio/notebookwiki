import Button from "./button";
import Container from "./container";
import Control from "./control";
import Input from "./input";

const Nav = ({ icon, title }: { icon: any; title: any }) => (
  <nav>
    <Container>
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <div className="p-2">
              {icon} <span className="hidden lg:inline">{title}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Control label={["search", "Search"]} showLabel={false}>
            <Input.Search id="search" name="search"></Input.Search>
          </Control>
          <Control>
            <Button>Search</Button>
          </Control>
        </div>
      </div>
    </Container>
  </nav>
);

export default Nav;
