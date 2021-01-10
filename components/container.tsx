import type { ReactNode } from "react";

const Container = ({ children }: { children?: ReactNode }) => (
  <div className="container mx-auto">{children}</div>
);

export default Container;
