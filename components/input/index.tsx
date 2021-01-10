import cx from "classnames";
import React from "react";
import Search from "./search";

export default class Input extends React.Component<{
  className?: string;
  id: string;
  name: string;
}> {
  static Search = Search;

  render() {
    const { className, id, name } = this.props;
    return (
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
  }
}
