import React from 'react';
import { Image,Box,Text,Grid,Button,Stack  } from '@chakra-ui/react'
import { motion,AnimatePresence  } from "framer-motion"
import { useInView } from 'react-intersection-observer';

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
          delay:1,
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
      // console.log(inView)
  return (
      <Box
        width={"100%"}
        height={[1000]}
        display={"flex"}
        flexDirection={"column"} 
        alignItems={"center"}
        ref={ref}
      >    
         <MotionBox 
           mb={10} 
           display={"flex"} 
           flexDirection={"column"} 
           alignItems={"center"}
           px={5}
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
             width={"90%"} 
             templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']} 
             gap={[5,5,5,5,10]} 
             height={["100%","100%","100%","60%"]}
             initial="hidden"
             animate={inView ? "visible" : "hidden"}
             variants={list}
         >
                           <MotionStack 
                               spacing={[3,3,4,6,8]} 
                               p={[3,3,3,5]} 
                               boxShadow={"0px 10px 5px 0px #2C2C2C"} 
                               borderRadius={10} 
                               width={"100%"} 
                               height={"100%"} 
                               border="2px solid black" 
                               display={"flex"} 
                               flexDirection={"column"} 
                               alignItems={"center"}  
                               textAlign={"center"}
                               justifyContent={"center"}
                               variants={item}
                           >
                               <Image 
                                 src="../../about.png" 
                                 height={["40px","40px","40px","60px"]} 
                                 width={["40px","40px","40px","60px"]}
                               />
                               <Text 
                                  textShadow={"1px 2px gray"} 
                                  fontSize={["16px","16px","18px","20px","22px"]} 
                                  fontWeight={"semibold"}
                               >
                                   UI/UX Design
                               </Text>
                               <Text 
                                    lineHeight={["1rem","1rem","1.2rem","1.4rem","1.6rem"]} 
                                    fontSize={["13px","13px","14px","15px","16px"]}
                               >
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore accusantium ipsum accusamus unde aspernatur dolor, blanditiis ducimus sapiente laborum commodi tempora aut asperiores maiores consequuntur voluptate reiciendis sit quas?
                               </Text>
                           </MotionStack>
                           <MotionStack 
                                spacing={[3,3,4,6,8]} 
                                p={[3,3,3,5]}  
                                boxShadow={"0px 10px 5px 0px #2C2C2C"} 
                                borderRadius={10} 
                                width={"100%"} 
                                height={"100%"} 
                                border="2px solid black" 
                                display={"flex"} 
                                flexDirection={"column"} 
                                alignItems={"center"}  
                                textAlign={"center"}
                                justifyContent={"center"}
                                variants={item}
                           >
                               <Image 
                                    src="../../about.png" 
                                    height={["40px","40px","40px","60px"]} 
                                    width={["40px","40px","40px","60px"]}
                               />
                               <Text 
                                   textShadow={"1px 2px gray"} 
                                   fontSize={["16px","16px","18px","20px","22px"]} 
                                   fontWeight={"semibold"}
                               >
                                       Web Development
                               </Text>
                               <Text 
                                   lineHeight={["1rem","1rem","1.2rem","1.4rem","1.6rem"]} 
                                   fontSize={["13px","13px","14px","15px","16px"]}
                               >
                                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, perspiciatis sit. Illo nisi, illum recusandae quae ullam tempore delectus dolores cum quam amet eius maiores culpa adipisci enim molestiae et.
                               </Text>
                           </MotionStack>
                           <MotionStack 
                                spacing={[3,3,4,6,8]} 
                                p={[3,3,3,5]}  
                                boxShadow={"0px 10px 5px 0px #2C2C2C"} 
                                borderRadius={10} 
                                width={"100%"} 
                                height={"100%"} 
                                border="2px solid black" 
                                display={"flex"} 
                                flexDirection={"column"} 
                                alignItems={"center"}  
                                textAlign={"center"}
                                justifyContent={"center"}
                                variants={item}
                           >
                               <Image 
                                    src="../../about.png" 
                                    height={["40px","40px","40px","60px"]} 
                                    width={["40px","40px","40px","60px"]}
                               />
                               <Text 
                                    textShadow={"1px 2px gray"} 
                                    fontSize={["16px","16px","18px","20px","22px"]} 
                                    fontWeight={"semibold"}
                               >
                                   API Development
                               </Text>
                               <Text 
                                    lineHeight={["1rem","1rem","1.2rem","1.4rem","1.6rem"]} 
                                    fontSize={["13px","13px","14px","15px","16px"]}
                               >
                                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ipsam voluptate illum commodi minus quo aliquid nisi aliquam alias, optio adipisci saepe quos, corporis, harum nesciunt temporibus veniam nostrum quaerat!
                               </Text>
                           </MotionStack>
                           <MotionStack 
                                spacing={[3,3,4,6,8]} 
                                p={[3,3,3,5]}  
                                boxShadow={"0px 10px 5px 0px #2C2C2C"} 
                                borderRadius={10} 
                                width={"100%"} 
                                height={"100%"} 
                                border="2px solid black" 
                                display={"flex"} 
                                flexDirection={"column"} 
                                alignItems={"center"}  
                                textAlign={"center"}
                                justifyContent={"center"}
                                variants={item}
                           >
                           <Image 
                                    src="../../about.png" 
                                    height={["40px","40px","40px","60px"]} 
                                    width={["40px","40px","40px","60px"]}
                               />
                               <Text 
                                  textShadow={"1px 2px gray"} 
                                  fontSize={["16px","16px","18px","20px","22px"]} 
                                  fontWeight={"semibold"}
                               >
                                   WordPress
                               </Text>
                               <Text 
                                   lineHeight={["1rem","1rem","1.2rem","1.4rem","1.6rem"]} 
                                   fontSize={["13px","13px","14px","15px","16px"]}
                               >
                                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, doloribus quia. Sapiente rem at voluptatem eaque fugiat molestiae aperiam culpa doloribus laborum repellendus ex sunt, facilis, a iusto nesciunt corrupti.
                                </Text>
                           </MotionStack>
         </MotionGrid>
      </Box>
  );
};

export default Services;



// MAKE A SEPARATOR FOR EVEERY SECTION
