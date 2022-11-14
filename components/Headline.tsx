import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";

type HeadlineProps = PropsWithChildren & {
  tag?: React.ElementType;
  size?: "l" | "m" | "s";
  className?: string;
};

const Headline: FC<HeadlineProps> = ({
  tag: Hx = "h1",
  size = "l",
  className,
  children,
}) => {
  const defaultSizes: { [key: string]: string } = {
    s: "text-2xl",
    m: "text-3xl",
    l: "text-4xl lg:text-6xl",
  };

  const baseStyles = "font-headline font-bold tracking-tight";

  return (
    <Hx className={clsx(defaultSizes[size], baseStyles, className)}>
      {children}
    </Hx>
  );
};

export default Headline;
