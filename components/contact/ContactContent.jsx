import React from "react";
import {
  Grid,
  Text,
  Icon,
  Stack,
  Button,
  Link,
  GridItem,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

const ContactContent = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const contactDetails = [
    {
      icon: AiOutlineHome,
      name: "Davao City, Philippines",
      extraDetails: "Barangay Cabantian",
      hidden: "first_Nav_Item_Hidden",
      visible: "first_Nav_Item_Visible",
    },
    {
      icon: BsTelephone,
      name: "0939  119  2839",
      extraDetails: "Everyday 7am to 6pm",
      hidden: "second_Nav_Item_Hidden",
      visible: "second_Nav_Item_Visible",
    },
    {
      icon: AiOutlineMail,
      name: "gakyleowen@gmail.com",
      extraDetails: "Send me your query anytime!",
      hidden: "third_Nav_Item_Hidden",
      visible: "third_Nav_Item_Visible",
    },
  ];

  return (
    <Grid templateColumns={"repeat(12, 1fr)"} width={"100%"} gap={5}>
      <GridItem colSpan={[12, 12, 12, 6]}>
        <Map />
      </GridItem>
      <GridItem colSpan={[0, 0, 0, 1]}></GridItem>
      <GridItem colSpan={[12, 12, 12, 5]}>
        <Stack
          // height={"60%"}

          spacing={6}
        >
          <Stack spacing={4}>
            {contactDetails.map((i) => (
              <Stack
                key={i.name}
                direction={"row"}
                alignItems={"center"}
                spacing={3}
                // className={inView ? i.visible : i.hidden}
              >
                <Icon as={i.icon} w={8} h={8} color={"#64FED9"} />
                <Stack spacing={0} textAlign={"left"}>
                  <Text
                    fontSize={["16px", "16px", "18px"]}
                    fontWeight={"semibold"}
                    color="#CCD6F6"
                  >
                    {i.name}
                  </Text>
                  <Text fontSize={["14px", "14px"]} color="#8892B0">
                    {i.extraDetails}
                  </Text>
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Link
            href={`mailto:gakyleowen@gmail.com`}
            width={"100%"}
            _hover={{ textDecoration: "none" }}
          >
            <Button
              width={["100%"]}
              maxW={["100%", "100%", "100%", "300px"]}
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
              SAY HELLO
            </Button>
          </Link>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default ContactContent;
