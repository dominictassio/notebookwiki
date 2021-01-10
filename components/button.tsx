import type { ReactNode } from "react";

const Button = ({ children }: { children?: ReactNode }) => (
  <button className="flex justify-center py-2 px-4 border border-transparent shadow-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    {children}
  </button>
);

export default Button;
