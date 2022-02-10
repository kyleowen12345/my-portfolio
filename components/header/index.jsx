import React, { useEffect, useState } from 'react'
import { Container, Flex, Box,Link, Image ,useDisclosure,Text,Icon,Button  } from '@chakra-ui/react'
import { motion,AnimatePresence  } from "framer-motion"
import { HamburgerIcon} from '@chakra-ui/icons'
import NextLink from 'next/link'
import ReusableDrawer from './ReusableDrawer'
import { useMyRoute } from '../../lib/routeprovider'
import {BiMenuAltRight} from 'react-icons/bi'



const MotionBox = motion(Box)
const MotionText = motion(Text)
const MotionLink = motion(Link)
const MotionButton = motion(Button)
const MotionIcon = motion(Icon)




 
 const LogoVariants = {
   hidden: {
     opacity: 0,
   },
   visible: {
     opacity: 1,
     transition: { 
       duration: 1,
       ease: "easeInOut",
     }
   },
   hover:{
      scale: 1.2, 
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)"
     }
 };

 const list = {
   visible: {
     opacity: 1,
     transition: {
       when: "beforeChildren",
       staggerChildren: 0.3,
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
      y: 0,
      transition:
      {
         duration: 0.4,
         ease: "easeInOut",
       
      } 
   },
   hidden: { 
    y: -200,
   },
   
 }

 const menuVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: "easeInOut",
    }
  },
  hover:{
     scale: 1.2, 
     textShadow: "0px 0px 8px rgb(255,255,255)",
     boxShadow: "0px 0px 8px rgb(255,255,255)",
    }
};



const BigHeader = () => {
    const [showNav, setShowNav]= useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {section} = useMyRoute()


  useEffect(() => {
     window.addEventListener('scroll',() => {
        if(window.scrollY > 100) {
         setShowNav(true)
        }else return setShowNav(false)
     })
  }, [showNav])

    return (
   <AnimatePresence exitBeforeEnter>
         <MotionBox
               boxShadow={showNav ? '2xl' : 'lg'}
               position="sticky"
               top={0}
               width={"100%"} 
               display={"flex"} 
               justifyContent={"center"}  
               bgColor={"#0A192F"}
               zIndex={999}
               fontFamily="Roboto Mono"
         >
            <Box
              width={["90%","90%","90%","90%","80%"]}
              maxWidth={"1600px"}
              display={"flex"}
              alignItems={'center'}
              py={[2,3,3,4,5]}
            >
               <Box
                  width={"60%"}
                  display={"flex"}
                  justifyContent={"left"}
                  mx={0}
                  px={0}
               >
                        <Image
                            src="../../my_logo.png"
                            alt="portfolio_logo"
                            height={["30px","40px","40px","50px"]}
                            objectFit="contain"
                        />
               </Box>

               <MotionBox
                  width={"40%"}
                  display={["none","none","none","none","flex"]}
                  justifyContent={"space-between"}
                  mr={0}
                  pr={0}
                  initial="hidden"
                  animate="visible"
                  variants={list}
                  color={"#CCD6F6" }
                  fontSize={ "13px"} 
                  alignItems="center"
                  minWidth="520px"
               >
                        <NextLink href={"/#home"} passHref>
                            <MotionLink  
                              variants={item}
                              whileHover={{color:"#64FED9"}}   
                              fontWeight={ "bold"}
                            >
                              HOME
                            </MotionLink> 
                        </NextLink>

                        <NextLink href="/#about" passHref>
                           <MotionLink  
                             variants={item} 
                             whileHover={{color:"#64FED9"}}    
                             fontWeight={"bold"}
                           >
                             ABOUT
                           </MotionLink>
                        </NextLink> 

                        <NextLink href="/#projects" passHref> 
                           <MotionLink   
                             variants={item} 
                             whileHover={{color:"#64FED9"}}  
                             fontWeight={"bold"}
                           >
                             PROJECTS
                           </MotionLink>
                        </NextLink>

                        <NextLink href="/#contact" passHref>
                           <MotionLink 
                            variants={item}   
                            whileHover={{color:"#64FED9"}}    
                            fontWeight={"bold"}
                            >
                              CONTACT
                            </MotionLink>
                        </NextLink>
                        <Link
                            href='../../Images.pdf'
                            download={"Resume pdf"}
                            style={{ textDecoration: 'none' }}
                        >
                            <MotionButton
                              bgColor={"#0A192F"}
                              color={"#64FED9"}
                              border="2px solid #64FED9"
                              fontWeight={"300"}
                              variants={item}
                              _hover={{bgColor:"#64FED9",color:"#0A192F"}}
                            >
                              GET CV
                            </MotionButton>
                        </Link>

               </MotionBox>

               <MotionBox 
                   width={"50%"}
                   display={["flex","flex","flex","flex","none"]}
                   justifyContent={"right"}
                   px={0}
                   onClick={isOpen ? onClose : onOpen}
                   variants={menuVariants} 
                   initial="hidden" 
                   animate="visible" 
                   whileHover="hover" 
               >
                        <Icon
                          color={"#64FED9"}
                          as={BiMenuAltRight}
                          w={10} 
                          h={10}
                        />
               </MotionBox>

               <ReusableDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
            </Box>
         </MotionBox> 
     </AnimatePresence>
    )
}

export default BigHeader
