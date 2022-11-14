import clsx from "clsx";
import { FC, Suspense, useEffect, useState } from "react";
import DominoCanvas from "./DominoCanvas";
import useWebsiteState from "../../state/store";
import Headline from "../Headline";
import Pragraph from "../Paragraph";

const Hero: FC = () => {
  const DURATION = 10000;
  const [visible, setVisible] = useState(true);
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
    }, DURATION);
  });

  return (
    <header className="h-screen w-full bg-background">
      <main className={clsx(styleClassesMain.base, styleClassesMain.state)}>
        <svg
          className="w-[50px] mb-12 overflow-visible -rotate-90"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="animate-circle [stroke-dasharray:650] [stroke-dashoffset:650]  fill-none stroke-white stroke-[4]"
            cx="50"
            cy="50"
            r="50"
          />
        </svg>
        <Headline className="text-center">Hi, I&apos;m Dominik, </Headline>
        <Pragraph className="text-center mt-8 sm:max-w-[80%] md:max-w-[70%] lg:max-w-[600px]">
          I&apos;m a creative developer from Germany currently fighting the
          climat crisis at Lichtblick.
        </Pragraph>
        <Pragraph className="text-center mt-8">
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
        </Pragraph>
      </main>
      <aside className="absolute w-full h-full">
        <Suspense>
          <DominoCanvas />
        </Suspense>
      </aside>
    </header>
  );
};

export default Hero;
