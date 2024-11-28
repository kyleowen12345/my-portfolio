import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ProjectIntro = () => {
  return (
    <Box
      width={["100%"]}
      mx={["auto", "auto", "auto", "auto", 0]}
      display={"flex"}
      alignItems={"center"}
      height={["3%", "3%", "5%", "5%", "10%"]}
    >
      <Text
        fontSize={["18px", "20px", "20px", "24px", "27px"]}
        fontWeight="semibold"
        color={"#64FED9"}
        fontFamily="Roboto Mono"
      >
        Some Things I've Built.
      </Text>
    </Box>
  );
};

export default ProjectIntro;
