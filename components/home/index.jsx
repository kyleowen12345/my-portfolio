import React, { useEffect } from "react";
import { Text, Button, Image, Box, Link, Stack, Icon } from "@chakra-ui/react";

import { useInView } from "react-intersection-observer";
import { useMyRoute } from "../../lib/routeprovider";
import { PageStyles } from "../../constants/styles";
import TypingText from "./TypingText";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub, FiTwitter } from "react-icons/fi";

const Home = ({ children }) => {
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
      spacing={0}
      width={"100%"}
      margin={"auto"}
      id="home"
      ref={ref}
      bgColor={"#0A192F"}
      alignItems={"start"}
      position={"relative"}
      height={"100%"}
    >
      <Stack
        width={["100%", "100%", "100%", "100%", "50%"]}
        pt={[10, 10, 10, 10, 0]}
        position={["inherit", "inherit", "inherit", "inherit", "sticky"]}
        top={["0px"]}
        paddingRight={["0px", "0px", "0px", "0px", "50px"]}
        // marginBottom={"100px"}
        // height={["100%", "100%", "100%", "100%", "100vh"]}
        justifyContent={"center"}
        spacing={5}
      >
        <Box
          width={"100%"}
          height={["30px", "30px", "30px", "30px", "100px"]}
        />
        <Box px={0} mx={0}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
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
          <Link
            href={"https://www.linkedin.com/in/kyle-owen-ga-80a822189"}
            style={{ textDecoration: "none" }}
          >
            <Text
              fontSize={["0.513rem", "1.313rem", "1.813rem"]}
              fontWeight={"bold"}
              color="#CCD6F6"
            >
              I build scalable web applications that drive business results.
            </Text>
          </Link>
          {/* 3 */}

          {/* 4 */}
          <TypingText />
          {/* 4 */}
        </Box>
        <Stack spacing={5} direction={"row"} alignItems={"center"}>
          <Link
            href="../../Kyle Owen Ga Latest Resume Updated.pdf"
            download={"Resume pdf"}
            style={{ textDecoration: "none" }}
          >
            <Button
              bgColor={"#0A192F"}
              color={"#64FED9"}
              border="2px solid #64FED9"
              fontWeight={"800"}
              _hover={{
                bgColor: "#64FED9",
                color: "#0A192F",
                boxShadow: "3px 3px #64FED9",
              }}
              boxShadow={"3px 3px #64FED9"}
            >
              HIRE ME
            </Button>
          </Link>
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
            spacing={5}
          >
            <Stack
              as={Link}
              color={"#CCD6F6"}
              fontSize="14px"
              _hover={{ color: "#64FED9" }}
              href={"https://www.linkedin.com/in/kyle-owen-ga-80a822189/"}
              target="_blank"
            >
              <Icon
                w={10}
                h={10}
                color={"#CCD6F6"}
                _hover={{ color: "#64FED9" }}
                as={AiOutlineLinkedin}
              />
            </Stack>
            <Stack
              as={Link}
              color={"#CCD6F6"}
              fontSize="14px"
              _hover={{ color: "#64FED9" }}
              href={"https://twitter.com/DevWorst"}
              target="_blank"
            >
              <Icon
                w={10}
                h={10}
                color={"#CCD6F6"}
                _hover={{ color: "#64FED9" }}
                as={FiTwitter}
              />
            </Stack>
            <Stack
              as={Link}
              color={"#CCD6F6"}
              fontSize="14px"
              _hover={{ color: "#64FED9" }}
              href={"https://github.com/kyleowen12345"}
              target="_blank"
            >
              <Icon
                w={10}
                h={10}
                color={"#CCD6F6"}
                _hover={{ color: "#64FED9" }}
                as={FiGithub}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {children}
    </Stack>
  );
};

export default Home;
// rgb(98,237,209)
