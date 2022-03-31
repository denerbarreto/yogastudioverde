import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { createGenerateId } from "jss";
import { JssProvider } from "react-jss";

import { Global } from "../src/component";

import "../src/styles/font.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.getElementById("mantine-ssr-styles");

    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <JssProvider generateId={createGenerateId({ minify: true })}>
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
    </JssProvider>
  );
}
