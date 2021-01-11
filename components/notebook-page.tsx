import type { ReactNode } from "react";
import { createRef, useEffect } from "react";
import "@fontsource/kalam";

const NotebookPage = ({ children }: { children?: ReactNode }) => {
  const containerRef = createRef<HTMLDivElement>();
  const paperRef = createRef<HTMLDivElement>();
  useEffect(() => {
    const container = containerRef.current;
    const paper = paperRef.current;
    if (container && paper) {
      if (container.offsetWidth < paper.offsetWidth) {
        const scale = container.offsetWidth / paper.offsetWidth;
        paper.style.transform = `scale(${scale})`;
      }
    }
  });
  return (
    <>
      <div className="h-full w-full" ref={containerRef}>
        <div
          className="paper my-2 origin-top-left relative shadow-md"
          ref={paperRef}
        >
          <div className="lines">
            <div className="content overflow-hidden relative pb-0">
              {children}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .paper {
          background-color: ghostwhite;
          height: 10.5in;
          padding-bottom: 0.28125in;
          padding-top: 1.21875in;
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
          &::before {
            background-color: rgba(255, 0, 0, 0.1);
            content: "";
            height: 100%;
            right: calc(1.25in - 1px);
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
          height: 100%;
        }

        .content {
          font-family: "Kalam", cursive;
          font-size: 0.25in;
          height: 100%;
          line-height: 0.28125in;
          margin: 0 1.25in 0.28125in 1.25in;
          padding: 6px;
          :global(h1) {
            text-align: center;
          }
          :global(p) {
            text-indent: 0.5in;
          }
        }
      `}</style>
    </>
  );
};

export default NotebookPage;
