import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";

import { Global } from "../src/component";

import "../src/styles/font.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        primaryColor: "teal",
        fontFamily:
          "Inter,-apple-system, sans-serif, BlinkMacSystemFont, Segoe UI,Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      }}
      defaultProps={{
        Container: {
          sizes: {
            xs: 540,
            sm: 720,
            md: 960,
            lg: 1140,
            xl: 1400,
          },
        },
      }}
    >
      <Global />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
