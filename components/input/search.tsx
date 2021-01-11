import cx from "classnames";
import Input from "./index";
import Icons from "../icons";

const Search = ({
  className,
  ...props
}: {
  className?: string;
  id: string;
  name: string;
}) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none border border-transparent">
      <Icons.Search />
    </div>
    <Input {...props} className={cx("pl-12", className)} />
  </div>
);

export default Search;
