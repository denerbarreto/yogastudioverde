import { NextPage } from "next";
import { Layout, YogaHome, YogaSection } from "../src/component";

const IdososPage: NextPage = () => {
  return (
    <Layout>
      <YogaHome
        para="idosos"
        image="https://images.pexels.com/photos/7530436/pexels-photo-7530436.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7530436.jpg&fm=jpg"
      />
      <YogaSection />
    </Layout>
  );
};

export default IdososPage;
