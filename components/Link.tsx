import React, { FC } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import clsx from "clsx";
import Button, { ButtonProps } from "./Button";
import useWebsiteState from "../state/store";

type LinkProps = NextLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Pick<ButtonProps, "arrow" | "onClick"> & {
    text: string;
    className?: string;
    renderAsButton?: boolean;
  };

const Link: FC<LinkProps> = ({
  text,
  renderAsButton,
  href,
  target,
  rel,
  arrow,
  className,
  onClick,
}) => {
  const { setHovering } = useWebsiteState();

  const linkOrA = (children: JSX.Element) =>
    target === "_blank" ? (
      <a href={href} target={target} rel={rel} className="cursor-pointer">
        {children}
      </a>
    ) : (
      <NextLink href={href}>{children}</NextLink>
    );

  return linkOrA(
    renderAsButton ? (
      <a className="inline-block">
        <Button
          arrow={arrow}
          onClick={onClick}
          className={clsx(className, "cursor-pointer")}
        >
          {text}
        </Button>
      </a>
    ) : (
      <span
        className={clsx(
          "inline-block border-b-2 border-b-white cursor-pointer",
          className
        )}
        onMouseEnter={() => setHovering(true)}
        onMouseOut={() => setHovering(false)}
      >
        {text}
      </span>
    )
  );
};

export default Link;
