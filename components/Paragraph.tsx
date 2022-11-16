import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";

type ParagraphProps = PropsWithChildren & {
  className?: string;
};

const Paragraph: FC<ParagraphProps> = ({ className, children }) => {
  const baseStyles = "font-paragraph text-2xl tracking-tight";

  return <p className={clsx(baseStyles, className)}>{children}</p>;
};

export default Paragraph;
