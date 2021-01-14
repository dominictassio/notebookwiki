import { FunctionComponent } from "react";

type ButtonToolbarComponent = FunctionComponent;

const ButtonToolbar: ButtonToolbarComponent = ({ children }) => (
  <div className="flex divide-x">
    {children}
    <style jsx>{`
      :global(.btn-group:not(:last-of-type)) {
        @apply pr-2;
      }
      :global(.btn-group:not(:first-of-type)) {
        @apply pl-2;
      }
    `}</style>
  </div>
);

export default ButtonToolbar;
