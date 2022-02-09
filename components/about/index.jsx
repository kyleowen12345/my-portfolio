import React, { useEffect } from 'react'
import { Container,Text,Box } from '@chakra-ui/react'
import { motion,AnimatePresence  } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useMyRoute } from '../../lib/routeprovider';
import AboutImage from './AboutImage';
import AboutDescription from './AboutDescription';
import Services from './Services';

const About = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
      });
      const {setSection} = useMyRoute()
  
      useEffect(()=>{
        if(inView){
          setSection('/#about')
        }
      },[inView])
    return (
      <Box
         height={[3200,3200,2800,2500,2400]}
         width={"100%"}
      >
        <Box 
            height={[3000,3000,2600,2200,2200]}
            width={["100%","100%","100%","100%","80%"]}
            mx="auto"
            ref={ref}
            id="about"
            maxWidth={"1600px"}
        >   
                <Box 
                  width={"100%"}
                  height={["40%","40%","50%"]}
                  display={"flex"}
                  alignItems={"center"}
                  flexDirection={["column","column","column","column","row"]}
                  justifyContent={['space-between']}
                  mx="auto"
                 
                >
                    <AboutDescription />
                    <AboutImage />
                    
                </Box>
                <Box width={["100%"]} display={["block","block","block","block","none"]} height={100}></Box>
                <Services/>  
        </Box>
      </Box>
       
    )
}

export default About