import clsx from "clsx";
import Meta from "./Meta";
import Footer from "./Footer";

interface LayouInterface {
  children: React.ReactNode;
  pageTitle: string;
  useCustomCursor?: boolean;
  className?: string;
}

const Layout: React.FC<LayouInterface> = ({
  children,
  pageTitle,

  className,
}) => (
  <main className={clsx("overflow-hidden relative min-h-screen", className)}>
    <Meta pageTitle={pageTitle} />
    {children}
    <Footer />
  </main>
);

export default Layout;
