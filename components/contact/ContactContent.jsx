import React from 'react';
import { Box,Text,Icon,Stack, Button,Link } from '@chakra-ui/react'
import { motion,AnimatePresence  } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import {AiOutlineHome,AiOutlineMail} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  ssr: false
});

const MotionBox = motion(Box)
const MotionStack = motion(Stack)
const MotionButton = motion(Button)



const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const item = {
  visible: { 
     opacity: 1,
     transition:
     {
        duration:0.5,
        ease: "easeInOut",
      
     } 
  },
  hidden: { 
     opacity: 0,
  },
  
}


const ContactContent = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

    const contactDetails=[
        {
            icon:AiOutlineHome,
            name:"Bislig City, Philippines",
            extraDetails:"Purok 2, San Roque"
        },
        {
            icon:BsTelephone,
            name:"0939  119  2839",
            extraDetails:"Everyday 9am to 6pm"
        },
        {
            icon:AiOutlineMail,
            name:"gakyleowen@gmail.com",
            extraDetails:"Send me your query anytime!"
        }
    ]

  
  return (
      <Stack
        width={["90%","90%","90%","90%","100%"]}
        mx={["auto","auto","auto","auto",0]}
        height={["97%","97%","95%","95%","90%"]}
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={["column","column","column","column","row"]}
        spacing={10}
        mt={10}
        
      >
            <Box
              width={["100%","100%","100%","100%","50%"]}
              height={["40%","40%","80%","80%","80%","80%"]}
              id="map"
              borderRadius={10}
              border="2px solid black"
              boxShadow={"0px 7px 5px 0px black"}
              zIndex={99}
            >
             <Map/>
            </Box>
            <MotionStack
               width={["100%","100%","100%","100%","40%"]}
               height={"60%"}
               spacing={10} 
               display={"flex"}
               alignItems={"start"}
               justifyContent={["start","start","start","start","center"]}
               mt={0}
               ref={ref}
               initial="hidden"
               animate={inView ? "visible":"hidden"}
               variants={list}

            >
                {
                    contactDetails.map(i=>(
                       <MotionBox 
                          key={i.name}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"left"}
                          width={"100%"}
                          variants={item}
                       >
                           <Icon 
                              as={i.icon} 
                              w={10} 
                              h={10}
                              color={"#64FED9"}
                           />
                           <Box
                              pl={5}
                              textAlign={"left"}
                           >
                                <Text
                                  fontSize={["16px","16px","18px","20px","22px"]}
                                  fontWeight={"semibold"}
                                   color="#CCD6F6"
                                >
                                  {i.name}
                                </Text>
                                <Text 
                                  fontSize={["14px","14px","15px","17px","18px"]}
                                  color="#8892B0"
                                >
                                  {i.extraDetails}
                                </Text>
                           </Box>
                          
                       </MotionBox> 
                    ))
                }
                <Link href={`mailto:gakyleowen@gmail.com`} width={"100%"} _hover={{textDecoration:"none"}} >  
                <MotionButton
                    width={["100%","100%","100%","100%","70%"]} 
                    bgColor={"#0A192F"}
                    color={"#64FED9"}
                    border="2px solid #64FED9"
                    fontWeight={"300"}
                    height="50px"
                     _hover={{bgColor:"#64FED9",color:"#0A192F"}}
                    variants={item}
                
                >SAY HELLO</MotionButton>
                 </Link>
            </MotionStack>

      </Stack>
  );
};

export default ContactContent;
