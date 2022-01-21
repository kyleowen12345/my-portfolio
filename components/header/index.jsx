import React, { useEffect, useState } from 'react'
import { Container, Flex, Box,Link, Image ,useDisclosure  } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { motion,AnimatePresence  } from "framer-motion"
import { HamburgerIcon} from '@chakra-ui/icons'
import NextLink from 'next/link'
import ReusableDrawer from './ReusableDrawer'

const MotionBox = motion(Box)
const MotionImage = motion(Image)
const MotionLink = motion(Link)
const MotionContainer = motion(Container)
const MotionHamburgerIcon = motion(HamburgerIcon)




 
 const imageVariants = {
   hidden: {
     opacity: 0,
     x: -100
   },
   visible: {
     opacity: 1,
     transition: { 
       duration: 2,
       ease: "easeInOut",
       x: 0
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
         duration: 1,
         ease: "easeInOut",
       
      } 
   },
   hidden: { 
      opacity: 0,
   },
   
 }

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



const BigHeader = () => {
    const router = useRouter()
    const [showNav, setShowNav]= useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
     window.addEventListener('scroll',() => {
        if(window.scrollY > 100) {
         setShowNav(true)
        }else return setShowNav(false)
     })
  }, [showNav])
    

    return (
   <AnimatePresence exitBeforeEnter >
         <MotionBox
               boxShadow={showNav ? 'dark-lg' : 'md'}
               position="sticky"
               top={0}
               width={"100%"} 
               display={"flex"} 
               justifyContent={"center"}  
               bgColor={"white"}
               zIndex={999}
         >
            <Flex
              width={["90%","90%","90%","90%","80%"]}
              alignItems={'center'}
              py={[1,1,1,1,3]}
            >
               <Container
                  width={"50%"}
                  display={"flex"}
                  justifyContent={"left"}
                  mx={0}
                  px={0}
               >
                   
                        <MotionImage 
                           initial="hidden" 
                           animate={"visible" } 
                           variants={imageVariants}
                           whileHover="hover"
                           alt='next'
                           minWidth={"200px"} 
                           width={"250px"} 
                           height={["40px","40px","40px","40px","50px"]}
                           pl={20}
                           ml={[5,5,5,5,3]}
                           src='../../logo.svg'
                        />
               </Container>

               <MotionContainer
                  width={"50%"}
                  display={["none","none","none","none","flex"]}
                  justifyContent={"space-between"}
                  mr={0}
                  pr={0}
                  initial="hidden"
                  animate="visible"
                  variants={list}
               >
                        <NextLink href={"/#home"} passHref>
                            <MotionLink  variants={item} whileHover={{scale: 1.2,originX: 0}} fontSize={router.asPath == "/" || "/#home" ? "17px" : "14px"} fontWeight={ router.asPath == "/" || "/#home" ? "bold" : "400"}>HOME</MotionLink> 
                        </NextLink>
                        <NextLink href="/#about" passHref>
                           <MotionLink  variants={item} whileHover={{scale: 1.2,originX: 0}} _hover={{ fontSize: "17px", fontWeight:"bold"}}  fontSize={router.asPath == "/#about" ? "17px" : "14px"} fontWeight={router.asPath == "/#about" ? "bold" : "400"}>ABOUT</MotionLink>
                        </NextLink> 
                        <NextLink href="/#projects" passHref> 
                           <MotionLink  variants={item} whileHover={{scale: 1.2,originX: 0}}  _hover={{ fontSize: "17px", fontWeight:"bold"}} fontSize={router.asPath == "/#projects" ? "17px" : "14px"} fontWeight={router.asPath == "/#projects" ? "bold" : "400"}>PROJECTS</MotionLink>
                        </NextLink>
                        <NextLink href="/#contact" passHref>
                           <MotionLink  variants={item} whileHover={{scale: 1.2,originX: 0}} _hover={{ fontSize: "17px", fontWeight:"bold"}}  fontSize={router.asPath == "/#contact" ? "17px" : "14px"} fontWeight={router.asPath == "/#contact" ? "bold" : "400"}>CONTACT</MotionLink>
                        </NextLink>
               </MotionContainer>

               <Container 
                   width={"50%"}
                   display={["flex","flex","flex","flex","none"]}
                   justifyContent={"right"}
                   px={0}
                   onClick={isOpen ? onClose : onOpen}
               >
                        <MotionHamburgerIcon variants={menuVariants} initial="hidden" animate="visible" whileHover="hover" w={6} h={6}/>
               </Container>

               <ReusableDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
            </Flex>
         </MotionBox> 
     </AnimatePresence>
    )
}

export default BigHeader
