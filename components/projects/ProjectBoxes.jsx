import React from 'react';
import { Box,Image,Text,Icon,Stack,Grid,Link } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';
import ProjectBoxContent from './ProjectBoxContent';



const ProjectBoxes = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
  const projects = [
      {
          image:"../../home.png",
          projectName:"Blacked Market",
          projectDescription:"It’s an e-commerce site where a buyer can also be a seller. It also shows statistical data on how much you are selling and which stores are more followed. The statistical chart on the dashboard also helps sellers on what product to restock or to get rid of.",
          projectTools:["React","Express","Graphql","Heroku","MongoDB"],
          externalLink:"https://blackedmarket.vercel.app/",
          repositoryLink:"https://github.com/kyleowen12345/blackedmarket",
          youtubelink:"https://www.youtube.com/embed/4U9JrjN_02U"

      },
      {
        image:"../../home.png",
        projectName:"ECS (Video Conferencing App)",
        projectDescription:"It's a video conferencing app in its development stage. You can create a meeting and join a meeting, it can cater to multiple participants also you chat, record video, screen share, and change layout view (pretty much like Zoom).",
        projectTools:["React","Express","Heroku","MongoDB"],
        externalLink:"https://ecs-frontend.vercel.app/",
        repositoryLink:"https://github.com/kyleowen12345/ecs_frontend",
        youtubelink:"https://www.youtube.com/embed/rf75OMfxGMM"
    },
    {
      image:"../../home.png",
      projectName:"BHY (mobile application)",
      projectDescription:"A social media platform with fitness assistance tracker. It also has a marketplace where they can purchase insurance plans offered by FWD and gives statistical data to show the status of insurance in different countries.",
      projectTools:["React-Native","Express","MongoDB"],
      externalLink:"disabled",
      repositoryLink:"https://github.com/kyleowen12345/FwdApp/tree/Kaking's_branch",
      youtubelink:"https://www.youtube.com/embed/p6qAlL1JMmk"
  }
  ]
    
  return (
    <Stack
       width={["90%","90%","90%","90%","100%"]}
       mx={["auto","auto","auto","auto",0]}
       height={["97%","97%","95%","95%","90%"]}
       spacing={10}
      ref={ref}
    >
      {
         projects.map(i=>(
            //  1
              <ProjectBoxContent i={i} key={i.projectName}/>
                ))
            }      
    </Stack>
  );
};

export default ProjectBoxes;
