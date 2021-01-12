import cx from "classnames";
import Search from "./search";

const Input = ({
  className,
  id,
  name,
}: {
  className?: string;
  id: string;
  name: string;
}) => (
  <input
    type="text"
    name={name}
    id={id}
    className={cx(
      "focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md shadow-md",
      className
    )}
  />
);

Input.Search = Search;

export default Input;
