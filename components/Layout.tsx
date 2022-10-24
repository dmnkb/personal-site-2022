import Meta from "./Meta";
import Nav from "./Nav";

interface LayouInterface {
  children: React.ReactNode;
  pageTitle: string;
}

const Layout: React.FC<LayouInterface> = ({ children, pageTitle }) => (
  <div className="bg-body">
    <Meta pageTitle={pageTitle} />
    <Nav />
    {children}
  </div>
);

export default Layout;
