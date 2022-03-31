import React from "react";
import { createStyles, Container, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: theme.colors[theme.primaryColor][9],
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container mx={32} px={0} size="xl" className={classes.inner}>
        <Text color="white" size="sm">
          © 2022 Yoga Studio Verde.
        </Text>
      </Container>
    </div>
  );
}
