import React, { useEffect, useState } from 'react'
import { Container, Flex, Box,Link, Image  } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { motion,AnimatePresence  } from "framer-motion"
// import { useInView } from 'react-intersection-observer';
import NextLink from 'next/link'

const MotionBox = motion(Box)
const MotionImage = motion(Image)
const MotionFlex = motion(Flex)
const MotionLink = motion(Link)

const variants = {
   initial: {y: -200},
   animate: {
      y:0,
      position:"sticky",
      top:0,
      transition:{ delay: 0.5, type:"spring"}
   },
  
}

 
 const pathVariants = {
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
         x: 0
      } 
   },
   hidden: { 
      opacity: 0,
      x: -100 
   },
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
                 display={"flex"} 
                 alignItems={'center'}  
                 justifyContent={"center"} 
                 padding={5} 
            >
                  <Container 
                       width={"60%"}
                       margin={0}
                  >
                           <NextLink href="/" >
                                 <MotionImage 
                                   variants={pathVariants} 
                                   initial="hidden" 
                                   animate={"visible" } 
                                   src='../../logo.svg' 
                                   alt='next' 
                                   width={"250px"} 
                                   height={"50px"}
                                   cursor="pointer"
                                 />
                           </NextLink>
                  </Container>

                  <MotionFlex 
                    width={"40%"} 
                    justifyContent={"space-between"} 
                    initial="hidden"
                    animate="visible"
                    variants={list}
                  >
                        <NextLink href="/">
                              <MotionLink variants={item} fontSize={"14px"} fontWeight={"700"}>Home</MotionLink> 
                        </NextLink>
                        <NextLink href="/#about">
                           <MotionLink variants={item} fontSize={"14px"} fontWeight={"700"}>About</MotionLink>
                        </NextLink> 
                        <NextLink href="/#projects"> 
                           <MotionLink variants={item} fontSize={"14px"} fontWeight={"700"}>Projects</MotionLink>
                        </NextLink>
                        <NextLink href="/#contact">
                           <MotionLink variants={item} fontSize={"14px"} fontWeight={"700"}>Contact</MotionLink>
                        </NextLink>
                  </MotionFlex>
            </MotionFlex>
         </MotionBox> 
     </AnimatePresence>
    )
}

export default Header
