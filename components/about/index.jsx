import React, { useEffect } from "react";
import { Container, Stack, Box } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useMyRoute } from "../../lib/routeprovider";
import AboutImage from "./AboutImage";
import AboutDescription from "./AboutDescription";
import Services from "./Services";
import { PageStyles } from "../../constants/styles";

const About = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const { setSection } = useMyRoute();

  useEffect(() => {
    if (inView) {
      setSection("/#about");
    }
  }, [inView]);
  return (
    <Stack
      className={inView ? "animated-box" : "animated-box-hidden"}
      maxWidth={PageStyles.maxWidth}
      paddingX={[
        PageStyles.paddingMobile,
        PageStyles.paddingMobile,
        PageStyles.paddingTablet,
        PageStyles.paddingDesktop,
      ]}
      margin={"auto"}
      width={"100%"}
      ref={ref}
      id="about"
      spacing={0}
    >
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"flex-start"}
        flexDirection={["column", "column", "column", "column", "row"]}
        justifyContent={["space-between"]}
      >
        <AboutDescription />
        {/* <AboutImage /> */}
      </Box>
      {/* <Box
          width={["100%"]}
          display={["block", "block", "block", "block", "none"]}
          height={100}
        ></Box> */}
    </Stack>
  );
};

export default About;
