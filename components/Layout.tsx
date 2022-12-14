import clsx from "clsx";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Meta from "./Meta";
import Cursor from "./cursor/Cursor";
import isMobile from "../helpers/isMobile.helper";
import isSSR from "../helpers/isSSR.helper";
import Footer from "./Footer";
import useWebsiteState from "../state/store";

interface LayouInterface {
  children: React.ReactNode;
  pageTitle: string;
  useCustomCursor?: boolean;
  className?: string;
}

const Layout: React.FC<LayouInterface> = ({
  children,
  pageTitle,
  useCustomCursor,
  className,
}) => {
  const router = useRouter();
  const { setHovering } = useWebsiteState();

  // Fix React Hydration Error
  // https://nextjs.org/docs/messages/react-hydration-error#possible-ways-to-fix-it
  const [renderCursor, setRenderCursor] = useState(false);
  useEffect(() => {
    if (useCustomCursor) {
      setRenderCursor(!isSSR() && !isMobile());
    }
    // Reset cursor when navigating. Otherwise it would get stuck in the hover state.
    router.events.on("routeChangeStart", () => {
      setHovering(false);
    });
  }, []);

  return (
    <main
      className={clsx(
        "overflow-hidden relative min-h-screen",
        renderCursor && useCustomCursor ? "cursor-none" : null,
        className
      )}
    >
      <Meta pageTitle={pageTitle} />
      <motion.div
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{
          type: "spring",
          duration: 2,
        }} // Set the transition to linear
        variants={{
          hidden: { opacity: 0 },
          enter: { opacity: 1 },
          exit: { opacity: 0 },
        }}
      >
        {renderCursor && useCustomCursor ? <Cursor /> : null}
        {children}
        <Footer />
      </motion.div>
    </main>
  );
};

export default Layout;
