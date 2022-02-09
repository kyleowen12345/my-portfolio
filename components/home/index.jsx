import React, { useEffect } from 'react'
import { Container,Text,Button,Image,Box,Link } from '@chakra-ui/react'
import { motion,AnimatePresence  } from "framer-motion"
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer';
import { useMyRoute } from '../../lib/routeprovider';

const MotionBox = motion(Box)
const MotionButton = motion(Button)
const MotionText = motion(Text)
const MotionImage = motion(Image)


const imageVariants = {
  hidden:{opacity:0},
  visible:{
    opacity: 1,
    transition: {
      delay:2.3, 
      duration: 0.7,
    }
  },
};

const firstContainer={
   hidden:{scale:0},
   visible:{
    scale: 1,
    transition: {
      delay:0.2, 
      duration: 0.4,
    }
   }
}

const secondContainer={
  hidden:{scale:0},
  visible:{
   scale: 1,
    transition: {
      delay:0.6, 
      duration: 0.4,
    }
   }
}

const thirdContainer={
  hidden:{scale:0},
  visible:{
   scale: 1,
    transition: {
      delay:1, 
      duration: 0.4,
    }
   }
}
const fourthContainer={
  hidden:{scale:0},
  visible:{
   scale: 1,
   transition: {
     delay:1.4, 
     duration: 0.4,
   }
  }
}

const fifthContainer={
  hidden:{scale:0},
   visible:{
    scale: 1,
   transition: {
     delay:1.8, 
     duration: 0.4,
   }
  }
}



