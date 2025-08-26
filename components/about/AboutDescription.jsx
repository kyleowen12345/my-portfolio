import React from "react";
import { Box, Text, Grid, Stack, GridItem } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const AboutDescription = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const technologies = [
    "JavaScript (ES6+)",
    "React (Next.js)",
    "Vue.js",
    "WordPress",
    "Strapi",
    "React Native",
    "Webflow",
    "Shopify",
    "HubSpot",
    ".NET C#",
    "Node.js (Express)",
  ];

  return (
    <Grid templateColumns="repeat(12, 1fr)" width="100%" ref={ref}>
      <GridItem colSpan={12}>
        <Stack spacing={10}>
          {/* Header Section */}
          <Box>
            <Text
              fontSize={["14px", "14px", "14px", "16px", "18px"]}
              fontWeight="bold"
              color="#64FED9"
              fontFamily="Roboto Mono"
            >
              ABOUT ME
            </Text>
            <Text
              fontSize={["23px", "23px", "25px", "27px", "30px"]}
              fontWeight="bold"
              color="#CCD6F6"
            >
              PERSONAL DETAILS
            </Text>
          </Box>

          {/* Description Section */}
          <Box my={5} color="#CCD6F6">
            <Text
              lineHeight={["8", "8", "8", "10"]}
              fontSize={["15px", "15px", "15px", "16px", "16px", "18px"]}
            >
              Hi, I'm Kyle! I've been passionate about web development since
              2019, spending years refining my skills by analyzing and
              recreating website UIs. I love crafting intuitive, visually
              appealing designs that enhance user experiences.
            </Text>

            <Text
              lineHeight={["8", "8", "8", "10"]}
              fontSize={["15px", "15px", "15px", "16px", "16px", "18px"]}
              color="#64FED9"
              mt={5}
            >
              For 3 years, I worked with{" "}
              <Link href="https://www.hillandfoster.com/" target="_blank">
                <Text
                  as="span"
                  textDecoration="underline"
                  fontWeight="700"
                  fontSize="18px"
                  cursor="pointer"
                  textUnderlineOffset="5px"
                  _hover={{ opacity: 0.8 }}
                >
                  Hill&Foster
                </Text>
              </Link>
              , a top Web Design and Branding agency, where I specialized in
              implementing and creating impactful designs. I'm now seeking a
              part-time or full-time role to collaborate with talented teams and
              continue growing as a designer and developer.
            </Text>
          </Box>
        </Stack>
      </GridItem>

      {/* Technologies Section */}
      <GridItem colSpan={12} paddingTop={10}>
        <Box mb={[5, 5, 5, 5, 10]}>
          <Text
            mb={5}
            fontSize={["15px", "15px", "15px", "16px", "16px", "18px"]}
            lineHeight={["8", "8", "8", "10"]}
            color="#CCD6F6"
          >
            Here are a few technologies I've been working with recently:
          </Text>

          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={3}
            color="#CCD6F6"
            fontFamily="Roboto Mono"
          >
            {technologies.map((tech, index) => (
              <Text
                key={index}
                fontSize={["10px", "10px", "11px", "14px", "14px"]}
              >
                &gt; {tech}
              </Text>
            ))}
          </Grid>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default AboutDescription;
