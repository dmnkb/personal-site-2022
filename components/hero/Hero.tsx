import clsx from "clsx";
import { FC, Suspense, useEffect, useState } from "react";
import DominoCanvas from "./DominoCanvas";
import Headline from "../Headline";
import Paragraph from "../Paragraph";
import Button from "../Button";
import Link from "../Link";

const Hero: FC = () => {
  const DURATION = 10000;
  const [visible, setVisible] = useState(true);
  const [wasClosed, setWasClosed] = useState(false);

  const styleClassesMain = {
    base: clsx(
      "absolute z-10 inset-0",
      "flex flex-col items-center justify-center",
      "p-3 text-white transition-all duration-1000",
      "bg-black bg-opacity-50 backdrop-blur-lg"
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
          <Link
            href="https://www.lichtblick.de/"
            text="Lichtblick"
            target="_blank"
            rel="noreferrer"
          ></Link>
          .
        </Paragraph>
        <Paragraph className="text-center mt-8">
          <Link
            href="#"
            text="inquiry[at]borchert.me"
          ></Link>
        </Paragraph>
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
