import React from 'react';
import { Image,Box } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';
import { useMyRoute } from '../../lib/routeprovider';





const AboutImage = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return ( 

  <Box
    position="relative"
    overflow="hidden"
    width={["90%","90%","90%","90%","50%"]}
    height={["30%","40%","40%","40%","90%"]}
    mx={["auto","auto","auto","auto",0]}
    display="flex"
    justifyContent="center"
    alignItems="center"
    px={0}
    mb={[5,5,5,5,0]}
    maxWidth="1000px"
    maxHeight="1000px"
    ref={ref}
    className={ inView ? "imageContainerVisible" : "imageContainerHidden"}
   
  >
            <Box  
              borderRadius={5}
              position="absolute" 
              width={["90%","90%","90%","40%"]} 
              backgroundImage={'../../googleimage.jpg'} 
              backgroundPosition="center" 
              backgroundSize="cover" 
              backgroundRepeat="no-repeat" 
              height={["90%","90%","90%","50%"]}
             
            ></Box>
            <Box 
            borderRadius={5}
            position="absolute" 
            width={["90%","90%","90%","40%"]} 
            height={["90%","90%","90%","50%"]} 
            backgroundColor="#64FED9"
            opacity={0.5}
            >
              
            </Box>
  </Box>
  )
};

export default AboutImage;
