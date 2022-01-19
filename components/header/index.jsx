import React, { useEffect, useState } from 'react'
import { Container, Flex, Box,Link, Image,Text  } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { motion,AnimatePresence  } from "framer-motion"
// import { useInView } from 'react-intersection-observer';
import NextLink from 'next/link'

const MotionBox = motion(Box)
const MotionImage = motion(Image)
const MotionFlex = motion(Flex)
const MotionLink = motion(Link)
const MotionContainer = motion(Container)

const variants = {
   initial: {y: -200},
   animate: {
      y:0,
      position:"sticky",
      top:0,
      transition:{ delay: 0.2, type:"spring"}
   },
  
}

 
 const imageVariants = {
   hidden: {
     opacity: 0,
     x: -100
   },
   visible: {
     opacity: 1,
     transition: { 
       duration: 3,
       ease: "easeInOut",
       x: 0
     }
   },
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
  //  whileHover:{
  //   scale: 1.5, 
  //   textShadow: "0px 0px 8px rgb(255,255,255)",
  //   boxShadow: "0px 0px 8px rgb(255,255,255)"
  //  }
 }


const Header = () => {
    const router = useRouter()
    const [showNav, setShowNav]= useState(false)
   //  const { ref, inView, entry } = useInView({
   //    /* Optional options */
   //    threshold: 0,
   //  });

  

  useEffect(() => {
     window.addEventListener('scroll',() => {
        if(window.scrollY > 100) {
         setShowNav(true)
        }else return setShowNav(false)
     })
  }, [])
    
//   console.log(router)
    return (
   <AnimatePresence>
         <MotionBox
               variants={variants}
               initial="initial"
               animate={"animate" }
               boxShadow={showNav ? 'dark-lg' : 'md'}
               width={"100%"} 
               display={"flex"} 
               justifyContent={"center"}  
               bgColor={"white"}
         >
            <MotionFlex
              width={"80%"}
              alignItems={'center'}
              py={5}
            >
               <MotionContainer
                  width={"50%"}
                  display={"flex"}
                  justifyContent={"left"}
                  mx={0}
                  px={0}
               >
                  <MotionImage 
                    variants={imageVariants} 
                    initial="hidden" 
                    animate={"visible" } 
                    src='../../logo.svg' 
                    alt='next' 
                    width={"250px"} 
                    height={"50px"}
                    pl={20}
                    cursor="pointer"
                  />
               </MotionContainer>

               <MotionContainer
                  width={"50%"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  mr={0}
                  pr={0}
                  initial="hidden"
                  animate="visible"
                  variants={list}
               >
                        <NextLink href="/" onClick={()=>{console.log('Clicked HOME with nextlink')}}>
                            <MotionLink onClick={()=>{console.log('Clicked HOME')}}  variants={item}  fontSize={router.asPath == "/" ? "17px" : "15px"} fontWeight={ router.asPath == "/" ? "bold" : "400"}>Home</MotionLink> 
                        </NextLink>
                        <NextLink href="/#about">
                           <MotionLink onClick={()=>{console.log('Clicked about')}}  variants={item}  fontSize={router.asPath == "/#about" ? "17px" : "15px"} fontWeight={router.asPath == "/#about" ? "bold" : "400"}>About</MotionLink>
                        </NextLink> 
                        <NextLink href="/#projects"> 
                           <MotionLink onClick={()=>{console.log('Clicked projects')}}  variants={item}  fontSize={router.asPath == "/#projects" ? "17px" : "15px"} fontWeight={router.asPath == "/#projects" ? "bold" : "400"}>Projects</MotionLink>
                        </NextLink>
                        <NextLink href="/#contact">
                           <MotionLink onClick={()=>{console.log('Clicked contact')}}  variants={item}  fontSize={router.asPath == "/#contact" ? "17px" : "15px"} fontWeight={router.asPath == "/#contact" ? "bold" : "400"}>Contact</MotionLink>
                        </NextLink>
               </MotionContainer>
            </MotionFlex>
         </MotionBox> 
     </AnimatePresence>
    )
}

export default Header