const Home = () => {
     const { ref, inView, entry } = useInView({
      threshold: 0,
    });
    const {setSection} = useMyRoute()

    useEffect(()=>{
      if(inView){
        setSection('/')
      }
    },[inView])

   

    return (
      
        <Box 
          width={["90%","90%","90%","90%","80%"]}
          height={["650px","850px","1000px","1200px","900px","900px"]}
          mx={"auto"}
          maxWidth={"1600px"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={["column","column","column","column","row"]}
          id="home"
          ref={ref}
          bgColor={"#0A192F"}
        >
          
            <MotionBox
                mx={0}
                width={["100%","100%","100%","100%","50%"]}
                px={0}
                pt={[10,10,10,10,0]}
            >
                              
                                <MotionBox
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"flex-start"}
                                    px={0}
                                    mb={[2,2,5]}
                                    mx={0}
                                   
                                    >
                                       {/* 1 */}
                                            <MotionText  
                                               width={"100%"} 
                                               fontSize={["1rem","1rem","1.1rem","1.3rem","1.3rem","1rem"]} 
                                               fontWeight={"bold"}
                                               color={"#64FED9"} 
                                               style={{
                                                wordSpacing: "3px"
                                               }}
                                               initial={"hidden"}
                                               animate={inView ? "visible" : "hidden"}
                                               variants={firstContainer}
                                               fontWeight="500"
                                            >
                                              Hi, my name is
                                            </MotionText>
                                        {/* 1 */}

                                    </MotionBox>
                                    

                                    <MotionBox
                                      px={0}
                                      mb={[5,5,10]}
                                      mx={0}
                                    >
                                      {/* 2 */}
                                            <MotionText 
                                                // textShadow={"1px 2px black"} 
                                                fontSize={["1.513rem","2.313rem","2.813rem","3.013rem","3.313rem","3.813rem"]} 
                                                fontWeight={"bold"}
                                                color="#CCD6F6"
                                                initial={"hidden"}
                                                animate={inView ? "visible" : "hidden"}
                                                variants={secondContainer}
                                                
                                            >
                                             KYLE OWEN GA.
                                            </MotionText>
                                            {/* 2 */}

                                            {/* 3 */}
                                            <MotionText  
                                               fontSize={["1.513rem","1.9rem","2.513rem","2.813rem","3rem","3.513rem"]} 
                                               fontWeight={"bold"}
                                               color="#8892B0"
                                               initial={"hidden"}
                                               animate={inView ? "visible" : "hidden"}
                                               variants={thirdContainer}
                                            >
                                            I create things for the web.
                                            </MotionText>
                                            {/* 3 */}

                                            {/* 4 */}
                                            <MotionBox  
                                                 fontSize={"1rem"} 
                                                 fontWeight={"bold"}
                                                 color="#8892B0"
                                                 maxWidth="650px"
                                                 my={5}
                                                 initial={"hidden"}
                                                 animate={inView ? "visible" : "hidden"}
                                                 variants={fourthContainer}
                                                 fontWeight="300"
                                            >
                                          {/* I’m a software engineer specializing in building exceptional web applications. */}
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa officiis molestiae voluptatum iste id repellendus laudantium sunt ad atque ab, sequi, dolor aliquam,<span style={{color:"#64FED9"}}>nisi eum eaque delectus vero pariatur</span> 

                                            </MotionBox>
                                            {/* 4 */}

                                    </MotionBox>


                                   {/* 5 */}
                                    <MotionBox
                                        px={0}
                                        display={"flex"}
                                        alignItems={"center"}
                                        justifyContent={"space-between"}
                                        mx={0}
                                        flexDirection={["column","column","column","row"]}
                                        initial={"hidden"} 
                                        animate={inView ? "visible" : "hidden"} 
                                        variants={fifthContainer}
                                    >

                                            <Link
                                               width={["100%","100%","100%","45%"]}
                                               href='../../Images.pdf'
                                               download={"Resume"}
                                               style={{ textDecoration: 'none' }}
                                            >
                                                <MotionButton 
                                                   width={"100%"} 
                                                   mb={[5,5,5,0]} 
                                                   bgColor={"#64FED9"}
                                                   color={"#0A192F"}
                                                   border="2px solid #64FED9"
                                                   height="50px" 
                                                   fontSize={["0.8rem","0.8rem","1rem"]} 
                                                   _hover={{color:"#64FED9",bgColor:"#0A192F"}}
                                                   style={{
                                                    wordSpacing: "2px"
                                                   }}
                                                   fontWeight="300"
                                                   minWidth={"200px"}
                                                >
                                                    About Me
                                                </MotionButton>
                                            </Link>
                                            <Link
                                               width={["100%","100%","100%","45%"]}
                                               href='../../Images.pdf'
                                               download={"Resume"}
                                               style={{ textDecoration: 'none' }}
                                            >
                                                <MotionButton 
                                                   width={"100%"} 
                                                   mb={[5,5,5,0]} 
                                                   bgColor={"#0A192F"}
                                                   color={"#64FED9"}
                                                   border="2px solid #64FED9"
                                                   height="50px" 
                                                   fontSize={["0.8rem","0.8rem","1rem"]} 
                                                   _hover={{bgColor:"#64FED9",color:"#0A192F"}}
                                                   style={{
                                                    wordSpacing: "2px"
                                                   }}
                                                   fontWeight="300"
                                                   minWidth={"200px"}
                                                >
                                                    Check out my Github!
                                                </MotionButton>
                                            </Link>
                                            
                                            

                                    </MotionBox>
                                    {/* 5 */}
                        </MotionBox>
                            
                            {/* 6 */}
                        <MotionBox
                            mx={0}
                            width={["100%","100%","100%","100%","50%"]}
                            px={0}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"right"}
                           
                        >
                                  <MotionImage  
                                    src='../../home_ill.png' 
                                    alt='next' 
                                    width={["100%","100%","100%","90%"]} 
                                    height={["100%","100%","100%","90%"]}
                                    maxWidth="550px"
                                    maxHeight="550px"
                                    objectFit={"contain"}
                                    borderRadius={5}
                                    initial="hidden" 
                                    animate={inView ? "visible" : "hidden"} 
                                    variants={imageVariants}
                                  />
                        </MotionBox>
                         {/* 6*/}
        </Box> 
    )
}

export default Home
// rgb(98,237,209)