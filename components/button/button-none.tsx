import { JSXInternal } from "preact/src/jsx";
import type { FC } from "react";
import type { InnerProps } from "./inner";
import Inner from "./inner";

type ButtonNoneProps = {
  onClick?: JSXInternal.MouseEventHandler<HTMLButtonElement>;
} & InnerProps;

type ButtonNoneComponent = FC<ButtonNoneProps>;

const ButtonNone: ButtonNoneComponent = ({ children, onClick, ...props }) => (
  <button
    onClick={onClick}
    className="inline-flex justify-center p-2 space-x-2 font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
  >
    <Inner {...props}>{children}</Inner>
  </button>
);

export default ButtonNone;
