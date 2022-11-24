import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";

type ParagraphSize = "small" | "large";

type ParagraphProps = PropsWithChildren & {
  size?: ParagraphSize;
  className?: string;
};

const Paragraph: FC<ParagraphProps> = ({
  size = "large",
  className,
  children,
}) => {
  const baseStyles = "font-paragraph tracking-tight";

  const fontSizes: Record<ParagraphSize, string> = {
    small: "text-xl",
    large: "text-2xl",
  };

  return (
    <p className={clsx(baseStyles, fontSizes[size], className)}>{children}</p>
  );
};

export default Paragraph;
