import React from 'react';
import { Box,Text,Icon,Stack, Button,Link } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';
import {AiOutlineHome,AiOutlineMail} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  ssr: false
});






const ContactContent = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

    const contactDetails=[
        {
            icon:AiOutlineHome,
            name:"Davao City, Philippines",
            extraDetails:"Barangay Cabantian",
            hidden:"first_Nav_Item_Hidden",
            visible:"first_Nav_Item_Visible"
        },
        {
            icon:BsTelephone,
            name:"0939  119  2839",
            extraDetails:"Everyday 9am to 6pm",
            hidden:"second_Nav_Item_Hidden",
            visible:"second_Nav_Item_Visible"
            
        },
        {
            icon:AiOutlineMail,
            name:"gakyleowen@gmail.com",
            extraDetails:"Send me your query anytime!",
            hidden:"third_Nav_Item_Hidden",
            visible:"third_Nav_Item_Visible"
        }
    ]

  
  return (
      <Stack
        width={["90%","90%","90%","90%","100%"]}
        mx={["auto","auto","auto","auto",0]}
        height={["97%","97%","95%","95%","90%"]}
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={["column","column","column","column","row"]}
        spacing={10}
        mt={10}
        
      >
             <Map/>
            <Stack
               width={["100%","100%","100%","100%","40%"]}
               height={"60%"}
               spacing={10} 
               display={"flex"}
               alignItems={"start"}
               justifyContent={["start","start","start","start","center"]}
               mt={0}
               ref={ref}
           

            >
                {
                    contactDetails.map(i=>(
                       <Box 
                          key={i.name}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"left"}
                          width={"100%"}
                          className={inView ? i.visible : i.hidden}
                       >
                           <Icon 
                              as={i.icon} 
                              w={10} 
                              h={10}
                              color={"#64FED9"}
                           />
                           <Box
                              pl={5}
                              textAlign={"left"}
                           >
                                <Text
                                  fontSize={["16px","16px","18px","20px","22px"]}
                                  fontWeight={"semibold"}
                                   color="#CCD6F6"
                                >
                                  {i.name}
                                </Text>
                                <Text 
                                  fontSize={["14px","14px","15px","17px","18px"]}
                                  color="#8892B0"
                                >
                                  {i.extraDetails}
                                </Text>
                           </Box>
                          
                       </Box> 
                    ))
                }
                <Link 
                   href={`mailto:gakyleowen@gmail.com`} 
                   width={"100%"} 
                   _hover={{textDecoration:"none"}} 
                   >  
                <Button
                    width={["100%","100%","100%","100%","70%"]} 
                    bgColor={"#0A192F"}
                    color={"#64FED9"}
                    border="2px solid #64FED9"
                    fontWeight={"300"}
                    height="50px"
                     _hover={{bgColor:"#64FED9",color:"#0A192F"}}
                    className={inView ? "fourth_Nav_Item_Visible" : "fourth_Nav_Item_Hidden"}
                
                >
                  SAY HELLO
                </Button>
                 </Link>
            </Stack>

      </Stack>
  );
};

export default ContactContent;
