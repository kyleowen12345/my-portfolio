import React, { useEffect } from 'react'
import { Container,Text } from '@chakra-ui/react'
import { motion,AnimatePresence  } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useMyRoute } from '../../lib/routeprovider';

const MotionContainer = motion(Container)

const variants = {
    initial:{
        opacity:0
    },
    animate:{
        opacity:1,
        transition:{
           delay: 1 
        }
    }
}

const Home = () => {
     const { ref, inView, entry } = useInView({
      /* Optional options */
      threshold: 0,
    });
    const {setSection} = useMyRoute()

    useEffect(()=>{
      if(inView){
        setSection('/')
      }
    },[inView])
    return (
        <MotionContainer 
            variants={variants} 
            initial="initial" 
            animate={inView ?  "animate" : "initial"} 
            ref={ref} 
            minHeight={1000} 
            maxWidth={"80%"} 
            id='home' 
            px={0} 
            bgColor={"#F9F9FF"}
        >
            <Text>Home</Text>
            <Text></Text>
        </MotionContainer>
    )
}

export default Home
