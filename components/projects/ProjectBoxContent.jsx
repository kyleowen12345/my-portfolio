import React from 'react';
import { Box,Image,Text,Icon,Stack,Grid,Link } from '@chakra-ui/react'
import { motion  } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import NextLink from 'next/link'
import {FiExternalLink} from 'react-icons/fi'
import {AiOutlineGithub} from 'react-icons/ai'


const ProjectBoxContent = ({i}) => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
  return (
    <Stack 
                key={i.projectName}
                border="2px solid #64FED9"
                width={"100%"}
                height={["80%","80%","80%","100%","100%"]}
                maxHeight={[800,800,800,400]}
                borderRadius={10}
                display={"flex"}
                flexDirection={["column","column","column","row"]}
                alignItems={"center"}
                justifyContent={"space-evenly"}
                spacing={[5,5,5,0]}
                py={[5,5,5,0]}
                ref={ref}
                
                className={inView ? "firstContainerVisible" : "firstContainerHidden"}
             >
                        {/* 2 */}
                        <Box
                            width={["90%","90%","90%","40%","40%"]}
                            height={["60%","60%","60%","90%","90%"]}
                            border="2px solid #64FED9"
                            borderRadius={10}
                            className={inView ? "secondContainerVisible" : "secondContainerHidden"}
                        >
                             <iframe 
                                width="100%" 
                                height="100%" 
                                src="https://www.youtube.com/embed/rf75OMfxGMM" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                style={{borderRadius:10}}
                             >

                             </iframe>
                        </Box>
                        {/* 2 */}
                        <Stack
                            width={["90%","90%","90%","55%"]}
                            height={["80%","80%","80%","90%","90%"]}
                            border="2px solid #64FED9"
                            borderRadius={10}
                            boxShadow={"1px 7px 3px 0px black"}
                            p={5}
                            spacing={[5,5,5,5,3,10]}
                            justifyContent={"center"}
                            className={inView ? "thirdContainerVisible" : "thirdContainerHidden"}
                        >
                            {/* 3 */}
                            <Box
                               className={ inView ? "fourthContainerVisible" : "fourthContainerHidden"}

                            >
                                
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                        justifyContent={"space-between"}
                                    >
                                        <Text
                                          fontSize={["14px","14px","14px","16px","17px"]}
                                          color="#CCD6F6"
                                        >
                                            Featured Project
                                        </Text> 
                                        <Box
                                            width={["40px","50px","60px"]}
                                            display={"flex"}
                                            justifyContent={"space-between"}
                                        >
                                          <Link href={i.repositoryLink} target="_blank" >
                                            <Icon 
                                                  as={AiOutlineGithub} 
                                                  h={[4,5,6]} 
                                                  w={[4,5,6]}
                                                  color="#8892B0" 
                                              />
                                          </Link>

                                          <Link href={i.externalLink} target="_blank" >  
                                            <Icon 
                                                as={FiExternalLink}  
                                                h={[4,5,6]} 
                                                w={[4,5,6]} 
                                                color="#8892B0"
                                            />
                                          </Link>  
                                        </Box>
                                    </Box>
                                    <Text 
                                        fontSize={["19px","19px","21px","23px","25px"]}
                                        color={"#64FED9"}
                                        fontFamily="Roboto Mono"
                                    >
                                        {i.projectName}
                                    </Text>
                            </Box>
                            {/* 4 */}
                            <Text
                             fontSize={["14px","15px","16px","17px","18px","20px"]}
                             color="#CCD6F6"
                             className={ inView ? "fifthContainerVisible" : "fifthContainerHidden"}
                             >
                               
                                {i.projectDescription}
                            </Text>
                            {/* 5 */}
                            <Grid
                               templateColumns={['repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)','repeat(4, 1fr)','repeat(5, 1fr)','repeat(5, 1fr)']}
                               height={"20%"}
                               color="#8892B0"
                               fontFamily="Roboto Mono"
                               className={ inView ? "sixthContainerVisible" : "sixthContainerHidden"}
                            >
                                {i.projectTools.map(e=>(
                                    <Text  fontSize={["12px","12px","14px","16px"]} fontWeight={"bold"} key={e}>
                                        {e}
                                    </Text>
                                ))}
                            </Grid>
                        </Stack>
                    </Stack>  
  )
}

export default ProjectBoxContent