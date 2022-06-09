import {
    Box,
    Center,
    HStack,
    Image,
    LinkBox,
    SimpleGrid,
    Spacer,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";
import MainLayout from "../../Layouts/Index";
import Seo from "../../Utils/Seo";
import { RiPhoneFill,RiMailFill } from "react-icons/ri";

export default function EcoBasket() {
    return (
        <MainLayout>
            <Seo title="eco-basket" description="eco-basket" />

            <Stack direction={{ base: "column", md: "row" }} mt="62px">
                <Box>
                    <Text
                        ml={{ base: "25px", md: "46px" }}
                        mr={{ base: "25px", md: "46px" }}
                        position={"relative"}
                        fontSize={{ base: "45px", md: "121px" }}
                        textAlign={{ base: "center", md: "left" }}
                        backgroundImage="url('/text-bg.png')"
                        fontWeight={{base: "600", md: "700"}}
                        bgClip={"text"}
                    >
                        <Image
                            src="/leaf.png"
                            w={{ base: "45px", md: "80px" }}
                            position="absolute"
                            top={{ base: "2px", md: "15px" }}
                            left={{ base: "22px", md: "-15px" }}
                            zIndex={"-12"}
                        />
                        eco-Basket
                    </Text>
                   
                    <Box bgColor="#FBFBFB">
                    <Text
                    mt={{ base: "32px", md: "125px" }}
                    ml={{ base: "25px", md: "46px" }}
                    mr={{ base: "25px", md: "46px" }}
                    fontSize={{base: "20px", md: "25px"}}
                    fontWeight="700"
                    color={"#595959"}
                    fontFamily= "body"
                >
                    About Eco-Basket
                   </Text>

                    <SimpleGrid
                    p="20px"
                    columns={{ base: 1, md: 3 }}
                    ml={{ base: "25px", md: "46px" }}
                    mr={{ base: "25px", md: "46px" }}
                   
                    spacing={"40px"}
                >
                    <Box
                  
                    >
                        <Center h={"120px"}   maxW={{ base: "100%", md: "xs" }}>
                            <Image w={{base: "90px", md: "90px"}} src="/icon1.png" />
                        </Center>
                       
                        <Text
                        mt="15px"
                        textAlign={{ base: "center", md: "left" }}
                        maxW={{ base: "100%", md: "xs" }}
                        fontWeight={"300"}
                        lineHeight={"24px"}
                        fontSize={"20px"}
                    >
                        Ecobasket provides <br/>  accessible means of  waste disposal.
                    </Text>
                       
                       
                    </Box>
                    <Box
                       
                    >
                        <Center h={"120px"}  maxW={{ base: "100%", md: "xs" }}>
                            <Image w={{base: "90px", md: "118px"}} src="/icon2.png" />
                        </Center>
                        <Text
                            mt="15px"
                            textAlign={{ base: "center", md: "left" }}
                            maxW={{ base: "100%", md: "xs" }}
                            fontWeight={"300"}
                            lineHeight={"24px"}
                            fontSize={"20px"}
                        >
                            it also sensitizes people on the need to keep their environment
                            clean.
                        </Text>
                    </Box>
                    <Box
                      
                    >
                        <Center h={"120px"}  maxW={{ base: "100%", md: "xs" }}>
                            <Image w={{base: "90px", md: "107px"}} src="/icon3.png" />
                        </Center>
                        <Text
                            mt="15px"
                            textAlign={{ base: "center", md: "left" }}
                            maxW={{ base: "100%", md: "xs" }}
                            fontWeight={"300"}
                            lineHeight={"24px"}
                            fontSize={"20px"}
                        >
                            ...and it is completely manufactured with recycled waste.
                        </Text>
                    </Box>
                </SimpleGrid>
                    
                    </Box>
                    
                </Box>
                <Spacer />
                <Box>
                    <Image src="/basket.png" alt="Dan Abramov" />
                </Box>
            </Stack>
          
            <Box bg={"#F1F9F3"}  mt={{ base: "152px", md: "105px" }} >
            <Text
          
            ml={{ base: "25px", md: "46px" }}
            mr={{ base: "25px", md: "46px" }}
            fontSize={{base: "20px", md: "25px"}}
            fontWeight="700"
            color={"#595959"}
            pos={"relative"} 
            >
            <Image src="/glob.png" position={"absolute"} w={{base: "240px", md: "245px"}} zIndex={"-1"} bottom="-12"></Image>
            How you Can Support
            </Text>

                <SimpleGrid
                    ml={{ base: "25px", md: "46px" }}
                    mr={{ base: "25px", md: "46px" }}
                    mt={{ base: "12px", md: "32px" }}

                    pb="20px"
                    spacing="45px"
                    columns={{ base: 1, md: 3 }}
                   
                >
                    <Box>
                        <Center h={"140px"}  maxW={{ base: "100%", md: "xs" }}>
                            <Image w={{base: "90px", md: "129px"}} src="/icon4.png" />
                        </Center>
                        <Text
                        fontSize={{base: "15px", md: "20px"}}
                        fontWeight="700"
                        color={"#000000"}
                        textAlign={{ base: "center", md: "center" }}
                        mt="20px"
                        maxW={{ base: "100%", md: "xs" }}
                        >Eco-Ambassador</Text>
                        <Text
                            mt="10px"
                            textAlign={{ base: "center", md: "left" }}
                            fontWeight={"300"}
                            lineHeight={"24px"}
                            fontSize={"20px"}
                            maxW={{ base: "100%", md: "xs" }}
                           
                        >
                        You can simply avoid littering the environment and encourage others to do same.
                        </Text>
                    </Box>
                    <Box  maxW={{ base: "100%", md: "xs" }}>
                        <Center h={"140px"}>
                            <Image  w={{base: "90px", md: "148px"}}  src="/icon5.png" />
                        </Center>
                        <Text
                        fontSize={{base: "15px", md: "20px"}}
                        fontWeight="700"
                        color={"#000000"}
                        textAlign={{ base: "center", md: "center" }}
                        mt="20px"
                        >Eco-Sponsor</Text>
                        <Text
                            mt="10px"
                            textAlign={{ base: "center", md: "left" }}
                            fontWeight={"300"}
                            lineHeight={"24px"}
                            fontSize={"20px"}
                            maxW={{ base: "100%", md: "xs" }}
                           
                        >
                        You can make donation to this cause and get more Eco-baskets out there.<LinkBox as="span" cursor={"pointer"} color= "blue"> Click here</LinkBox>.
                        </Text>
                    </Box>
                    <Box  maxW={{ base: "100%", md: "xs" }}>
                        <Center h={"140px"}>
                            <Image w={{base: "90px", md: "101px"}} src="/icon6.png" />
                        </Center>
                        <Text
                        fontSize={{base: "15px", md: "20px"}}
                        fontWeight="700"
                        color={"#000000"}
                        textAlign={{ base: "center", md: "center" }}
                        mt="20px"
                        >Eco-Daddy</Text>
                        <Text
                            mt="10px"
                            textAlign={{ base: "center", md: "left" }}
                            fontWeight={"300"}
                            lineHeight={"24px"}
                            fontSize={"20px"}
                            maxW={{ base: "100%", md: "xs" }}
                           
                        >
                        You can also request for the full Eco-Basket design for replication of this product at your own location. <LinkBox as="span" cursor={"pointer"} color= "blue"> Click here</LinkBox>.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Box>

            <Box bgColor={"#FAFAFA"}  mt={{ base: "152px", md: "205px" }}   pos={"relative"} >
            <Text
            ml={{ base: "25px", md: "46px" }}
            mr={{ base: "25px", md: "46px" }}
            fontSize={{base: "30px", md: "45px"}}
            fontSize={{base: "20px", md: "25px"}}
            fontWeight="700"
            color={"#595959"}
            position="relative"
            >
            <Image src="/hand.png" position={"absolute"} w={{base: "250px", md: "270.11px"}} zIndex={"-1"} bottom="-85"  ></Image>
            Proud Sponsors
            </Text>

                <SimpleGrid
                    ml={{ base: "25px", md: "46px" }}
                    mr={{ base: "25px", md: "46px" }}
                    mt={{ base: "12px", md: "32px" }}

                    pb="20px"
                    spacing="45px"
                    columns={{ base: 1, md: 5 }}
                
                >
                    <Box>
                        <Center h={"140px"}>
                            <Image src="/oju-res.png" />
                        </Center>
                        <Text
                            mt="20px"
                            textAlign={{ base: "center", md: "center" }}
                            fontWeight= "700"
                            fontSize="20px"
                            color="#000000"
                           
                        >
                               Ojuelegba Restaurant
                        </Text>
                    </Box>
                    <Box>
                        <Center h={"140px"}>
                            <Image src="/abe-igi.png" />
                        </Center>
                        <Text
                            mt="20px"
                            textAlign={{ base: "center", md: "center" }}
                            fontWeight= "700"
                            fontSize="20px"
                            color="#000000"
                           
                        >
                            Abe-Igi Restaurant
                        </Text>
                    </Box>
                    <Box>
                        <Center h={"140px"}>
                            <Image src="/ope.png" />
                        </Center>
                        <Text
                            mt="20px"
                            textAlign={{ base: "center", md: "center" }}
                            fontWeight= "700"
                            fontSize="20px"
                            color="#000000"
                        >
                           My Humble Self
                        </Text>
                    </Box>
                </SimpleGrid>
            </Box>
          
            <Box bgColor={"#F1F9F3"}  opacity="1"    mt={{ base: "152px", md: "205px" }}  pb="20px" >
            <Text
            ml={{ base: "25px", md: "46px" }}
            mr={{ base: "25px", md: "46px" }}
            fontSize={{base: "30px", md: "45px"}}
            fontSize={{base: "20px", md: "25px"}}
            fontWeight="700"
            color={"#595959"}
            position="relative"
            >
            <Image src="/leaf3.png" position={"absolute"} w={{base: "250px", md: "300px"}} zIndex={"-1"}  bottom="-95" left={"-5"}  ></Image>
            Contact
            </Text>
            
                <HStack
                    ml={{ base: "25px", md: "46px" }}
                    mr={{ base: "25px", md: "46px" }}
                    mt={{ base: "12px", md: "32px" }}
                    fontWeight = "300"
                    color = "#000000"
                    fontSize={"20px"}
      
                >
                <RiPhoneFill />
                   <Text>+2348068840125</Text>
                </HStack>
            
                <HStack
                    ml={{ base: "25px", md: "46px" }}
                    mr={{ base: "25px", md: "46px" }}
                    mt={{ base: "12px", md: "12px" }}
                    fontWeight = "300"
                    color = "#000000"
                    fontSize={"20px"}
      
                >
                <RiMailFill/>
                   <Text>adelekeopeyemi16@yahoo.com</Text>
                </HStack>
            </Box>
        </MainLayout>
    );
}
