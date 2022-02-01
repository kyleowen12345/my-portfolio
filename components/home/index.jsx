import React, { useEffect } from 'react'
import { Container,Text,Button,Image,Box,Link } from '@chakra-ui/react'
import { motion,AnimatePresence  } from "framer-motion"
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer';
import { useMyRoute } from '../../lib/routeprovider';

const MotionBox = motion(Box)
const MotionButton = motion(Button)


const imageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay:1.6, 
      duration: 0.7,
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
      duration: 0.7,
      ease: "easeInOut",
    }
   }
}

const secondContainer={
  hidden:{opacity:0},
  visible:{
   opacity: 1,
   transition: {
     delay:0.7, 
     duration: 0.7,
     ease: "easeInOut",
   }
  }
}

const thirdContainer={
  hidden:{opacity:0},
  visible:{
   opacity: 1,
   transition: {
     delay:1, 
     duration: 0.7,
     ease: "easeInOut",
   }
  }
}
const fourthContainer={
  hidden:{opacity:0},
  visible:{
   opacity: 1,
   transition: {
     delay:1.5, 
     duration: 1,
     ease: "easeInOut",
   }
  }
}

const Home = () => {
     const router = useRouter()
     const { ref, inView, entry } = useInView({
      threshold: 0,
    });
    const {setSection} = useMyRoute()

    useEffect(()=>{
      if(inView){
        setSection('/')
      }
    },[inView])

    const getCV = ()=>{
      fetch('https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/pdf',
        },
  })
  .then((response) => response.blob())
  .then((blob) => {
    // Create blob link to download
    const url = window.URL.createObjectURL(
      new Blob([blob]),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `FileName.pdf`,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  });
//   .then((response) => {
//     const url = window.URL
//     .createObjectURL(new Blob([response.data]));
//            const link = document.createElement('a');
//            link.href = url;
//            link.setAttribute('download', 'image.jpg');
//            document.body.appendChild(link);
//            link.click();
// })
}
    return (
        <Box 
          width={["90%","90%","90%","90%","80%"]}
          height={["650px","650px","850px","800px","950px"]}
          mx={"auto"}
          maxWidth={"1600px"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={["column","column","column","column","row"]}
          id="home"
          ref={ref}
        >
            <MotionBox
                mx={0}
                width={["100%","100%","100%","100%","50%"]}
                px={0}
                pt={[10,10,10,20,0]}
            >
                                <MotionBox
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
                                               width={["20%","20%","15%","15%","20%","15%"]} 
                                               fontSize={["1rem","1rem","1.1rem","1.3rem","1.3rem","1.563rem"]} 
                                               fontWeight={"bold"}
                                            >
                                              HELLO
                                            </Text>
                                            <Box  
                                                width={["80%","80%","85%","85%","80%","85%"]}  
                                                border={["1px solid black","1px solid black","1px solid black","2px solid black"]} 
                                                borderRadius={5} 
                                                mx={0}
                                            ></Box>

                                    </MotionBox>

                                    <MotionBox
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

                                    </MotionBox>

                                    <MotionBox
                                        px={0}
                                        display={"flex"}
                                        alignItems={"center"}
                                        justifyContent={"space-between"}
                                        mx={0}
                                        flexDirection={["column","column","column","row"]}
                                        initial={"hidden"} 
                                        animate={inView ? "visible" : "hidden"} 
                                        variants={thirdContainer}
                                    >
                                      
                                            <MotionButton 
                                                boxShadow={"0px 7px 5px 0px #2C2C2C"}  
                                                width={["100%","100%","100%","45%"]} 
                                                mb={[5,5,5,0]} 
                                                fontSize={["0.8rem","0.8rem","1rem"]} 
                                                bgColor={"black"} 
                                                color="white" 
                                                _hover={{bgColor:"white", color:"black",border:"2px solid black"}}
                                                onClick={()=> router.push('/#about')}
                                            >
                                              KNOW MORE
                                            </MotionButton>

                                            <Link
                                               width={["100%","100%","100%","45%"]}
                                               href='../../Images.pdf'
                                               download={"sample pdf"}
                                            >
                                                <MotionButton 
                                                    boxShadow={"0px 7px 5px 0px #2C2C2C"}   
                                                    width={"100%"} 
                                                    fontSize={["0.8rem","0.8rem","1rem"]} 
                                                    bgColor={"white"} 
                                                    color={"black"} 
                                                    border={"2px solid black"} 
                                                    _hover={{bgColor:"black", color:"white"}}
                                                >
                                                    GET CV
                                                </MotionButton>
                                            </Link>
                                            
                                            

                                    </MotionBox>
                        </MotionBox>
                            
                        <MotionBox
                            mx={0}
                            width={["100%","100%","100%","100%","50%"]}
                            px={0}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"right"}
                            initial="hidden" 
                            animate={inView ? "visible" : "hidden"} 
                            variants={imageVariants}
                        >
                                  <Image  
                                    src='../../home.png' 
                                    alt='next' 
                                    width={["100%","100%","100%","90%"]} 
                                    height={["100%","100%","100%","90%"]}
                                    maxWidth="800px"
                                    maxHeight="800px"
                                    objectFit={"contain"}
                                  />
                        </MotionBox> 
        </Box> 
    )
}

export default Home
