import type { NextPage } from "next";
import Link from "../components/Link";
import ContentWrapper from "../components/ContentWrapper";
import Headline from "../components/Headline";
import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";

const Imprint: NextPage = () => (
  <Layout pageTitle="Imprint" className="bg-background">
    <ContentWrapper className="text-white">
      <Link
        href="/"
        text="Zurück"
        renderAsButton
        arrow="back"
        className="mb-12"
      ></Link>
      <Headline tag="h1">Impressum</Headline>
      <Headline tag="h2" className="mt-10">
        Angaben gemäß § 5 TMG
      </Headline>
      <Paragraph size="small" className="my-5">
        Dominik Borchert
        <br />
        Elmshorner Straße, 85
        <br />
        25421 Pinneberg
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        Kontakt
      </Headline>
      <Paragraph size="small" className="my-5">
        E-Mail: <a href="mailto:inquiry@borchert.me">inquiry@borchert.me</a>
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        Redaktionell verantwortlich
      </Headline>
      <Paragraph size="small" className="my-5">
        Dominik Borchert
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        Verbraucherstreitbeilegung / Universalschlichtungsstelle
      </Headline>
      <Paragraph size="small" className="my-5">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </Paragraph>
    </ContentWrapper>
  </Layout>
);

export default Imprint;
