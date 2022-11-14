import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";

type PragraphProps = PropsWithChildren & {
  className?: string;
};

const Pragraph: FC<PragraphProps> = ({ className, children }) => {
  const baseStyles = "font-paragraph text-2xl tracking-tight";

  return <p className={clsx(baseStyles, className)}>{children}</p>;
};

export default Pragraph;
