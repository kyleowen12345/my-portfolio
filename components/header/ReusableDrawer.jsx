import React from 'react'
import {
    Flex,
    Link,
    Drawer, 
    DrawerOverlay,
    DrawerHeader, 
    DrawerBody, 
    DrawerContent,
    Image
  } from '@chakra-ui/react'
  import NextLink from 'next/link'
  import { useRouter } from 'next/router'
  import { motion  } from "framer-motion"
  import { CloseIcon, } from '@chakra-ui/icons'
import { useMyRoute } from '../../lib/routeprovider'
  

const MotionImage = motion(Image)
const MotionCloseIcon = motion(CloseIcon)
const MotionLink = motion(Link)
const MotionBody = motion(DrawerBody)

const imageVariants = {
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
        duration: 0.6,
        ease: "easeInOut",
      
     } 
  },
  hidden: { 
     opacity: 0,
  },
  
}


const ReusableDrawer = ({onClose,isOpen}) => {
  const router = useRouter()
  const {section} = useMyRoute()
  return (
    <Drawer 
      onClose={onClose} 
      isOpen={isOpen} 
      placement="right"
      zIndex={9999}
    >
        <DrawerOverlay />
        <DrawerContent>
          <Flex
          alignItems={"center"}
          borderBottomWidth='1px'
          justifyContent={"space-around"}
          width={"100%"}
          >
              <DrawerHeader  px={0}>
                  <MotionImage 
                    initial="hidden" 
                    animate={"visible" } 
                    variants={imageVariants}
                    whileHover="hover"
                    alt='next' 
                    minWidth={"220px"}
                    height={"45px"}
                    pr={20}
                    src='../../logo.svg'
                  />
              </DrawerHeader>
              <MotionCloseIcon variants={menuVariants} initial="hidden" animate="visible" whileHover="hover" onClick={onClose} cursor="pointer"/>
          </Flex>
          
          <MotionBody 
            display="flex"
            flexDirection="column"
            initial="hidden"
            animate="visible"
            variants={list}
            pl={10}
          >
                        <NextLink href={"/"} passHref>
                            <MotionLink onClick={onClose} my={5}   variants={item} whileHover={{scale: 1.2, originX:0}} _hover={{ fontSize: "17px", fontWeight:"bold"}} fontSize={section == "/" || section == "/#home" ? "16px" : "13px"} fontWeight={ section == "/" || section == "/#home" ? "bold" : "400"}>HOME</MotionLink> 
                        </NextLink>
                        <NextLink href="/#about" passHref>
                           <MotionLink onClick={onClose} my={5} variants={item} whileHover={{scale: 1.2,originX:0}} _hover={{ fontSize: "17px", fontWeight:"bold"}}  fontSize={section == "/#about" ? "16px" : "13px"} fontWeight={section == "/#about" ? "bold" : "400"}>ABOUT</MotionLink>
                        </NextLink> 
                        <NextLink href="/#projects" passHref> 
                           <MotionLink onClick={onClose} my={5} variants={item} whileHover={{scale: 1.2,originX:0}}  _hover={{ fontSize: "17px", fontWeight:"bold"}} fontSize={section == "/#projects" ? "16px" : "13px"} fontWeight={section == "/#projects" ? "bold" : "400"}>PROJECTS</MotionLink>
                        </NextLink>
                        <NextLink href="/#contact" passHref>
                           <MotionLink onClick={onClose} my={5}  variants={item} whileHover={{scale: 1.2,originX:0}} _hover={{ fontSize: "17px", fontWeight:"bold"}}  fontSize={section == "/#contact" ? "16px" : "13px"} fontWeight={ section == "/#contact" ? "bold" : "400"}>CONTACT</MotionLink>
                        </NextLink>
          </MotionBody>
        </DrawerContent>
    </Drawer>
  ) ;
};

export default ReusableDrawer;
