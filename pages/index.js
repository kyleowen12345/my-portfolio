import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Home from '../components/home'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'

import { Box, Spacer,Text } from '@chakra-ui/react'

export default function Balay() {
  return (
    <Box  width={["100%"]}  mr="auto" ml="auto"   display="flex" flexDirection="column" justifyContent="center">
       
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
    </Box>
  )
}
