import React, { useEffect } from 'react'
import { Container,Text,Button,Image } from '@chakra-ui/react'
import { motion,AnimatePresence  } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useMyRoute } from '../../lib/routeprovider';

const MotionContainer = motion(Container)
const MotionButton = motion(Button)


const imageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay:1.4, 
      duration: 1,
      ease: "easeInOut",
    }
  },
  hover:{
     scale: 1.2, 
     textShadow: "0px 0px 8px rgb(255,255,255)",
     boxShadow: "0px 0px 8px rgb(255,255,255)"
    }
};

const firstContainer={
   hidden:{opacity:0},
   visible:{
    opacity: 1,
    transition: {
      delay:0.3, 
      duration: 1,
      ease: "easeInOut",
    }
   }
}

const secondContainer={
  hidden:{opacity:0},
  visible:{
   opacity: 1,
   transition: {
     delay:0.8, 
     duration: 1,
     ease: "easeInOut",
   }
  }
}

const thirdContainer={
  hidden:{opacity:0},
  visible:{
   opacity: 1,
   transition: {
     delay:1.1, 
     duration: 1,
     ease: "easeInOut",
   }
  }
}
const fourthContainer={
  hidden:{opacity:0},
  visible:{
   opacity: 1,
   transition: {
     delay:1.4, 
     duration: 1,
     ease: "easeInOut",
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
        
       <Container
          minWidth={"100%"}
          height={[600,600,900,900,900,950]} 
          bgColor={"white"}
          px={0}
       >
                  <Container
                      minWidth={["100%","100%","100%","100%","80%"]}
                      bgColor={"white"}
                      px={0}
                      pt={[10,10,20,20,0]}
                      minHeight={700} 
                      display={"flex"}
                      flexDirection={["column","column","column","column","row"]}
                      alignItems={"center"}
                      id='home' 
                      ref={ref}
                  >
                        <MotionContainer
                          mx={[5,10,5,0]}
                          minWidth={"50%"}
                          px={[5,5,5,0]}
                        >
                                <MotionContainer
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"flex-start"}
                                    px={0}
                                    mb={[2,2,5]}
                                    mx={0}
                                    initial={"hidden"}
                                    animate={inView ? "visible" : "hidden"}
                                    variants={firstContainer}
                                    >
                                            <Text  
                                               width={["20%","20%","20%","20%","20%","15%"]} 
                                               fontSize={["1rem","1rem","1.1rem","1.3rem","1.3rem","1.563rem"]} 
                                               fontWeight={"bold"}
                                            >
                                              HELLO
                                            </Text>
                                            <Container  
                                                width={["80%","80%","80%","80%","80%","85%"]}  
                                                border={["1px solid black","1px solid black","1px solid black","2px solid black"]} 
                                                borderRadius={5} 
                                                mx={0}
                                            ></Container>

                                    </MotionContainer>

                                    <MotionContainer
                                      px={0}
                                      mb={[5,5,10]}
                                      mx={0}
                                      initial={"hidden"}
                                      animate={inView ? "visible" : "hidden"}
                                      variants={secondContainer}
                                    >
                                            <Text 
                                                textShadow={"1px 2px black"} 
                                                fontSize={["1.313rem","1.513rem","1.813rem","2.013rem","2.313rem","2.813rem"]} 
                                                fontWeight={"bold"}
                                            >
                                              I AM KYLE OWEN GA
                                            </Text>
                                            <Text  
                                                fontSize={["0.538rem","0.638rem","0.738rem","0.838rem","0.938rem"]} 
                                                fontWeight={"semibold"}
                                            >
                                              FULL STACK WEB DEVELOPER
                                            </Text>

                                    </MotionContainer>

                                    <MotionContainer
                                        px={0}
                                        display={"flex"}
                                        alignItems={"center"}
                                        justifyContent={"space-between"}
                                        mx={0}
                                        flexDirection={["column","column","column","row"]}
                                    >
                                            <MotionButton 
                                                initial={"hidden"} 
                                                animate={inView ? "visible" : "hidden"} 
                                                variants={thirdContainer} 
                                                boxShadow={"0px 7px 5px 0px #2C2C2C"}  
                                                width={["100%","100%","100%","45%"]} 
                                                mb={[5,5,5,0]} 
                                                fontSize={["0.8rem","0.8rem","1rem"]} 
                                                bgColor={"black"} 
                                                color="white" 
                                                _hover={{bgColor:"white", color:"black",border:"2px solid black"}}
                                            >
                                              KNOW MORE
                                            </MotionButton>
                                            <MotionButton 
                                                initial={"hidden"} 
                                                animate={inView ? "visible" : "hidden"} 
                                                variants={fourthContainer} 
                                                boxShadow={"0px 7px 5px 0px #2C2C2C"}   
                                                width={["100%","100%","100%","45%"]} 
                                                fontSize={["0.8rem","0.8rem","1rem"]} 
                                                bgColor={"white"} 
                                                color={"black"} 
                                                border={"2px solid black"} 
                                                _hover={{bgColor:"black", color:"white"}}
                                            >
                                                GET CV
                                            </MotionButton>

                                    </MotionContainer>
                        </MotionContainer>
                            
                        <MotionContainer
                            minWidth={"50%"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"right"}
                            mx={0}
                            px={[5,5,5,0]}
                            initial="hidden" 
                            animate={inView ? "visible" : "hidden"} 
                            variants={imageVariants}
                        >
                                  <Image  
                                    src='../../home.png' 
                                    alt='next' 
                                    width={"100%"} 
                                    height={"100%"}
                                    maxWidth="1000px"
                                    maxHeight="1000px"
                                  />
                        </MotionContainer>
                            

                  </Container>
       </Container> 
    )
}

export default Home
