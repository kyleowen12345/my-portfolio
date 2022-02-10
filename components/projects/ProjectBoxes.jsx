import React from 'react';
import { Box,Image,Text,Icon,Stack,Grid,Link } from '@chakra-ui/react'
import { motion  } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import NextLink from 'next/link'
import {FiExternalLink} from 'react-icons/fi'
import {AiOutlineGithub} from 'react-icons/ai'
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
          repositoryLink:"https://github.com/kyleowen12345/blackedmarket"

      },
      {
        image:"../../home.png",
        projectName:"Blacked Market(2)",
        projectDescription:"It’s an e-commerce site where a buyer can also be a seller. It also shows statistical data on how much you are selling and which stores are more followed. The statistical chart on the dashboard also helps sellers on what product to restock or to get rid of.",
        projectTools:["React","Express","Graphql","Heroku","MongoDB"],
        externalLink:"https://blackedmarket.vercel.app/",
        repositoryLink:"https://github.com/kyleowen12345/blackedmarket"

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
