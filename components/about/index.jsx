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
            // height={[1500,1500,1500,1600]}
            height={[2300,2300,2000,2200,2000]}
            width={["100%","100%","100%","100%","80%"]}
            mx="auto"
            ref={ref}
            id="about"
        >   
                <Box 
                  width={"100%"}
                  height={[700,1100,950,1200,900]}
                  display={"flex"}
                  alignItems={"center"}
                  flexDirection={["column","column","column","column","row"]}
                  justifyContent={['space-between']}
                  mx="auto"
                 
                >
                    <AboutImage />
                    <AboutDescription />
                </Box>
                <Services/>  
        </Box>
    )
}

export default About