import React from 'react';
import { Box,Image,Text,Icon,Stack,Grid,Link } from '@chakra-ui/react'
import { motion  } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import NextLink from 'next/link'
import {FiExternalLink} from 'react-icons/fi'
import {AiOutlineGithub} from 'react-icons/ai'

const MotionBox = motion(Box)
const MotionStack = motion(Stack)
const MotionText = motion(Text)
const MotionGrid = motion(Grid)

const firstContainer={
    hidden:{opacity:0},
    visible:{
     opacity: 1,
     transition: {
       delay:1, 
       duration: 1,
       ease: "easeInOut",
     }
    }
 }
 
 const secondContainer={
   hidden:{opacity:0},
   visible:{
    opacity: 1,
    transition: {
      delay:1.5, 
      duration: 1,
      ease: "easeInOut",
    }
   }
 }
 
 const thirdContainer={
   hidden:{opacity:0},
   visible:{
    opacity: 1,
    transition: {
      delay:2, 
      duration: 1,
      ease: "easeInOut",
    }
   }
 }
 const fourthContainer={
   hidden:{opacity:0},
   visible:{
    opacity: 1,
    transition: {
      delay:2.5, 
      duration: 1,
      ease: "easeInOut",
    }
   }
 }

 const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 1,
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
          duration: 1.5,
          ease: "easeInOut",
        
       } 
    },
    hidden: { 
       opacity: 0,
    },
    
  }

const ProjectBoxes = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
  const projects = [
      {
          image:"../../home.png",
          projectName:"Blacked Market",
          projectDescription:"It’s an e-commerce site where a buyer can also be a seller. It also shows statistical data on how much you are selling and which stores are more followed. The statistical chart on the dashboard also helps sellers on what product to restock or to get rid of.",
          projectTools:["React","Express","Graphql","Heroku","MongoDB"],
          externalLink:"https://blackedmarket.vercel.app/",
          repositoryLink:"https://github.com/kyleowen12345/blackedmarket"

      },
      {
        image:"../../home.png",
        projectName:"Blacked Market(2)",
        projectDescription:"It’s an e-commerce site where a buyer can also be a seller. It also shows statistical data on how much you are selling and which stores are more followed. The statistical chart on the dashboard also helps sellers on what product to restock or to get rid of.",
        projectTools:["React","Express","Graphql","Heroku","MongoDB"],
        externalLink:"https://blackedmarket.vercel.app/",
        repositoryLink:"https://github.com/kyleowen12345/blackedmarket"

    }
  ]
    
  return (
    <MotionStack
       width={["90%","90%","90%","90%","100%"]}
       mx={["auto","auto","auto","auto",0]}
       height={["97%","97%","95%","95%","90%"]}
       spacing={10}
       ref={ref}
       initial="hidden"
       animate={inView ? "visible":"hidden"}
       variants={list}
    >
      {
         projects.map(i=>(
            //  1
             <MotionStack 
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
                variants={item}
             >
                        {/* 2 */}
                        <MotionBox
                            width={["90%","90%","90%","40%","40%"]}
                            height={["60%","60%","60%","90%","90%"]}
                            border="2px solid #64FED9"
                            borderRadius={10}
                            initial="hidden"
                            animate={inView ? "visible":"hidden"}
                            variants={firstContainer}
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
                        </MotionBox>
                        {/* 2 */}
                        <MotionStack
                            width={["90%","90%","90%","55%"]}
                            height={["80%","80%","80%","90%","90%"]}
                            border="2px solid #64FED9"
                            borderRadius={10}
                            boxShadow={"1px 7px 3px 0px black"}
                            p={5}
                            spacing={[5,5,5,5,3,10]}
                            justifyContent={"center"}
                            initial="hidden"
                            animate={inView ? "visible":"hidden"}
                            variants={firstContainer}
                        >
                            {/* 3 */}
                            <MotionBox
                                initial="hidden"
                                animate={inView ? "visible":"hidden"}
                                variants={secondContainer}
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
                                        // fontWeight="semibold"
                                        color={"#64FED9"}
                                    >
                                        {i.projectName}
                                    </Text>
                            </MotionBox>
                            {/* 4 */}
                            <MotionText
                             fontSize={["14px","15px","16px","17px","18px","20px"]}
                             initial="hidden"
                             animate={inView ? "visible":"hidden"}
                             variants={thirdContainer}
                             color="#CCD6F6"
                             >
                               
                                {i.projectDescription}
                            </MotionText>
                            {/* 5 */}
                            <MotionGrid
                               templateColumns={['repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)','repeat(4, 1fr)','repeat(5, 1fr)','repeat(5, 1fr)']}
                               height={"20%"}
                               initial="hidden"
                               animate={inView ? "visible":"hidden"}
                               variants={fourthContainer}
                               color="#8892B0"
                            >
                                {i.projectTools.map(e=>(
                                    <Text  fontSize={["12px","12px","14px","16px"]} fontWeight={"bold"} key={e}>
                                        {e}
                                    </Text>
                                ))}
                            </MotionGrid>
                        </MotionStack>
                    </MotionStack>   
                ))
            }      
    </MotionStack>
  );
};

export default ProjectBoxes;
