import React, { useEffect, useState } from 'react'
import { Box,Link, Image ,useDisclosure,Icon,Button  } from '@chakra-ui/react'

import NextLink from 'next/link'
import { useInView } from 'react-intersection-observer';
import ReusableDrawer from './ReusableDrawer'
import { useMyRoute } from '../../lib/routeprovider'
import {BiMenuAltRight} from 'react-icons/bi'



const BigHeader = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
    const [showNav, setShowNav]= useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {section} = useMyRoute()


  useEffect(() => {
     window.addEventListener('scroll',() => {
        if(window.scrollY > 100) {
         setShowNav(true)
        }else return setShowNav(false)
     })
  }, [showNav])

  const myRoutes = [
    {
      route:"/#home",
      routeName:"HOME",
      hidden:"first_Nav_Item_Hidden",
      visible:"first_Nav_Item_Visible"
    },
    {
      route:"/#about",
      routeName:"ABOUT",
      hidden:"second_Nav_Item_Hidden",
      visible:"second_Nav_Item_Visible"
    },
    {
      route:"/#projects",
      routeName:"PROJECTS",
      hidden:"third_Nav_Item_Hidden",
      visible:"third_Nav_Item_Visible"
    },
    {
      route:"/#contact",
      routeName:"CONTACT",
      hidden:"fourth_Nav_Item_Hidden",
      visible:"fourth_Nav_Item_Visible"
    }
  ]

    return (
         <Box
               boxShadow={showNav && '2xl'}
               borderBottom={showNav && "2px solid #64FED9"}
               position="sticky"
               top={0}
               width={"100%"} 
               display={"flex"} 
               justifyContent={"center"}  
               bgColor={"#0A192F"}
               zIndex={999}
               fontFamily="Roboto Mono"
               ref={ref}
         >
            <Box
              width={["90%","90%","90%","90%","80%"]}
              maxWidth={"1600px"}
              display={"flex"}
              alignItems={'center'}
              py={[2,3,3,4,5]}
            >
               <Box
                  width={"60%"}
                  display={"flex"}
                  justifyContent={"left"}
                  mx={0}
                  px={0}
               >
                        <Image
                            src="../../my_logo.png"
                            alt="portfolio_logo"
                            height={["30px","40px","40px","50px"]}
                            objectFit="contain"
                        />
               </Box>

               <Box
                  width={"40%"}
                  display={["none","none","none","none","flex"]}
                  justifyContent={"space-between"}
                  mr={0}
                  pr={0}
                  
                  color={"#CCD6F6" }
                  fontSize={ "13px"} 
                  alignItems="center"
                  minWidth="520px"
               >
                      {
                        myRoutes.map(i=>(
                          <NextLink 
                          href={i.route}
                          key={i.routeName}
                          passHref
                          >
                            <Link
                              fontWeight={ "bold"}
                              className={inView ? i.visible : i.hidden}
                              _hover={{color:"#64FED9"}}
                            >
                              {i.routeName}
                            </Link>
                          </NextLink>
                        ))
                      }
                        <Link
                            href='../../Kyle Owen Ga (resume).pdf'
                            download={"Resume pdf"}
                            style={{ textDecoration: 'none' }}
                            className={inView ? "fifth_Nav_Item_Visible" : "fifth_Nav_Item_Hidden"}
                        >
                            <Button
                              bgColor={"#0A192F"}
                              color={"#64FED9"}
                              border="2px solid #64FED9"
                              fontWeight={"300"}
                             
                              _hover={{bgColor:"#64FED9",color:"#0A192F"}}
                            >
                              GET CV
                            </Button>
                        </Link>

               </Box>

               <Box 
                   width={"50%"}
                   display={["flex","flex","flex","flex","none"]}
                   justifyContent={"right"}
                   px={0}
                   onClick={isOpen ? onClose : onOpen}
                  //  variants={menuVariants} 
                  className={inView ?  "first_Nav_Item_Visible" : "first_Nav_Item_Hidden"}
               >
                        <Icon
                          color={"#64FED9"}
                          as={BiMenuAltRight}
                          w={10} 
                          h={10}
                         
                        />
               </Box>

               <ReusableDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} myRoutes={myRoutes} />
            </Box>
         </Box> 
    )
}

export default BigHeader
