import { NextPage } from "next";
import { Hero, Layout, HomeSection, Newsletter } from "../src/component";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <HomeSection />
      <Newsletter />
    </Layout>
  );
};

export default Home;
