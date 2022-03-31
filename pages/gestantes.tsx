import { NextPage } from "next";
import { Layout, YogaHome, YogaSection } from "../src/component";

const GestantesPage: NextPage = () => {
  return (
    <Layout>
      <YogaHome
        para="gestantes"
        image="https://images.pexels.com/photos/7055720/pexels-photo-7055720.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      />
      <YogaSection />
    </Layout>
  );
};

export default GestantesPage;
