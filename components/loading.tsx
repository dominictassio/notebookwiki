import { FunctionComponent } from "react";

type LoadingComponent = FunctionComponent;

const Loading: LoadingComponent = () => (
  <div className="relative h-96 w-96" style={{ transformStyle: "preserve-3d" }}>
    <div className="absolute">
      {["cyan", "magenta", "yellow", "black"].map((color, i) => (
        <div
          className="blob"
          style={{ animationDelay: `-${i}s`, backgroundColor: color }}
        />
      ))}
    </div>
    <style jsx>{`
      .blob {
        @apply absolute h-96 w-96 overflow-hidden;
        animation-name: blobby;
        animation-duration: 7s;
        animation-iteration-count: infinite;
        animation-timing-function: ease;
        animation-direction: alternate;
        mix-blend-mode: multiply;
      }
      @keyframes blobby {
        0% {
          border-radius: 50%;
        }
        20% {
          border-radius: 41% 59% 41% 59% / 53% 51% 49% 47%;
          transform: rotate(36deg);
        }
        40% {
          transform: rotate(72deg);
          border-radius: 43% 57% 41% 59% / 53% 52% 48% 47%;
        }
        80% {
          border-radius: 48% 52% 41% 59% / 48% 58% 42% 52%;
          transform: rotate(108deg);
        }
        100% {
          transform: rotate(144deg);
          border-radius: 54% 46% 60% 40% / 43% 55% 45% 57%;
        }
      }
    `}</style>
  </div>
);

export default Loading;
