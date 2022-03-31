import { NextPage } from "next";
import { Layout, YogaHome, YogaSection } from "../src/component";

const AdultosPage: NextPage = () => {
  return (
    <Layout>
      <YogaHome
        para="adultos"
        image="https://images.pexels.com/photos/3822171/pexels-photo-3822171.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      />
      <YogaSection />
    </Layout>
  );
};

export default AdultosPage;
