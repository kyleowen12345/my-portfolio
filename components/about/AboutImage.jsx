import React from 'react';
import { Image,Box } from '@chakra-ui/react'
import { motion,AnimatePresence  } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useMyRoute } from '../../lib/routeprovider';

const MotionBox = motion(Box)
const MotionImage = motion(Image)

const boxVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay:0.3, 
      duration: 0.7,
      ease: "easeInOut",
    }
  },
  hover:{
     scale: 1.2, 
     textShadow: "0px 0px 8px rgb(255,255,255)",
     boxShadow: "0px 0px 8px rgb(255,255,255)"
    }
};

const imageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay:0.4, 
      duration: 0.4,
      ease: "easeInOut",
    }
  },
};

const AboutImage = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return ( 

  <MotionBox
    width={["90%","90%","90%","90%","50%"]}
    height={["30%","30%","40%","40%","90%"]}
    mx={["auto","auto","auto","auto",0]}
    display="flex"
    justifyContent="center"
    alignItems="center"
    px={0}
    mb={[5,5,5,5,0]}
    maxWidth="1000px"
    maxHeight="1000px"
    ref={ref}
    
   
  >
            <MotionImage 
              initial={"hidden"}
              animate={inView ? "visible" : "hidden"}
              variants={imageVariants}
              src='../../about.png' 
              alt='next' 
              width={"60%"} 
              borderRadius={"20%"}
              height={"100%"}
              objectFit={["contain","contain","contain",""]} 
            />
  </MotionBox>
  )
};

export default AboutImage;
