import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ContactIntro = () => {
  return (
    <Box
      width={["100%"]}
      display={"flex"}
      //    alignItems={"center"}
      flexDirection={"column"}
      //    justifyContent={"left"}
      //    height={["3%","3%","5%","5%","10%"]}
    >
      <Text
        fontSize={["18px", "20px", "20px", "24px", "20px"]}
        fontWeight={"semibold"}
        // textShadow={"1px 2px black"}
        color={"#64FED9"}
        fontFamily="Roboto Mono"
      >
        What's Next?
      </Text>
      <Text
        fontSize={["18px", "20px", "20px", "24px", "30px"]}
        fontWeight={"bold"}
        textShadow={"2px 2px black"}
        color="#CCD6F6"
      >
        GET IN TOUCH
      </Text>
    </Box>
  );
};

export default ContactIntro;
