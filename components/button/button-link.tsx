import type { FC, ReactNode } from "react";
import type { InnerProps } from "./inner";
import type { Color } from "../../lib/types/color";
import cx from "classnames";
import Inner from "./inner";

type ButtonLinkProps = {
  outline?: boolean;
  icon?: ReactNode;
  textColor?: Color;
  hoverTextColor?: Color;
} & InnerProps;

type ButtonLinkComponent = FC<ButtonLinkProps>;

const ButtonLink: ButtonLinkComponent = ({ children, ...props }) => {
  return (
    <button
      className={cx(
        "inline-flex justify-center p-2 space-x-2 border shadow-md font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 underline",
        "text-blue-600",
        "hover:text-blue-700",
        "focus:ring-blue-500 focus:border-blue-500"
      )}
    >
      <Inner {...props}>{children}</Inner>
    </button>
  );
};

export default ButtonLink;
