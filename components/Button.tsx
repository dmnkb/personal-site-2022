import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { StyleStates } from "../helpers/types.helper";
import useWebsiteState from "../state/store";

type ButtonTag = Pick<keyof React.ElementType, "button" | "a">;
type ArrowDirection = "back" | "forward";

export type ButtonProps = PropsWithChildren & {
  tag?: keyof ButtonTag;
  className?: string;
  onClick?: () => void;
  arrow?: ArrowDirection;
};

const Button: FC<ButtonProps> = ({
  tag: Tag = "button",
  className,
  onClick,
  arrow,
  children,
}) => {
  const { setHovering } = useWebsiteState();

  const stylesClasses: Partial<Record<StyleStates, string>> = {
    default:
      "px-6 py-3 text-xl flex items-center bg-white text-background transition-all rounded-full tracking-tight border-2 border-white",
    hover: "hover:bg-background  hover:text-white",
  };

  const arrows: Partial<Record<ArrowDirection, JSX.Element>> = {
    back: <ArrowLeftIcon className="mr-3 w-8" />,
    forward: <ArrowRightIcon className="mr-3 w-8" />,
  };

  return (
    <Tag
      onClick={onClick}
      className={clsx(
        ...Object.values(stylesClasses),
        className,
        arrow ? "pl-4" : null
      )}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {arrow ? arrows[arrow] : null}
      {children}
    </Tag>
  );
};

export default Button;
