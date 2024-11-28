import React from "react";
import { Image, Box, Text, Grid, Button, Stack, Icon } from "@chakra-ui/react";

import { useInView } from "react-intersection-observer";
import { BsWordpress } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDesignServices } from "react-icons/md";

const ServiceContent = ({ i }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return (
    <Stack
      spacing={[3, 3, 4, 6, 8]}
      p={[3, 3, 3, 5]}
      //  boxShadow={"0px 10px 5px 0px #2C2C2C"}
      borderRadius={10}
      width={"100%"}
      height={"100%"}
      border="3px solid #64FED9"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      textAlign={"center"}
      justifyContent={"center"}
      boxShadow={"3px 3px #64FED9"}
      ref={ref}
      // className={inView  ? i.visibleClass : i.hiddenClass}
    >
      <Icon as={i.serviceImage} h={10} w={10} color={"#64FED9"} />
      <Text
        fontSize={["16px", "16px", "18px", "20px", "22px"]}
        fontWeight={"semibold"}
        color="#CCD6F6"
        fontFamily="Roboto Mono"
      >
        {i.serviceName}
      </Text>
      <Text
        lineHeight={["8", "8", "8", "8", "10"]}
        fontSize={["14px", "14px", "15px", "16px", "18px"]}
        color="#CCD6F6"
      >
        {i.serviceDescription}
      </Text>
    </Stack>
  );
};

export default ServiceContent;
