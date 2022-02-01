import React from 'react';
import { Image,Box,Text,Grid,Button,Stack,Icon  } from '@chakra-ui/react'
import { motion,AnimatePresence  } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import {BsWordpress} from 'react-icons/bs'
import {AiOutlineApi} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'
import {MdOutlineDesignServices} from 'react-icons/md'

const MotionBox = motion(Box)
const MotionGrid = motion(Grid)
const MotionStack = motion(Stack)

const servicesVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { 
        delay:0.5,
        duration: 1,
        ease: "easeInOut",
      }
    }
  };

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
          duration: 1,
          ease: "easeInOut",
        
       } 
    },
    hidden: { 
       opacity: 0,
    },
    
  }

const Services = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
      });

     const services = [
       {
         serviceImage:MdOutlineDesignServices,
         serviceName:"UI/UX Design",
         serviceDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore accusantium ipsum accusamus unde aspernatur dolor, blanditiis ducimus sapiente laborum commodi tempora aut asperiores maiores consequuntur voluptate reiciendis sit quas?"
       },
       {
        serviceImage:CgWebsite,
        serviceName:"Web Development",
        serviceDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore accusantium ipsum accusamus unde aspernatur dolor, blanditiis ducimus sapiente laborum commodi tempora aut asperiores maiores consequuntur voluptate reiciendis sit quas?"
      },
      {
        serviceImage:AiOutlineApi,
        serviceName:"API Development",
        serviceDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore accusantium ipsum accusamus unde aspernatur dolor, blanditiis ducimus sapiente laborum commodi tempora aut asperiores maiores consequuntur voluptate reiciendis sit quas?"
      },
      {
        serviceImage:BsWordpress,
        serviceName:"WordPress",
        serviceDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore accusantium ipsum accusamus unde aspernatur dolor, blanditiis ducimus sapiente laborum commodi tempora aut asperiores maiores consequuntur voluptate reiciendis sit quas?"
      }

     ] 
  return (
      <Box
        width={["90%","90%","90%","90%","100%"]}
        height={["60%","60%","50%"]}
        display={"flex"}
        flexDirection={"column"} 
        alignItems={"center"}
        ref={ref}
        mx={"auto"}
      >    
         <MotionBox 
           mb={10} 
           display={"flex"} 
           flexDirection={"column"} 
           alignItems={"center"}
          //  px={5}
           initial="hidden"
           animate={inView ? "visible" : "hidden"}
           variants={servicesVariants}
           
         >
           <Text  
               fontSize={["16px","16px","18px","18px","20px" ]} 
               fontWeight={"semibold"} 
               textShadow={"1px 2px gray"}
           >
               MY OFFERED SERVICES
           </Text>
           <Text 
               fontSize={["11px","11px","13px","13px","14px"] } 
               textAlign={"center"}
           >
               At about this time of year, some months after New Year’s resolutions have been made and kept, or made and neglected.
           </Text>
         </MotionBox>
         <MotionGrid 
             width={"100%"} 
             templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']} 
             gap={[5,5,5,5,10]} 
             height={["100%","100%","100%","60%"]}
             initial="hidden"
             animate={inView ? "visible" : "hidden"}
             variants={list}
         >                
                      {services.map(i=>(
                         <MotionStack 
                               spacing={[3,3,4,6,8]} 
                               p={[3,3,3,5]} 
                               boxShadow={"0px 10px 5px 0px #2C2C2C"} 
                               borderRadius={10} 
                               width={"100%"} 
                               height={"100%"} 
                               border="4px solid black" 
                               display={"flex"} 
                               flexDirection={"column"} 
                               alignItems={"center"}  
                               textAlign={"center"}
                               justifyContent={"center"}
                               variants={item}
                               key={i.serviceName}
                           >
                               <Icon
                               as={i.serviceImage}
                               h={10}
                               w={10}
                               />
                               <Text 
                                  textShadow={"1px 2px gray"} 
                                  fontSize={["16px","16px","18px","20px","22px"]} 
                                  fontWeight={"semibold"}
                               >
                                   {i.serviceName}
                               </Text>
                               <Text 
                                    lineHeight={["8","8","8","8","10"]} 
                                    fontSize={["14px","14px","15px","16px","18px"]}
                               >
                                   {i.serviceDescription}
                               </Text>
                           </MotionStack>
                      ))}
         </MotionGrid>
      </Box>
  );
};

export default Services;



// MAKE A SEPARATOR FOR EVEERY SECTION
