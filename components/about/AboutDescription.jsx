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
    "Remix Run",
    "Strapi",
    "React Native",
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
              Hi, I'm Kyle! I'm a full-stack developer with 3 years of
              experience building React and Node.js applications for e-commerce
              and social platforms. I specialize in creating scalable web
              applications with secure payment systems and real-time features.
            </Text>

            <Text
              lineHeight={["8", "8", "8", "10"]}
              fontSize={["15px", "15px", "15px", "16px", "16px", "18px"]}
              color="#64FED9"
              mt={5}
            >
              During my time at{" "}
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
              , I developed expertise in building high-performance web
              applications.{" "}
              <Text as="span" color="#64FED9" fontWeight="bold">
                Currently seeking full-time opportunities
              </Text>{" "}
              to build innovative products and solve complex technical
              challenges.
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
