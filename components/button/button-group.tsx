import type { FC } from "react";

type ButtonGroupComponent = FC;

const ButtonGroup: ButtonGroupComponent = ({ children }) => (
  <span className="btn-group inline-flex">
    {children}
    <style jsx>{`
      :global(.btn-group > button) {
        @apply rounded-none !important;
      }
      :global(.btn-group > button:first-of-type) {
        @apply rounded-l-md !important;
      }
      :global(.btn-group > button:last-of-type) {
        @apply rounded-r-md !important;
      }
    `}</style>
  </span>
);

export default ButtonGroup;
