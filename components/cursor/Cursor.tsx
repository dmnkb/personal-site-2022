import clsx from "clsx";
import { FC, useEffect } from "react";
import { useSpring, animated } from "react-spring";

import useWebsiteStore from "../../state/store";

const Cursor: FC = () => {
  const hovering = useWebsiteStore((state) => state.hovering);

  const [animatedProps, setAnimatedProps] = useSpring(() => ({
    transform: `translate3d(0px, 0px, 0)`,
  }));

  const handleMouseMove = (event: any) => {
    setAnimatedProps({
      transform: `translate3d(${event?.clientX}px, ${event.clientY}px, 0)`,
    });
  };

  useEffect(() => {
    window.document.addEventListener("mousemove", (e) => handleMouseMove(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const baseStyles =
    "w-[20px] h-[20px] bg-white rounded-full absolute block -translate-x-1/2 -translate-y-1/2 z-[99999] transition-all";

  const variants = {
    hovering:
      "w-[200px] h-[200px] bg-[#fff] bg-opacity-20 backdrop-blur-md border-2",
  };

  return (
    <animated.div
      onMouseMove={handleMouseMove}
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
