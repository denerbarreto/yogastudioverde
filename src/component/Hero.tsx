import React from "react";
import { Title, createStyles, Image, Container } from "@mantine/core";

import hero from "../assets/hero.svg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    maxHeight: 440,
    paddingTop: 36,
    paddingBottom: 32,
    background:
      "linear-gradient(180deg, rgba(248, 255, 254, 0) 0%, rgba(164, 207, 201, 0) 15%,rgba(157, 200, 194, 0.6643032212885154) 63%, rgba(123, 164, 158, 0.7931547619047619) 100%)",
    "@media (max-width: 520px)": {
      padding: 16,
    },
  },

  inner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  hero: {
    width: "100%",
    marginBottom: 16,
    "&, img": {
      maxWidth: 600,
      height: "100%",
    },
  },

  title: {
    fontWeight: 800,
    color: theme.white,
    fontFamily: theme.fontFamily,
    textAlign: "center",

    "@media (max-width: 520px)": {
      fontSize: 28,
    },
  },
}));

export default function HeroImageBackground() {
  const { classes } = useStyles();

  return (
    <Container fluid className={classes.wrapper}>
      <div className={classes.inner}>
        <Image src={hero.src} className={classes.hero} />
        <Title className={classes.title}>
          Yoga para tudo. Acessível a todos.
        </Title>
      </div>
    </Container>
  );
}
