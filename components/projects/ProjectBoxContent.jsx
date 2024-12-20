import React from "react";
import {
  Box,
  Grid,
  Text,
  Icon,
  Stack,
  Link,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import NextLink from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectBoxContent = ({ i }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <Grid
      key={i.projectName}
      border="2px solid #64FED9"
      width={"100%"}
      borderRadius={10}
      ref={ref}
      templateColumns={"repeat(12, 1fr)"}
      padding={"16px"}
      gap={"16px"}
      boxShadow={"3px 3px #64FED9"}
      className={inView ? "animated-box" : "animated-box-hidden"}
    >
      {/* 2 */}
      <GridItem
        colSpan={[12]}
        height={"100%"}
        border="2px solid #64FED9"
        borderRadius={10}
        borderTopRightRadius={[10]}
        borderBottomRightRadius={0}
        borderBottomLeftRadius={[0]}
        minHeight={"250px"}

        // className={inView ? "secondContainerVisible" : "secondContainerHidden"}
      >
        {i.youtubelink ? (
          <iframe
            width="100%"
            height="100%"
            src={i.youtubelink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={"iframe-style"}
          ></iframe>
        ) : (
          <Image
            height={"100%"}
            width={"100%"}
            src={i.image}
            objectFit={"cover"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            borderRadius={8}
            borderTopRightRadius={[8]}
            borderBottomRightRadius={0}
            borderBottomLeftRadius={[0]}
          />
        )}
      </GridItem>
      {/* 2 */}
      <GridItem
        colSpan={[12]}
        border="2px solid #64FED9"
        borderRadius={10}
        borderTopLeftRadius={0}
        borderBottomLeftRadius={[10]}
        borderTopRightRadius={[0]}
        p={5}
        justifyContent={"center"}
        // className={inView ? "thirdContainerVisible" : "thirdContainerHidden"}
      >
        <Stack spacing={[5, 5, 5, 5, 3, 10]}>
          {/* 3 */}
          <Box
          //    className={ inView ? "fourthContainerVisible" : "fourthContainerHidden"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text
                fontSize={["14px", "14px", "14px", "16px", "17px"]}
                color="#CCD6F6"
              >
                Featured Project
              </Text>
              <Box display={"flex"} justifyContent={"space-between"} gap={3}>
                {i.repositoryLink != "" && (
                  <Link href={i.repositoryLink} target="_blank">
                    <Icon
                      as={AiOutlineGithub}
                      h={[4, 5, 6]}
                      w={[4, 5, 6]}
                      color="#8892B0"
                    />
                  </Link>
                )}

                {i.externalLink !== "disabled" && (
                  <Link href={i.externalLink} target="_blank">
                    <Icon
                      as={FiExternalLink}
                      h={[4, 5, 6]}
                      w={[4, 5, 6]}
                      color="#8892B0"
                    />
                  </Link>
                )}
              </Box>
            </Box>
            <Text
              fontSize={["19px", "19px", "21px", "23px", "25px"]}
              color={"#64FED9"}
              fontFamily="Roboto Mono"
            >
              {i.projectName}
            </Text>
          </Box>
          {/* 4 */}
          <Text
            fontSize={["14px", "15px", "16px", "17px", "18px", "20px"]}
            color="#CCD6F6"
            //  className={ inView ? "fifthContainerVisible" : "fifthContainerHidden"}
          >
            {i.projectDescription}
          </Text>
          {/* 5 */}
          <Stack
            direction={"row"}
            gap={3}
            fontFamily="Roboto Mono"
            wrap={"wrap"}
            //    className={ inView ? "sixthContainerVisible" : "sixthContainerHidden"}
          >
            {i.projectTools.map((e) => (
              <Text
                fontSize={["12px"]}
                fontWeight={"bold"}
                key={e}
                backgroundColor={"#64FED9"}
                padding={"5px 10px"}
                borderRadius={"8px"}
              >
                {e}
              </Text>
            ))}
          </Stack>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default ProjectBoxContent;
