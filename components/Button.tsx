import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { StyleStates } from "../helpers/types.helper";
import useWebsiteState from "../state/store";

type ButtonTag = Pick<keyof React.ElementType, "button" | "a">;

type ButtonProps = PropsWithChildren & {
  tag?: keyof ButtonTag;
  className?: string;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
  tag: Tag = "button",
  className,
  onClick,
  children,
}) => {
  const { setHovering } = useWebsiteState();

  const stylesClasses: Partial<Record<StyleStates, string>> = {
    default:
      "px-6 py-3 text-xl bg-white text-background transition-all rounded-full tracking-tight",
  };

  return (
    <Tag
      onClick={onClick}
      className={clsx(...Object.values(stylesClasses), className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {children}
    </Tag>
  );
};

export default Button;
