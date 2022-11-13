import clsx from "clsx";
import { useEffect, useState } from "react";
import Meta from "./Meta";
import Cursor from "./cursor/Cursor";
import isMobile from "./helpers/isMobile.helper";
import isSSR from "./helpers/isSSR.helper";

interface LayouInterface {
  children: React.ReactNode;
  pageTitle: string;
}

const Layout: React.FC<LayouInterface> = ({ children, pageTitle }) => {
  // Fix React Hydration Error
  // https://nextjs.org/docs/messages/react-hydration-error#possible-ways-to-fix-it
  const [renderCursor, setRenderCursor] = useState(false);
  useEffect(() => {
    setRenderCursor(!isSSR() && !isMobile());
  }, []);

  return (
    <div
      className={clsx(
        "overflow-hidden relative",
        renderCursor ? "cursor-none" : null
      )}
    >
      <Meta pageTitle={pageTitle} />
      {renderCursor ? <Cursor /> : null}
      {children}
    </div>
  );
};

export default Layout;
