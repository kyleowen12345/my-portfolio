import "../styles/globals.css";
import "@fontsource/poppins/400.css";
import "@fontsource/roboto-mono/400.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import theme from "../styles/theme";
import Header from "../components/header";
import { MyRouteProvider } from "../lib/routeprovider";

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #0a192f;
            scroll-behavior: smooth !important;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <MyRouteProvider>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </MyRouteProvider>
    </ChakraProvider>
  );
}

export default MyApp;
