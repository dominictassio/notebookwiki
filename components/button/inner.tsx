import type { FC, ReactNode } from "react";

export type InnerProps = {
  icon?: ReactNode | [ReactNode, ReactNode];
  rightIcon?: ReactNode;
};

type InnerComponent = FC<InnerProps>;

const Inner: InnerComponent = ({ children, icon, rightIcon }) => (
  <>
    {icon && <span>{icon}</span>}
    {children && <span>{children}</span>}
    {rightIcon && <span>{rightIcon}</span>}
  </>
);

export default Inner;
