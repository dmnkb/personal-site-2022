import clsx from "clsx";
import { FC } from "react";

interface ContentWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ className, children }) => (
  <div className={clsx("container py-12 mb-8 md:py-24 lg:py-36", className)}>
    {children}
  </div>
);

export default ContentWrapper;
