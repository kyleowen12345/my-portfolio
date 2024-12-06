import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Home from "../components/home";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

import { Box, Spacer, Stack, Text } from "@chakra-ui/react";
import MyFooter from "../components/footer/MyFooter";
import Services from "../components/about/Services";

export default function Balay() {
  return (
    <Box
      width={"100%"}
      mr="auto"
      ml="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Head>
        <title>KYLE OWEN GA</title>
        <meta name="description" content="Get to know me" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          /> */}
      </Head>
      <Box width={"100%"} height={["0px", "0px", "0px", "0px", "50px"]} />
      <Home>
        <Stack
          width={["100%", "100%", "100%", "100%", "50%"]}
          spacing={"100px"}
        >
          <About />

          <Services />

          <Projects />

          <Contact />
          <MyFooter />
        </Stack>
      </Home>
    </Box>
  );
}
