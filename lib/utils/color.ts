import type { Color, ColorVariant } from "../types/color";

export const getTextColor = (
  backgroundColor: Color,
  variant: ColorVariant = 600
): "black" | "white" => {
  if (variant > 600) {
    return "white";
  }
  switch (backgroundColor) {
    case "white":
    case "yellow":
    case "green":
      return "black";
    default:
      return "white";
  }
};
