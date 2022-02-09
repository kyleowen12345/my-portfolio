import React from 'react';
import { Image,Box,Text,Grid,Button  } from '@chakra-ui/react'
import { motion,AnimatePresence  } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box)
const MotionText = motion(Text)



const firstContainer={
   hidden:{scale:0},
   visible:{
      scale:1,
    transition: {
      delay:0.1, 
      duration: 0.4,
      ease: "easeInOut",
    }
   }
}

const secondContainer={
   hidden:{scale:0},
   visible:{
      scale:1,
   transition: {
     delay:0.6, 
     duration: 0.4,
     ease: "easeInOut",
   }
  }
}

const thirdContainer={
   hidden:{scale:0},
   visible:{
      scale:1,
   transition: {
     delay:1, 
     duration: 0.4,
     ease: "easeInOut",
   }
  }
}
const fourthContainer={
   hidden:{scale:0},
   visible:{
      scale:1,
   transition: {
     delay:1.4, 
     duration: 0.4,
     ease: "easeInOut",
   }
  }
}

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
            <MotionBox
                width={"100%"}
                maxWidth={"800px"}
                height="100%"
                display="flex"
                flexDirection="column"
               //  bgColor={"white"}
                justifyContent={"center"}
                ref={ref}
            >
                <MotionBox
                  
                >
                       <MotionText  
                        //   textShadow={"1px 1px black"} 
                          fontSize={["14px","14px","14px","16px","18px"]} 
                          fontWeight={"bold"}
                          initial={{opacity:1}}
                          animate={{opacity:1}}
                        //   bgGradient={'linear(315deg,  #4958DE 0%, #7F4FEC 74%)' }
                        //   bgClip='text'
                        initial={"hidden"}
                        animate={inView ? "visible":"hidden"}
                        variants={firstContainer}
                        color={"#64FED9"}
                          >
                             ABOUT ME
                       </MotionText>
                       <MotionText 
                        //   textShadow={"1px 2px black"}
                          fontSize={["23px","23px","25px","27px","30px"]} 
                          fontWeight={"bold"}
                          initial={"hidden"}
                          animate={inView ? "visible":"hidden"}
                          variants={secondContainer}
                        //   bgGradient={'linear(315deg,  #4958DE 0%, #7F4FEC 74%)' }
                        //   bgClip='text'
                        color="#CCD6F6"
                          >
                             PERSONAL DETAILS
                       </MotionText>
                </MotionBox>
                <MotionBox 
                  initial={"hidden"}
                  animate={inView ? "visible":"hidden"}
                  variants={thirdContainer}
                  my={5}
                  color="#CCD6F6"
                >
                       <Text  
                          lineHeight={["8","8","8","10"]}
                          fontSize={["15px","15px","15px","16px","16px","18px"]}
                       >
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro dolores eum tempora amet optio iste error eaque! Eum, libero, eos ipsum laudantium beatae sed soluta facilis, harum natus eaque provident!
                       </Text>
                       <Text 
                           lineHeight={["8","8","8","10"]}
                           fontSize={["15px","15px","15px","16px","16px","18px"]}
                       >
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime provident perferendis a excepturi, atque repellendus ipsum suscipit eligendi minima rerum voluptas voluptates adipisci explicabo tempora numquam soluta modi dignissimos sit!
                       </Text>
                </MotionBox>
                <MotionBox 
                  initial={"hidden"}
                  animate={inView ? "visible":"hidden"}
                  variants={fourthContainer}
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
                </MotionBox>
               
                {/* <MotionBox
                  initial={"hidden"}
                  animate={inView ? "visible":"hidden"}
                  variants={fourthContainer}
                >
                <Button  
                     // textShadow={"1px 1px gray"} 
                     // boxShadow={"0px 7px 5px 0px #2C2C2C"}   
                     width={["100%","100%","100%","100%"]} 
                     fontSize={["0.8rem","0.8rem","1rem"]} 
                     bgColor={"#0A192F"}
                     color={"#64FED9"}
                     border="2px solid #64FED9"
                     height="50px" 
                     fontSize={["0.8rem","0.8rem","1rem"]} 
                     _hover={{bgColor:"#64FED9",color:"#0A192F"}}
                     
                >
                        VIEW FULL DETAILS
                </Button>
                </MotionBox> */}
            </MotionBox>
                  
      </Box>   
 
  )
};

export default AboutDescription;
