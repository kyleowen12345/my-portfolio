import React from "react";
import { Box, Text, Grid, Stack } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import { MdVideoSettings } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDesignServices } from "react-icons/md";
import ServiceContent from "./ServiceContent";
import { PageStyles } from "../../constants/styles";

const Services = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const services = [
    {
      hiddenClass: "firstServiceHidden",
      visibleClass: "firstServiceVisible",
      serviceImage: MdOutlineDesignServices,
      serviceName: "UI/UX Design",
      serviceDescription:
        "Building a user-friendly interface, collaborating with managers and engineers to gather requirements from users before designing ideas. I also process flows or sitemaps then applying color palettes based on what best fits into a particular design conceptually.",
    },
    {
      hiddenClass: "secondServiceHidden",
      visibleClass: "secondServiceVisible",
      serviceImage: CgWebsite,
      serviceName: "Web Development",
      serviceDescription:
        "I make sure websites look good and function properly. Collaborating with website and graphic designers, monitoring website traffic, troubleshooting website problems when they arise, and updating websites as necessary.",
    },
    {
      hiddenClass: "thirdServiceHidden",
      visibleClass: "thirdServiceVisible",
      serviceImage: AiOutlineApi,
      serviceName: "API Development",
      serviceDescription:
        "I make sure API (REST / Graphql) is secure and performs properly. Collaborating with web developers and mobile developers, troubleshooting API accessibility problems when they arise, and updating API as necessary.",
    },
    {
      hiddenClass: "fourthServiceHidden",
      visibleClass: "fourthServiceVisible",
      serviceImage: MdVideoSettings,
      serviceName: "Video Editing",
      serviceDescription:
        "Manipulate film and video footage to create a coherent and complete project that accurately depicts the film director's envision. Using complex editing software to piece together stills, footage, sound effects, dialog, and animation effects",
    },
  ];
  return (
    <Stack
      direction={["column"]}
      ref={ref}
      maxWidth={PageStyles.maxWidth}
      paddingX={[
        PageStyles.paddingMobile,
        PageStyles.paddingMobile,
        PageStyles.paddingTablet,
        PageStyles.paddingDesktop,
      ]}
      spacing={10}
      margin={"auto"}
      width={"100%"}
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Text
          fontSize={["16px", "16px", "18px", "18px", "20px"]}
          fontWeight={"semibold"}
          color={"#64FED9"}
          fontFamily="Roboto Mono"
        >
          MY OFFERED SERVICES
        </Text>
        {/* <Text 
               fontSize={["11px","11px","13px","13px","14px"] } 
               textAlign={"center"}
               color="#CCD6F6"
           >
               At about this time of year, some months after New Year’s resolutions have been made and kept, or made and neglected.
           </Text> */}
      </Box>
      <Grid
        width={"100%"}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={[5, 5, 5, 5, 10]}
        height={["100%"]}
      >
        {services.map((i) => (
          <ServiceContent i={i} key={i.serviceName} />
        ))}
      </Grid>
    </Stack>
  );
};

export default Services;
