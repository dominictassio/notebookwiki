import type { ReactNode } from "react";
import cx from "classnames";

const Control = ({
  children,
  label,
  showLabel = true,
}: {
  children?: ReactNode;
  label?: [htmlFor: string, text: string];
  showLabel?: boolean;
}) => (
  <div>
    {label && (
      <label htmlFor={label[0]} className={cx({ "sr-only": !showLabel })}>
        {label[1]}
      </label>
    )}
    {children}
  </div>
);

export default Control;
