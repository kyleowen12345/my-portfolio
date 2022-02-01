import React, { useEffect } from 'react'
import { Container,Text,Box, useDisclosure} from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';
import { useMyRoute } from '../../lib/routeprovider';
import ContactIntro from './ContactIntro';
import ContactContent from './ContactContent';

const Contact = () => {
    const { isOpen, onToggle } = useDisclosure()

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
      const {setSection} = useMyRoute()
  
      useEffect(()=>{
        if(inView){
          setSection('/#contact')
        }
      },[inView])
    return (
        <Box
          height={[2000,1200,1300,1200,800]}
          width={["100%","100%","100%","100%","80%"]}
          mx="auto"
          ref={ref}
          id="contact"
          maxWidth={"1600px"}
        >
            <ContactIntro/>
            <ContactContent/>
        </Box>
    )
}

export default Contact