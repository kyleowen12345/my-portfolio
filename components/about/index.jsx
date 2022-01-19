import React, { useEffect } from 'react'
import { Container,Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';
import { useMyRoute } from '../../lib/routeprovider';

const About = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
      const {setSection} = useMyRoute()
  
      useEffect(()=>{
        if(inView){
          setSection('/#about')
        }
      },[inView])
    return (
        <Container ref={ref} height={1000} id='about'  maxWidth={"100%"}  bgColor={"green"}>
            About
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error maiores, impedit adipisci ex consequuntur laboriosam dolorem quos quibusdam ullam quis earum neque est omnis placeat minus inventore aliquid temporibus cupiditate.</Text>
        </Container>
    )
}

export default About