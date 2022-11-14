import type { NextPage } from "next";
import Hero from "../components/hero/Hero";
import Layout from "../components/Layout";

const Home: NextPage = () => (
  <Layout pageTitle="Startseite">
    <Hero />
  </Layout>
);

export default Home;
