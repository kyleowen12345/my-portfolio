import React, { useEffect } from "react";
import { Text, Button, Image, Box, Link, Stack } from "@chakra-ui/react";

import { useInView } from "react-intersection-observer";
import { useMyRoute } from "../../lib/routeprovider";
import { PageStyles } from "../../constants/styles";
import TypingText from "./TypingText";

const Home = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { setSection } = useMyRoute();

  useEffect(() => {
    if (inView) {
      setSection("/");
    }
  }, [inView]);

  return (
    <Stack
      className={inView ? "animated-box" : "animated-box-hidden"}
      direction={["column", "column", "column", "column", "row"]}
      maxWidth={PageStyles.maxWidth}
      paddingX={[
        PageStyles.paddingMobile,
        PageStyles.paddingMobile,
        PageStyles.paddingTablet,
        PageStyles.paddingDesktop,
      ]}
      spacing={10}
      width={"100%"}
      margin={"auto"}
      id="home"
      ref={ref}
      bgColor={"#0A192F"}
      alignItems={"center"}
    >
      <Box
        mx={0}
        width={["100%", "100%", "100%", "100%", "50%"]}
        px={0}
        pt={[10, 10, 10, 10, 0]}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          px={0}
          mb={[2, 2, 5]}
          mx={0}
        >
          {/* 1 */}
          <Text
            width={"100%"}
            fontSize={["1rem", "1rem", "1.1rem", "1.3rem", "1.3rem", "1rem"]}
            fontWeight={"bold"}
            color={"#64FED9"}
            style={{
              wordSpacing: "3px",
            }}
            //  className={ inView ? "firstContainerVisible" : "firstContainerHidden"}
            fontFamily="Roboto Mono"
          >
            Hi, my name is
          </Text>
          {/* 1 */}
        </Box>

        <Box px={0} mb={[5, 5, 10]} mx={0}>
          {/* 2 */}
          <Text
            fontSize={[
              "1.513rem",
              "2.313rem",
              "2.813rem",
              "3.013rem",
              "3.313rem",
              "3.813rem",
            ]}
            fontWeight={"bold"}
            color="#CCD6F6"
            // className={ inView ? "secondContainerVisible" : "secondContainerHidden"}
          >
            KYLE OWEN GA.
          </Text>
          {/* 2 */}
          <Text
            fontSize={[
              "0.513rem",
              "1.313rem",
              "1.813rem",
              "2.013rem",
              "2.313rem",
              "2.813rem",
            ]}
            fontWeight={"bold"}
            color="#CCD6F6"
            // className={ inView ? "secondContainerVisible" : "secondContainerHidden"}
          >
            I create things for the web.
          </Text>
          {/* 3 */}

          {/* 3 */}

          {/* 4 */}
          <TypingText />
          {/* 4 */}
        </Box>

        {/* 5 */}
        <Box
          px={0}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mx={0}
          flexDirection={["column", "column", "column", "row"]}
          gap={[1, 1, 1, 6]}
        >
          <Link
            width={["100%"]}
            href="/#about"
            style={{ textDecoration: "none" }}
          >
            <Button
              width={"100%"}
              mb={[5, 5, 5, 0]}
              bgColor={"#64FED9"}
              color={"#0A192F"}
              border="2px solid #64FED9"
              height="50px"
              fontSize={["0.8rem", "0.8rem", "1rem"]}
              _hover={{
                color: "#64FED9",
                bgColor: "#0A192F",
                boxShadow: "3px 3px #64FED9",
              }}
              boxShadow={"3px 3px #64FED9"}
              style={{
                wordSpacing: "2px",
              }}
              fontWeight="300"
              minWidth={"200px"}
              //  className={ inView ? "fifthContainerVisible" : "fifthContainerHidden"}
            >
              About Me
            </Button>
          </Link>
          <Link
            width={["100%"]}
            href="https://github.com/kyleowen12345"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <Button
              width={"100%"}
              mb={[5, 5, 5, 0]}
              bgColor={"#0A192F"}
              color={"#64FED9"}
              border="2px solid #64FED9"
              height="50px"
              fontSize={["0.8rem", "0.8rem", "1rem"]}
              _hover={{
                bgColor: "#64FED9",
                color: "#0A192F",
                boxShadow: "3px 3px #64FED9",
              }}
              boxShadow={"3px 3px #64FED9"}
              style={{
                wordSpacing: "2px",
              }}
              fontWeight="300"
              minWidth={"200px"}
              //  className={ inView ? "sixthContainerVisible" : "sixthContainerHidden"}
            >
              Check out my Github!
            </Button>
          </Link>
        </Box>
        {/* 5 */}
      </Box>

      {/* 6 */}
      <Box
        mx={0}
        width={["100%", "100%", "100%", "100%", "50%"]}
        px={0}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"right"}
      >
        <Image
          src="../../home_ill.png"
          alt="next"
          width={["100%"]}
          height={["100%"]}
          maxWidth="550px"
          maxHeight="550px"
          objectFit={"contain"}
          borderRadius={5}
          // className={ inView ? "seventhContainerVisible" : "seventhContainerHidden"}
        />
      </Box>
      {/* 6*/}
    </Stack>
  );
};

export default Home;
// rgb(98,237,209)
