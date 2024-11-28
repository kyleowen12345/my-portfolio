import React from "react";
import {
  Flex,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { CloseIcon } from "@chakra-ui/icons";
import { useMyRoute } from "../../lib/routeprovider";
import { useInView } from "react-intersection-observer";

const ReusableDrawer = ({ onClose, isOpen, myRoutes }) => {
  const { section } = useMyRoute();
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return (
    <Drawer onClose={onClose} isOpen={isOpen} placement="right" zIndex={9999}>
      <DrawerOverlay />
      <DrawerContent bgColor={"#0A192F"}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          ref={ref}
        >
          <DrawerHeader px={5}>
            <Image
              minWidth={"50px"}
              src="../../my_logo.png"
              alt="portfolio_logo"
              height={["30px", "40px", "40px", "50px"]}
              objectFit="contain"
            />
          </DrawerHeader>
          <CloseIcon
            color={"#64FED9"}
            onClick={onClose}
            cursor="pointer"
            mx={5}
          />
        </Flex>

        <DrawerBody
          display="flex"
          flexDirection="column"
          // initial="hidden"
          // animate="visible"
          // variants={list}
          color={"#CCD6F6"}
          fontSize={"13px"}
          alignItems="center"
        >
          {myRoutes.map((i) => (
            <NextLink href={i.route} key={i.route} passHref>
              <Link
                onClick={onClose}
                my={5}
                className={inView ? i.visible : i.hidden}
              >
                {i.routeName}
              </Link>
            </NextLink>
          ))}
          <Link
            width="40%"
            href="../../Kyle Owen Ga CV.pdf"
            download={"Resume pdf"}
            style={{ textDecoration: "none" }}
            className={
              inView ? "fifth_Nav_Item_Visible" : "fifth_Nav_Item_Hidden"
            }
          >
            <Button
              bgColor={"#0A192F"}
              color={"#64FED9"}
              border="2px solid #64FED9"
              fontWeight={"300"}
              width="100%"
              my={5}
              fontSize="13px"
              _hover={{
                bgColor: "#64FED9",
                color: "#0A192F",
                boxShadow: "3px 3px #64FED9",
              }}
              boxShadow={"3px 3px #64FED9"}
            >
              GET CV
            </Button>
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ReusableDrawer;
