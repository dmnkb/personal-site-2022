import type { NextPage } from "next";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const Home: NextPage = () => (
  <Layout pageTitle="Startseite">
    <Hero className="bg-[#202030]" />
  </Layout>
);

export default Home;
