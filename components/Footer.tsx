import Link from "./Link";
import Paragraph from "./Paragraph";

const Footer = () => (
  <div className="absolute z-50 bottom-10 right-10">
    <Paragraph className="text-white flex gap-6 text-lg">
      <Link href="imprint" text="Imprint"></Link>
      <Link href="data-policy" text="Data Policy"></Link>
    </Paragraph>
  </div>
);

export default Footer;
