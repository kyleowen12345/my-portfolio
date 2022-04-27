import React from 'react';
import { Image,Box,Text,Grid,Button,Stack,Icon  } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';
import {BsWordpress} from 'react-icons/bs'
import {AiOutlineApi} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'
import {MdOutlineDesignServices} from 'react-icons/md'
import ServiceContent from './ServiceContent';





const Services = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
      });

     const services = [
       {
         hiddenClass:"firstServiceHidden",
         visibleClass:"firstServiceVisible",
         serviceImage:MdOutlineDesignServices,
         serviceName:"UI/UX Design",
         serviceDescription:"Building a user-friendly interface, collaborating with managers and engineers to gather requirements from users before designing ideas. I also process flows or sitemaps then applying color palettes based on what best fits into a particular design conceptually."
       },
       {
        hiddenClass:"secondServiceHidden",
        visibleClass:"secondServiceVisible",
        serviceImage:CgWebsite,
        serviceName:"Web Development",
        serviceDescription:"I make sure websites look good and function properly. Collaborating with website and graphic designers, monitoring website traffic, troubleshooting website problems when they arise, and updating websites as necessary."
      },
      {
        hiddenClass:"thirdServiceHidden",
        visibleClass:"thirdServiceVisible",
        serviceImage:AiOutlineApi,
        serviceName:"API Development",
        serviceDescription:"I make sure API (REST / Graphql) is secure and performs properly. Collaborating with web developers and mobile developers, troubleshooting API accessibility problems when they arise, and updating API as necessary."
      },
      {
        hiddenClass:"fourthServiceHidden",
        visibleClass:"fourthServiceVisible",
        serviceImage:BsWordpress,
        serviceName:"WordPress",
        serviceDescription:"Designing and implementing websites for companies using the WordPress creation tool. My goal is to create attractive and user-friendly websites according to client specifications"
      }

     ] 
  return (
      <Box
        width={["90%","90%","90%","90%","100%"]}
        height={["60%","60%","50%"]}
        display={"flex"}
        flexDirection={"column"} 
        alignItems={"center"}
        ref={ref}
        mx={"auto"}
      >    
         <Box 
           mb={10} 
           display={"flex"} 
           flexDirection={"column"} 
           alignItems={"center"}
          
           
         >
           <Text  
               fontSize={["16px","16px","18px","18px","20px" ]} 
               fontWeight={"semibold"} 
              
               color={"#64FED9"}
               fontFamily="Roboto Mono"
           >
               MY OFFERED SERVICES
           </Text>
           {/* <Text 
               fontSize={["11px","11px","13px","13px","14px"] } 
               textAlign={"center"}
               color="#CCD6F6"
           >
               At about this time of year, some months after New Year’s resolutions have been made and kept, or made and neglected.
           </Text> */}
         </Box>
         <Grid 
             width={"100%"} 
             templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']} 
             gap={[5,5,5,5,10]} 
             height={["100%","100%","100%","60%"]}
           
         >                
                      {services.map(i=>(
                        
                        <ServiceContent i={i} key={i.serviceName}/>
                      ))}
         </Grid>
      </Box>
  );
};

export default Services;




