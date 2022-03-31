import React from "react";
import { Title, Text, Container, Overlay, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    maxHeight: 440,
    paddingTop: 140,
    paddingBottom: 140,
    backgroundSize: "cover",
    backgroundPosition: "center",

    "@media (max-width: 520px)": {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: theme.fontFamily,

    "@media (max-width: 520px)": {
      fontSize: 28,
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    "@media (max-width: 520px)": {
      fontSize: theme.fontSizes.md,
    },
  },
}));

interface ImageProps {
  image: string;
  para: string;
}

export default function YogaSection({ image, para }: ImageProps) {
  const { classes } = useStyles();

  return (
    <div
      className={classes.wrapper}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Yoga para{" "}
          <Text component="span" inherit className={classes.highlight}>
            {para}
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tincidunt, tellus sed rutrum ultrices, erat risus venenatis enim, id
            hendrerit neque mi a erat. Praesent aliquet lectus lorem, vitae
            laoreet mi feugiat id. Ut rutrum ante quis consectetur semper.
          </Text>
        </Container>
      </div>
    </div>
  );
}
