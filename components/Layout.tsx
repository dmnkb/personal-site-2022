import Meta from "./Meta";
import Cursor from "./cursor/Cursor";

interface LayouInterface {
  children: React.ReactNode;
  pageTitle: string;
}

const Layout: React.FC<LayouInterface> = ({ children, pageTitle }) => (
  <div className="overflow-hidden relative cursor-none">
    <Meta pageTitle={pageTitle} />
    <Cursor />
    {children}
  </div>
);

export default Layout;
