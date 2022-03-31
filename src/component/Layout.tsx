import { Container, useMantineTheme } from "@mantine/core";
import Head from "next/head";
import { Header } from ".";
import Footer from "./Footer";

type Props = {
  title: string;
  description: string;
  keywords: string;
  children: React.ReactNode;
};

const Layout = ({ title, description, keywords, children }: Props) => {
  const theme = useMantineTheme();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="descriptions" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Container
        size="xl"
        px={0}
        style={{
          boxShadow: theme.shadows.sm,
          backgroundColor: theme.white,
        }}
      >
        <Header
          links={[
            { link: "/", label: "Página Inicial" },
            { link: "/criancas", label: "Yoga para Crianças" },
            { link: "/idosos", label: "Yoga para Idosos" },
            { link: "/adultos", label: "Yoga para Adultos" },
            { link: "/gestantes", label: "Yoga para Gestantes" },
            { link: "/sobre", label: "Sobre mim" },
            { link: "/contato", label: "Entre em contato" },
          ]}
        />
        {children}
        <Footer />
      </Container>
    </div>
  );
};

Layout.defaultProps = {
  title: "Yoga Studio Verde",
  description: "Yoga para tudo. Acessível a todos",
  keywords: "yoga, meditação",
};

export default Layout;
