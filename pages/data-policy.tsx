import type { NextPage } from "next";
import Link from "../components/Link";
import ContentWrapper from "../components/ContentWrapper";
import Headline from "../components/Headline";
import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";

const Imprint: NextPage = () => (
  <Layout pageTitle="Startseite" className="bg-background">
    <ContentWrapper className="text-white">
      <Link
        href="/"
        text="Zurück"
        renderAsButton
        arrow="back"
        className="mb-12"
      ></Link>
      <Headline tag="h1">Datenschutz</Headline>
      <Headline tag="h2" className="mt-10">
        Angaben gemäß § 5 TMG
      </Headline>
      <Paragraph size="small" className="my-5"></Paragraph>
    </ContentWrapper>
  </Layout>
);

export default Imprint;
