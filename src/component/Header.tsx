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
  useMantineTheme,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import Link from "next/link";
import logo from "../assets/logo.svg";
import { useRouter } from "next/router";

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
  const theme = useMantineTheme();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(links[0].link);
  const router = useRouter();

  let items = {};
  <ul>
    {
      (items = links.map((link) => (
        <li key={link.label} style={{ listStyle: "none" }}>
          <Link href={link.link}>
            <a
              className={classes.link}
              style={
                router.pathname == link.link
                  ? { color: theme.colors[theme.primaryColor][3] }
                  : { color: theme.white }
              }
            >
              {link.label}
            </a>
          </Link>
        </li>
      )))
    }
  </ul>;

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
