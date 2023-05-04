import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/fonts.css";

export default function App({ Component, pageProps }) {
  const theme = extendTheme({
    styles: {
      global: {
        body: { fontFamily: "Quicksand" },
        h1: {
          fontFamily: "Poppins !important",
        },
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
