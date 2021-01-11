import type { ReactNode } from "react";
import cx from "classnames";

const Control = ({
  children,
  className,
  label,
  showLabel = true,
}: {
  children?: ReactNode;
  className?: string;
  label?: [htmlFor: string, text: string];
  showLabel?: boolean;
}) => (
  <div {...{ className }}>
    {label && (
      <label htmlFor={label[0]} className={cx({ "sr-only": !showLabel })}>
        {label[1]}
      </label>
    )}
    {children}
  </div>
);

export default Control;
