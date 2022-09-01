import React from "react";
import {
  Box,
  Center,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  LinkBox
} from "@chakra-ui/react";
import {
  AiOutlineAlignRight,
  AiOutlineUser,
  AiOutlineMan,
  AiTwotonePhone,
} from "react-icons/ai";
import { Link,useNavigate } from 'react-router-dom';
export default function NavBar() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  const navigate = useNavigate()


  const nav = ()=>{
    navigate("/ecobasket")
  }
  return (
    <>
      <Stack 
        zIndex={10}
        display={{ base: "none", md: "flex" }}
        direction={"row"}
        bg="background"
        h={"60px"}
        pos="relative"
      >
    
        <Box ml={"30px"} pt="18px" boxSize="sm">
          <Image src="/logo.png" mt={"-10px"} alt="Dan Abramov" />
        </Box>
        <Spacer />
        <HStack w="645px" spacing={"105px"}>
        
         
          <Text
            fontWeight={"200"}
            lineHeight="30px"
            color="#000000"
            fontSize={"20px"}
          >
          <LinkBox as={Link} to="/ecobasket">
          Eco-basket
          </LinkBox>
           
          </Text>
        
        </HStack>
      </Stack>

      <Stack
        display={{ base: "flex", md: "none" }}
        direction={{base: "row" , md: "column"}}
        bg="background"
        h={"82px"}
      >
       
        <Box ml={"9px"} pt="18px" boxSize="sm">
          <Image src="/logo.png" alt="Dan Abramov" />
        </Box>
        <Spacer />

        <Center pr="20px">
          <AiOutlineAlignRight onClick={onOpen} fontSize={"40px"} />
        </Center>
      </Stack>

      
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="2px">
            <Text
              position={"relative"}
              fontSize={"45px"}
              backgroundImage="url('/text-bg.png')"
              bgClip={"text"}
            >
              <Image src="/leaf.png" w={"45px"} position="absolute" left="-4"/>{" "}
              eco-Basket
            </Text>
          </DrawerHeader>
          <DrawerBody mt={"32px"}>
            <Stack spacing={"32px"}>
              <HStack color="gray.gray400">
                <AiOutlineUser fontSize={"20px"} />
                <Text
                onClick={nav}
                  fontWeight={"200"}
                  lineHeight="30px"
                  color="gray.gray400"
                  fontSize={"25px"}
                >
                  Eco-Basket
                </Text>
              </HStack>

            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
