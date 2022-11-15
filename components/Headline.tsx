import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";

type HeadlineTags = Pick<keyof React.ElementType, "h1" | "h2" | "h3" | "h4">;

type HeadlineProps = PropsWithChildren & {
  tag?: keyof HeadlineTags;
  className?: string;
};

const Headline: FC<HeadlineProps> = ({
  tag: Hx = "h1",
  className,
  children,
}) => {
  const defaultSizes: Partial<Record<keyof HeadlineTags, string>> = {
    h1: "text-4xl lg:text-6xl",
    h2: "text-3xl",
    h3: "text-2xl",
  };

  const baseStyles = "font-headline font-bold tracking-tight";

  return (
    <Hx className={clsx(defaultSizes[Hx], baseStyles, className)}>
      {children}
    </Hx>
  );
};

export default Headline;
