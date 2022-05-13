import React, { useEffect } from 'react' 
import { Box } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';
import { useMyRoute } from '../../lib/routeprovider'
import ProjectIntro from './ProjectIntro';
import ProjectBoxes from './ProjectBoxes';

const Projects = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
      const {setSection} = useMyRoute()
  
      useEffect(()=>{
        if(inView){
          setSection('/#projects')
        }
      },[inView])

    return (
       <Box
          height={[2200,2200,2000,1800,1500]}
          width={["100%","100%","100%","100%","80%"]}
          mx="auto"
          ref={ref}
          id="projects"
          maxWidth={"1600px"}
       >
           <ProjectIntro/>
           <ProjectBoxes/>
       </Box>
    )
}

export default Projects