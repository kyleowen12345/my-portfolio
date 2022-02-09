import React from 'react'
import {
    Flex,
    Link,
    Drawer, 
    DrawerOverlay,
    DrawerHeader, 
    DrawerBody, 
    DrawerContent,
    Image,
    Text,
    Button
  } from '@chakra-ui/react'
  import NextLink from 'next/link'
  import { useRouter } from 'next/router'
  import { motion  } from "framer-motion"
  import { CloseIcon, } from '@chakra-ui/icons'
import { useMyRoute } from '../../lib/routeprovider'
  

const MotionButton = motion(Button)
const MotionCloseIcon = motion(CloseIcon)
const MotionLink = motion(Link)
const MotionBody = motion(DrawerBody)
const MotionImage=motion(Image)

const LogoVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { 
      duration: 2,
      ease: "easeInOut",
    }
  },
  hover:{
     scale: 1.2, 
     textShadow: "0px 0px 8px rgb(255,255,255)",
     boxShadow: "0px 0px 8px rgb(255,255,255)"
    }
};

const menuVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { 
      duration: 2,
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
     y:-700,
  },
  
}


const ReusableDrawer = ({onClose,isOpen}) => {
  const {section} = useMyRoute()
  return (
    <Drawer 
      onClose={onClose} 
      isOpen={isOpen} 
      placement="right"
      zIndex={9999}
      
    >
        <DrawerOverlay />
        <DrawerContent
        bgColor={"#0A192F"}
        >
          <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          
          >
              <DrawerHeader  px={5}>
                    <MotionImage
                     initial="hidden" 
                     animate={"visible" } 
                     variants={LogoVariants}  
                     minWidth={"50px"}  
                     src="../../my_logo.png"
                     alt="portfolio_logo"
                     height={["30px","40px","40px","50px"]}
                     objectFit="contain"
                     />
              </DrawerHeader>
              <MotionCloseIcon  
                 color={"#64FED9"} 
                 variants={menuVariants} 
                 initial="hidden" 
                 animate="visible" 
                 onClick={onClose} 
                 cursor="pointer"
                 mx={5}
               />
          </Flex>
          
          <MotionBody 
            display="flex"
            flexDirection="column"
            initial="hidden"
            animate="visible"
            variants={list}
            color={"#CCD6F6" }
            fontSize={ "13px"} 
            alignItems="center"
          >
                        <NextLink href={"/"} passHref>
                            <MotionLink 
                               onClick={onClose} 
                               my={5}   
                               variants={item} 
                               fontWeight={ section == "/" || section == "/#home" ? "bold" : "400"}
                               >
                                 HOME
                            </MotionLink> 
                        </NextLink>

                        <NextLink href="/#about" passHref>
                           <MotionLink 
                              onClick={onClose} 
                              my={5} 
                              variants={item} 
                           >
                             ABOUT
                           </MotionLink>
                        </NextLink>

                        <NextLink href="/#projects" passHref> 
                           <MotionLink 
                              onClick={onClose}
                              my={5} 
                              variants={item} 
                           >
                             PROJECTS
                           </MotionLink>
                        </NextLink>

                        <NextLink href="/#contact" passHref>
                           <MotionLink 
                              onClick={onClose} 
                              my={5}  
                              variants={item}
                           >
                             CONTACT
                           </MotionLink>
                        </NextLink>

                        <MotionButton
                          bgColor={"#0A192F"}
                          color={"#64FED9"}
                          border="2px solid #64FED9"
                          fontWeight={"300"}
                          width="40%"
                          my={5}
                          fontSize="13px"
                          variants={item}
                        >
                          GET CV
                        </MotionButton>
          </MotionBody>
        </DrawerContent>
    </Drawer>
  ) ;
};

export default ReusableDrawer;
