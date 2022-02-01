import React from 'react';
import { Image,Box,Text,Grid,Button  } from '@chakra-ui/react'
import { motion,AnimatePresence  } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box)
const MotionText = motion(Text)



const firstContainer={
   hidden:{opacity:0},
   visible:{
    opacity: 1,
    transition: {
      delay:0.5, 
      duration: 0.7,
      ease: "easeInOut",
    }
   }
}

const secondContainer={
  hidden:{opacity:0},
  visible:{
   opacity: 1,
   transition: {
     delay:0.8, 
     duration: 0.7,
     ease: "easeInOut",
   }
  }
}

const thirdContainer={
  hidden:{opacity:0},
  visible:{
   opacity: 1,
   transition: {
     delay:1.1, 
     duration: 0.7,
     ease: "easeInOut",
   }
  }
}
const fourthContainer={
  hidden:{opacity:0},
  visible:{
   opacity: 1,
   transition: {
     delay:1.4, 
     duration: 0.7,
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
                bgColor={"white"}
                justifyContent={"center"}
                ref={ref}
            >
                <MotionBox
                  
                >
                       <MotionText  
                          textShadow={"1px 1px black"} 
                          fontSize={["14px","14px","14px","16px","18px"]} 
                          fontWeight={"normal"}
                          initial={{opacity:1}}
                          animate={{opacity:1}}
                          >
                             ABOUT ME
                       </MotionText>
                       <MotionText 
                          textShadow={"1px 2px black"}
                          fontSize={["23px","23px","25px","27px","30px"]} 
                          fontWeight={"semibold"}
                          initial={"hidden"}
                          animate={inView ? "visible":"hidden"}
                          variants={firstContainer}
                          >
                             PERSONAL DETAILS
                       </MotionText>
                </MotionBox>
                <MotionBox 
                  initial={"hidden"}
                  animate={inView ? "visible":"hidden"}
                  variants={secondContainer}
                  my={5}
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
                  variants={thirdContainer}
                  mb={[5,5,5,5,10]}
                >
                       <Text 
                          mb={5}  
                          fontSize={["15px","15px","15px","16px","16px","18px"]}
                          lineHeight={["8","8","8","10"]}
                       >
                          Here are a few technologies I’ve been working with recently:
                       </Text>
                       <Grid 
                          templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)']} 
                          gap={3}
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
               
                <MotionBox
                  initial={"hidden"}
                  animate={inView ? "visible":"hidden"}
                  variants={fourthContainer}
                >
                <Button  
                     textShadow={"1px 1px gray"} 
                     boxShadow={"0px 7px 5px 0px #2C2C2C"}   
                     width={["100%","100%","100%","100%"]} 
                     fontSize={["0.8rem","0.8rem","1rem"]} 
                     bgColor={"white"} color={"black"} 
                     border={"2px solid black"} 
                     _hover={{bgColor:"black", color:"white"}}
                >
                        VIEW FULL DETAILS
                </Button>
                </MotionBox>
            </MotionBox>
                  
      </Box>   
 
  )
};

export default AboutDescription;
