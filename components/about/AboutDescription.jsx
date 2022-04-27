import React from 'react';
import { Box,Text,Grid  } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';







const AboutDescription = () => {
   const { ref, inView, entry } = useInView({
      threshold: 0,
    });
  return (
      <Box
         width={["90%","90%","90%","90%","50%"]}
         height={["90%","90%","60%","70%","90%"]}
         mx={["auto","auto","auto","auto",0]}
         
      >
            <Box
                width={"100%"}
                maxWidth={"800px"}
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent={"center"}
                ref={ref}
            >
                <Box
                  
                >
                       <Text  
                        //   textShadow={"1px 1px black"} 
                          fontSize={["14px","14px","14px","16px","18px"]} 
                          fontWeight={"bold"}
                          initial={{opacity:1}}
                          animate={{opacity:1}}
                        //   bgGradient={'linear(315deg,  #4958DE 0%, #7F4FEC 74%)' }
                        //   bgClip='text'
                        className={ inView ? "firstContainerVisible" : "firstContainerHidden"}
                        color={"#64FED9"}
                        fontFamily="Roboto Mono"
                          >
                             ABOUT ME
                       </Text>
                       <Text 
                        //   textShadow={"1px 2px black"}
                          fontSize={["23px","23px","25px","27px","30px"]} 
                          fontWeight={"bold"}
                          className={ inView ? "secondContainerVisible" : "secondContainerHidden"}
                        //   bgGradient={'linear(315deg,  #4958DE 0%, #7F4FEC 74%)' }
                        //   bgClip='text'
                        color="#CCD6F6"
                          >
                             PERSONAL DETAILS
                       </Text>
                </Box>
                <Box 
                 className={ inView ? "thirdContainerVisible" : "thirdContainerHidden"}
                  my={5}
                  color="#CCD6F6"
                >
                       <Text  
                          lineHeight={["8","8","8","10"]}
                          fontSize={["15px","15px","15px","16px","16px","18px"]}
                       >
                          Hello! I am Kyle and I love building things for the web. I started learning web development in 2019 and since then I fell in love with it to the point where I would clone other websites' UI and try to analyze them and implement it on my own.
                       </Text>
                       <Text 
                           lineHeight={["8","8","8","10"]}
                           fontSize={["15px","15px","15px","16px","16px","18px"]}
                           mt={5}
                       >
                          Currently, I am trying to finish building a video conferencing app with <span style={{color:"#64FED9"}}>Zoom-like features</span> however I would love to do some work with a team or someone with more experience so that I could get better and gain more experience.
                       </Text>
                </Box>
                <Box 
                 className={ inView ? "fourthContainerVisible" : "fourthContainerHidden"}
                  mb={[5,5,5,5,10]}
                >
                       <Text 
                          mb={5}  
                          fontSize={["15px","15px","15px","16px","16px","18px"]}
                          lineHeight={["8","8","8","10"]}
                          color="#CCD6F6"
                       >
                          Here are a few technologies I’ve been working with recently:
                       </Text>
                       <Grid 
                          templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)']} 
                          gap={3}
                          color="#CCD6F6"
                          fontFamily="Roboto Mono"
                       >
                           <Text 
                              fontSize={["10px","10px","11px","14px","14px"]} 
                           >
                              {">"} JavaScript (ES6+)
                           </Text>
                           <Text 
                              fontSize={["10px","10px","11px","14px","14px"]} 
                           >
                              {">"} React(Nextjs)
                           </Text>
                           <Text 
                              fontSize={["10px","10px","11px","14px","14px"]}
                           >
                              {">"} Vue js
                           </Text>
                           <Text 
                              fontSize={["10px","10px","11px","14px","14px"]}
                           >
                              {">"} Node js (Express js)
                           </Text>
                           <Text 
                              fontSize={["10px","10px","11px","14px","14px"]} 
                           >
                               {">"} WordPress
                           </Text>
                           <Text 
                              fontSize={["10px","10px","11px","14px","14px"]}
                           >
                               {">"} PHP (Laravel)
                           </Text>
                       </Grid>
                </Box>
               
                
            </Box>
                  
      </Box>   
 
  )
};

export default AboutDescription;
