import React, { useEffect, useState } from 'react'
import { Container, Flex, Box,Link, Image ,useDisclosure,Text  } from '@chakra-ui/react'
import { motion,AnimatePresence  } from "framer-motion"
import { HamburgerIcon} from '@chakra-ui/icons'
import NextLink from 'next/link'
import ReusableDrawer from './ReusableDrawer'
import { useMyRoute } from '../../lib/routeprovider'

const MotionBox = motion(Box)
const MotionText = motion(Text)
const MotionLink = motion(Link)
const MotionContainer = motion(Container)
const MotionHamburgerIcon = motion(HamburgerIcon)




 
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
               borderBottom="2px solid black"
         >
            <Flex
              width={["90%","90%","90%","90%","80%"]}
              alignItems={'center'}
              py={[2,2,2,2,3]}
            >
               <Container
                  width={"50%"}
                  display={"flex"}
                  justifyContent={"left"}
                  mx={0}
                  px={0}
               >
                        <MotionText textShadow={"2px 1px black"}  initial="hidden" animate={"visible" } variants={LogoVariants} fontSize={["30px","20px","23px","25px","30px"]} fontWeight={"bold"}>KNOW ME.</MotionText>
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
                            <MotionLink  variants={item} whileHover={{scale: 1.2,originX: 0}}  fontSize={ "15px"} fontWeight={ section == "/" || section == "/#home"  ? "bold" : "300"}>HOME</MotionLink> 
                        </NextLink>
                        <NextLink href="/#about" passHref>
                           <MotionLink  variants={item} whileHover={{scale: 1.2,originX: 0}}   fontSize={"15px"} fontWeight={section == "/#about" ? "bold" : "300"}>ABOUT</MotionLink>
                        </NextLink> 
                        <NextLink href="/#projects" passHref> 
                           <MotionLink   variants={item} whileHover={{scale: 1.2,originX: 0}} fontSize={"15px"} fontWeight={section == "/#projects" ? "bold" : "300"}>PROJECTS</MotionLink>
                        </NextLink>
                        <NextLink href="/#contact" passHref>
                           <MotionLink  variants={item} whileHover={{scale: 1.2,originX: 0}}   fontSize={"15px"}  fontWeight={section == "/#contact" ? "bold" : "300"}>CONTACT</MotionLink>
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
