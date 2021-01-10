import Input from "./index";
import Icons from "../icons";

const Search = (props: { id: string; name: string }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Icons.Search />
    </div>
    <Input {...props} className="pl-10" />
  </div>
);

export default Search;
