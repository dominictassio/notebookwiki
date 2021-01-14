import type { FC } from "react";
import type { InnerProps } from "./inner";
import type { Color, ColorVariant } from "../../lib/types/color";
import cx from "classnames";
import Inner from "./inner";
import { getTextColor } from "../../lib/utils/color";

type BorderWidth = 0 | 1 | 2 | 4 | 8;

type ButtonOutlineProps = {
  borderWidth?: BorderWidth;
  color?: Color;
  textColor?: Color;
  hoverTextColor?: Color;
  variants?: [ColorVariant, ColorVariant, ColorVariant];
} & InnerProps;

type ButtonOutlineComponent = FC<ButtonOutlineProps>;

const Outline: ButtonOutlineComponent = ({
  borderWidth = 1,
  children,
  color = "indigo",
  hoverTextColor = getTextColor(color, 700),
  variants = [600, 700, 500],
  ...props
}) => (
  <button
    className={cx(
      "inline-flex justify-center p-2 space-x-2border shadow-md font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2",
      `border-${color}-${variants[0]} text-${color}-${variants[0]} bg-white`,
      `hover:bg-${color}-${variants[1]} hover:border-${color}-${variants[1]} hover:text-${hoverTextColor}`,
      `focus:bg-${color}-${variants[1]} focus:border-${color}-${variants[1]} focus:text-${hoverTextColor}`,
      `focus:ring-${color}-${variants[2]} focus:border-${color}-${variants[2]}`
    )}
  >
    <Inner {...props}>{children}</Inner>
  </button>
);

export default Outline;
