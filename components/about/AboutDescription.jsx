import React from "react";
import { Box, Text, Grid, Stack, GridItem } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const AboutDescription = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const customFontSize = ["10px", "10px", "11px", "14px", "14px"];

  return (
    <Grid templateColumns={"repeat(12, 1fr)"} width={"100%"} ref={ref}>
      <GridItem colSpan={[12, 12, 12]}>
        <Stack spacing={10}>
          <Box>
            <Text
              //   textShadow={"1px 1px black"}
              fontSize={["14px", "14px", "14px", "16px", "18px"]}
              fontWeight={"bold"}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              //   bgGradient={'linear(315deg,  #4958DE 0%, #7F4FEC 74%)' }
              //   bgClip='text'
              // className={
              //   inView ? "firstContainerVisible" : "firstContainerHidden"
              // }
              color={"#64FED9"}
              fontFamily="Roboto Mono"
            >
              ABOUT ME
            </Text>
            <Text
              //   textShadow={"1px 2px black"}
              fontSize={["23px", "23px", "25px", "27px", "30px"]}
              fontWeight={"bold"}
              // className={
              //   inView ? "secondContainerVisible" : "secondContainerHidden"
              // }
              //   bgGradient={'linear(315deg,  #4958DE 0%, #7F4FEC 74%)' }
              //   bgClip='text'
              color="#CCD6F6"
            >
              PERSONAL DETAILS
            </Text>
          </Box>
          <Box
            //  className={inView ? "thirdContainerVisible" : "thirdContainerHidden"}
            my={5}
            color="#CCD6F6"
          >
            <Text
              lineHeight={["8", "8", "8", "10"]}
              fontSize={["15px", "15px", "15px", "16px", "16px", "18px"]}
            >
              Hi, I’m Kyle! I’ve been passionate about web development since
              2019, spending years refining my skills by analyzing and
              recreating website UIs. I love crafting intuitive, visually
              appealing designs that enhance user experiences.{" "}
            </Text>
            <Text
              lineHeight={["8", "8", "8", "10"]}
              fontSize={["15px", "15px", "15px", "16px", "16px", "18px"]}
              color={"#64FED9"}
              mt={5}
            >
              From 2022 to 2024, I worked with{" "}
              <Link href={"https://www.hillandfoster.com/"} target="_blank">
                <span
                  style={{
                    textDecoration: "underline",
                    fontWeight: 700,
                    fontSize: "18px",
                    cursor: "pointer",
                    textUnderlineOffset: "5px",
                  }}
                >
                  Hill&Foster
                </span>
              </Link>
              , a top Web Design and Branding agency, where I specialized in
              implementing and creating impactful designs. I’m now seeking a
              part-time or full-time role to collaborate with talented teams and
              continue growing as a designer and developer.{" "}
            </Text>
          </Box>
        </Stack>
      </GridItem>
      <GridItem colSpan={[12, 12, 12]} paddingTop={10}>
        <Box
          //  className={
          //    inView ? "fourthContainerVisible" : "fourthContainerHidden"
          //  }
          mb={[5, 5, 5, 5, 10]}
        >
          <Text
            mb={5}
            fontSize={["15px", "15px", "15px", "16px", "16px", "18px"]}
            lineHeight={["8", "8", "8", "10"]}
            color="#CCD6F6"
          >
            Here are a few technologies I’ve been working with recently:
          </Text>
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={3}
            color="#CCD6F6"
            fontFamily="Roboto Mono"
          >
            <Text fontSize={customFontSize}>{">"} JavaScript (ES6+)</Text>

            <Text fontSize={customFontSize}>{">"} React (Nextjs)</Text>
            <Text fontSize={customFontSize}>{">"} Vue js</Text>
            <Text fontSize={customFontSize}>{">"} React Native</Text>
            <Text fontSize={customFontSize}>{">"} Shopify</Text>
            <Text fontSize={customFontSize}>{">"} Hubspot</Text>
            <Text fontSize={customFontSize}>{">"} Dotnet C#</Text>
            <Text fontSize={customFontSize}>{">"} Laravel</Text>
            <Text fontSize={customFontSize}>{">"} Node js (Express)</Text>
          </Grid>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default AboutDescription;
