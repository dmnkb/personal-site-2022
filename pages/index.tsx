import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Startseite">
      <div className="container mx-auto">Hello World</div>
    </Layout>
  );
};

export default Home;
