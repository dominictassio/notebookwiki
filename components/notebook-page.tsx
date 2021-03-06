import { FunctionComponent, createRef, RefObject } from "react";
import "@fontsource/kalam";
import EditorToolbar from "./editor-toolbar";

type NotebookPageProps = {
  editable?: boolean;
};

type NotebookPageComponent = FunctionComponent<NotebookPageProps>;

const NotebookPage: NotebookPageComponent = ({ children, editable }) => {
  let contentRef: RefObject<HTMLDivElement>;
  let editableRef: RefObject<HTMLDivElement>;
  let createFormatCmd: (cmd: string, value?: string) => () => void;
  if (editable) {
    contentRef = createRef();
    editableRef = createRef();
    createFormatCmd = (cmd: string, value?: string) => () => {
      editableRef.current?.focus();
      document.execCommand(cmd, false, value);
    };
  }
  return (
    <div className="flex flex-col items-center space-y-6">
      {editable && (
        <div className="flex items-center h-16 sticky top-6 z-10">
          <div className="bg-gray-50 p-2 rounded-md shadow-md">
            <EditorToolbar createFormatCmd={createFormatCmd!} />
          </div>
        </div>
      )}
      <div
        className="paper relative shadow-md focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        onClick={
          editable
            ? () => {
                editableRef.current?.focus();
              }
            : undefined
        }
      >
        <div className="lines absolute inset-0" />
        <div
          className="content absolute inset-0 overflow-hidden"
          ref={editable ? contentRef! : undefined}
        >
          <div
            className="editable"
            contentEditable={editable}
            onKeyPress={
              editable
                ? (event) => {
                    const contentHeight = contentRef.current!.offsetHeight;
                    const editableHeight = editableRef.current!.offsetHeight;
                    const diff = contentHeight - editableHeight;
                    if ((diff === 0 && event.key === "Enter") || diff < 0) {
                      event.preventDefault();
                    }
                  }
                : undefined
            }
            ref={editable ? editableRef! : undefined}
          >
            {children}
          </div>
        </div>
      </div>
      <style jsx>{`
        .paper {
          background-color: ghostwhite;
          height: 10.5in;
          width: 8in;
          &::after {
            background-color: rgba(255, 0, 0, 0.6);
            content: "";
            height: 100%;
            left: calc(1.25in - 1px);
            position: absolute;
            top: 0;
            width: 1px;
          }
        }
        .lines {
          background-image: repeating-linear-gradient(
            ghostwhite 0,
            ghostwhite calc(0.28125in - 1px),
            teal 0.28125in
          );
          margin: 1.21875in 0 1px;
        }
        .content {
          font-family: "Kalam", cursive;
          font-size: 0.25in;
          line-height: 0.28125in;
          margin: 1.21875in 0 calc(0.28125in - 12px);
          :global(h1) {
            text-align: center;
          }
          :global(p) {
            text-indent: 0.5in;
          }
        }
        .editable {
          margin: 0 1.25in;
          padding: 6px;
        }
      `}</style>
    </div>
  );
};

export default NotebookPage;
