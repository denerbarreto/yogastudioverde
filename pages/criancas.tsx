import { NextPage } from "next";
import { Layout, YogaHome, YogaSection } from "../src/component";

const CriancasPage: NextPage = () => {
  return (
    <Layout>
      <YogaHome
        para="crianças"
        image="https://images.pexels.com/photos/7353051/pexels-photo-7353051.jpeg?cs=srgb&dl=pexels-monstera-7353051.jpg&fm=jpg"
      />
      <YogaSection />
    </Layout>
  );
};

export default CriancasPage;
