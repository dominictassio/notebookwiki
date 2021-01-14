import type { FC } from "react";
import type { InnerProps } from "./inner";
import cx from "classnames";
import Outline from "./button-outline";
import type { Color, ColorVariant } from "../../lib/types/color";
import ButtonLink from "./button-link";
import ButtonNone from "./button-none";
import ButtonGroup from "./button-group";
import Inner from "./inner";
import { getTextColor } from "../../lib/utils/color";
import ButtonToolbar from "./button-toolbar";

type ButtonProps = {
  color?: Color;
  id?: string;
  textColor?: Color;
  hoverTextColor?: Color;
  variants?: [ColorVariant, ColorVariant, ColorVariant];
} & InnerProps;

type ButtonSubComponents = {
  Group: typeof ButtonGroup;
  Link: typeof ButtonLink;
  None: typeof ButtonNone;
  Outline: typeof Outline;
  Toolbar: typeof ButtonToolbar;
};

type ButtonComponent = FC<ButtonProps> & ButtonSubComponents;

const Button: ButtonComponent = ({
  children,
  color = "indigo",
  id,
  textColor = getTextColor(color),
  hoverTextColor = getTextColor(color, 700),
  variants = [600, 700, 500],
  ...props
}) => (
  <button
    {...{ id }}
    className={cx(
      "inline-flex justify-center p-2 space-x-2 border shadow-md font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2",
      `bg-${color}-${variants[0]} border-${color}-${variants[0]} text-${textColor}`,
      `hover:bg-${color}-${variants[1]} hover:border-${color}-${variants[1]} hover:text-${hoverTextColor}`,
      `focus:ring-${color}-${variants[2]} focus:border-${color}-${variants[2]}`
    )}
  >
    <Inner {...props}>{children}</Inner>
  </button>
);

Button.Group = ButtonGroup;
Button.Link = ButtonLink;
Button.None = ButtonNone;
Button.Outline = Outline;
Button.Toolbar = ButtonToolbar;

export default Button;
