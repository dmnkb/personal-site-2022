import clsx from "clsx";
import { FC, Suspense, useEffect, useState } from "react";
import DominoCanvas from "./DominoCanvas";
import useWebsiteState from "../../state/store";
import Headline from "../Headline";
import Paragraph from "../Paragraph";
import Button from "../Button";

const Hero: FC = () => {
  const DURATION = 10000;
  const [visible, setVisible] = useState(true);
  const [wasClosed, setWasClosed] = useState(false);
  const { setHovering } = useWebsiteState();

  const styleClassesMain = {
    base: clsx(
      "absolute z-10 w-full h-full flex flex-col items-center justify-center p-3",
      "text-white transition-all duration-1000 bg-black bg-opacity-50 backdrop-blur-md"
    ),
    state: clsx(visible ? "opacity-100" : "opacity-0 pointer-events-none"),
  };

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      setWasClosed(true);
    }, DURATION);
  }, []);

  return (
    <header className="h-screen w-full bg-background">
      <Button
        className={clsx(
          "absolute z-50 right-10 top-10 transition-all duration-1000",
          wasClosed ? "opacity-100" : "opacity-0"
        )}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "Close" : "Contact"}
      </Button>

      <main className={clsx(styleClassesMain.base, styleClassesMain.state)}>
        <svg
          className={clsx(
            "w-[50px] mb-12 overflow-visible -rotate-90 transition-all duration-1000",
            wasClosed ? "opacity-0" : "opacity-100"
          )}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="animate-circle [stroke-dasharray:650] [stroke-dashoffset:650] fill-none stroke-white stroke-[4]"
            cx="50"
            cy="50"
            r="50"
          />
        </svg>
        <Headline className="text-center" tag="h1">
          Hi, I&apos;m Dominik,{" "}
        </Headline>
        <Paragraph className="text-center mt-8 sm:max-w-[80%] md:max-w-[70%] lg:max-w-[600px]">
          I&apos;m a Germany-located creative developer currently fighting the
          climate crisis at{" "}
          <a
            className="underline"
            href="https://www.lichtblick.de/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => {
              setHovering(true);
            }}
            onMouseLeave={() => {
              setHovering(false);
            }}
          >
            Lichtblick
          </a>
          .
        </Paragraph>
        <Paragraph className="text-center mt-8">
          <a
            className="underline"
            href="mailto:inquiry@borchert.me"
            onMouseEnter={() => {
              setHovering(true);
            }}
            onMouseLeave={() => {
              setHovering(false);
            }}
          >
            inquiry@borchert.me
          </a>
        </Paragraph>
      </main>
      <aside className="absolute w-full h-full">
        <Suspense>
          <DominoCanvas />
        </Suspense>
      </aside>
      <div className="absolute z-50 bottom-10 right-10 transition-all duration-1000">
        <Paragraph className="text-white flex gap-6 text-lg">
          <a
            href="imprint"
            onMouseEnter={() => {
              setHovering(true);
            }}
            onMouseLeave={() => {
              setHovering(false);
            }}
          >
            Imprint
          </a>
          <a
            href="data-policy"
            onMouseEnter={() => {
              setHovering(true);
            }}
            onMouseLeave={() => {
              setHovering(false);
            }}
          >
            Data Policy
          </a>
        </Paragraph>
      </div>
    </header>
  );
};

export default Hero;
