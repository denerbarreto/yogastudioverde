import React, { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Image,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import logo from "../assets/logo.svg";

const HEADER_HEIGHT = 120;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    padding: "0 0 0 32px",
    borderBottom: 0,
    boxShadow: theme.shadows.sm,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    right: 0,
    borderRadius: 0,
    overflow: "hidden",
    backgroundColor: theme.colors[theme.primaryColor][9],
    boxShadow: theme.shadows.sm,
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    alignSelf: "flex-end",
    padding: "16px 32px",
    backgroundColor: theme.colors[theme.primaryColor][9],
    boxShadow: theme.shadows.sm,
    borderRadius: `${theme.radius.lg}px 0 0 ${theme.radius.lg}px`,
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    alignSelf: "flex-end",
    padding: "16px 32px",
    backgroundColor: theme.colors[theme.primaryColor][9],
    borderRadius: `${theme.radius.lg}px 0 0 ${theme.radius.lg}px`,
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  teste: {},

  link: {
    display: "block",
    lineHeight: 1,
    textDecoration: "none",
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    textAlign: "center",

    "&:hover": {
      color: theme.colors[theme.primaryColor][3],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      color: theme.colors[theme.primaryColor][3],
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export default function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link);
        toggleOpened(false);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container size="xl" className={classes.header} px={0} py={16}>
        <Image src={logo.src} alt="logo" width={80} height={80} mr={32} />
        <Group spacing={32} noWrap className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
          color="white"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper
              shadow="sm"
              className={classes.dropdown}
              withBorder
              style={styles}
            >
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
