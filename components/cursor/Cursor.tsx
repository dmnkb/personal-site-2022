import clsx from "clsx";
import React, { FC, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

import useWebsiteStore from "../../state/store";

const Cursor: FC = () => {
  const hovering = useWebsiteStore((state) => state.hovering);

  const [animatedProps, setAnimatedProps] = useSpring(() => ({
    transform: `translate3d(0px, 0px, 0)`,
  }));

  const mouseCoords = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.pageY;
    mouseCoords.current = { x, y };
    setAnimatedProps({
      transform: `translate3d(${x}px, ${y}px, 0)`,
    });
  };

  const handleScroll = () => {
    // eslint-disable-next-line prefer-destructuring
    const x = mouseCoords.current.x;
    const y = mouseCoords.current.y + window.scrollY;
    setAnimatedProps({
      transform: `translate3d(${x}px, ${y}px, 0)`,
    });
  };

  useEffect(() => {
    window.document.addEventListener("mousemove", (e) => handleMouseMove(e));
    window.document.addEventListener("scroll", handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const baseStyles =
    "w-[20px] h-[20px] bg-white rounded-full absolute block -translate-x-1/2 -translate-y-1/2 z-[99999] transition-all ";

  const variants = {
    hovering: "w-[100px] h-[100px] bg-[rgba(0,0,0,0)] border-2 border-white",
  };

  return (
    <animated.div
      style={animatedProps}
      className="z-[99999] absolute pointer-events-none"
    >
      <div
        className={clsx(baseStyles, hovering ? variants.hovering : null)}
      ></div>
    </animated.div>
  );
};

export default Cursor;
