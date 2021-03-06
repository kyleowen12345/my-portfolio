import React from 'react'
import { Box,Link, Image ,useDisclosure,Icon,Text  } from '@chakra-ui/react'
import {FiGithub,FiTwitter} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'

const MyFooter = () => {
  return (
   <Box
   height={"100px"}
   display={"flex"}
   flexDirection="column"
   justifyContent="center"
   alignItems={"center"}
   fontFamily="Roboto Mono"

   >
      <Text color={"#CCD6F6"} fontSize="14px" >Created by Kyle Owen Ga</Text> 
      <Link color={"#CCD6F6"} fontSize="14px" _hover={{color:"#64FED9"}} href={"https://brittanychiang.com/"} target="_blank">(Design inspired by Brittany Chiang)</Link> 
      
      <Box mt={3} display={"flex"} maxWidth={200} minWidth={100} justifyContent="space-between">
          <Link color={"#CCD6F6"} fontSize="14px" _hover={{color:"#64FED9"}} href={"https://www.linkedin.com/in/kyle-owen-ga-80a822189/"} target="_blank">
              <Icon w={6} h={6} color={"#CCD6F6"} _hover={{color:"#64FED9"}} as={AiOutlineLinkedin}/>
          </Link> 
          <Link color={"#CCD6F6"} fontSize="14px" _hover={{color:"#64FED9"}} href={"https://twitter.com/DevWorst"} target="_blank">
              <Icon w={6} h={6}  color={"#CCD6F6"} _hover={{color:"#64FED9"}} as={FiTwitter}/>
          </Link>
          <Link color={"#CCD6F6"} fontSize="14px" _hover={{color:"#64FED9"}} href={"https://github.com/kyleowen12345"} target="_blank">
              <Icon w={6} h={6}  color={"#CCD6F6"} _hover={{color:"#64FED9"}} as={FiGithub}/>
          </Link>
         
      </Box>
   </Box>
  )
}

export default MyFooter