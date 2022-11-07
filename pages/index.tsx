import type { NextPage } from "next";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Startseite">
      <Hero />
      <main><div className="container">asdf</div></main>
    </Layout>
  );
};

export default Home;
