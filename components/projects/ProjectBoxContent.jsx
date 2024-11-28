import React from "react";
import { Box, Grid, Text, Icon, Stack, Link, GridItem } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import NextLink from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectBoxContent = ({ i }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
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
      // className={inView ? "firstContainerVisible" : "firstContainerHidden"}
    >
      {/* 2 */}
      <GridItem
        colSpan={[12, 12, 12, 4]}
        height={"100%"}
        border="2px solid #64FED9"
        borderRadius={10}

        // className={inView ? "secondContainerVisible" : "secondContainerHidden"}
      >
        <iframe
          width="100%"
          height="100%"
          src={i.youtubelink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: 10 }}
        ></iframe>
      </GridItem>
      {/* 2 */}
      <GridItem
        colSpan={[12, 12, 12, 8]}
        border="2px solid #64FED9"
        borderRadius={10}
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
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
              "repeat(4, 1fr)",
              "repeat(5, 1fr)",
              "repeat(5, 1fr)",
            ]}
            height={"20%"}
            color="#8892B0"
            fontFamily="Roboto Mono"
            //    className={ inView ? "sixthContainerVisible" : "sixthContainerHidden"}
          >
            {i.projectTools.map((e) => (
              <Text
                fontSize={["12px", "12px", "14px", "16px"]}
                fontWeight={"bold"}
                key={e}
              >
                {e}
              </Text>
            ))}
          </Grid>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default ProjectBoxContent;
