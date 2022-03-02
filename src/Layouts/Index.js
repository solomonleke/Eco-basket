import { Box, Container, Image } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

export default function MainLayout({children, bgColor = "white"}) {
  return (
    <Box position={"relative"}>
        <NavBar/>
         
           <Box mt="32px">
           <Image src="/front-cuv.png" display={{base: "none", md: "block"}} alt=""  position={"absolute"} right="0" top="0" />
           <Image src="/back-cuv.png" display={{base: "none", md: "block"}} alt="" position={"absolute"} right="0" top="0" />
              {children}
           </Box>
            
        <Footer/>
    </Box>
  )
}
