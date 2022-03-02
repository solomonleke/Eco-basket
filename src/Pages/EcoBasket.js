import {
    Box,
    Center,
    Image,
    SimpleGrid,
    Spacer,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";
import MainLayout from "../Layouts/Index";
import Seo from "../Utils/Seo";

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
                        fontSize={{ base: "65px", md: "121px" }}
                        textAlign={{ base: "center", md: "left" }}
                        backgroundImage="url('/text-bg.png')"
                        fontWeight="800"
                        bgClip={"text"}
                    >
                        <Image
                            src="/leaf.png"
                            w={{ base: "55px", md: "80px" }}
                            position="absolute"
                            top={{ base: "2px", md: "15px" }}
                            left={{ base: "-1px", md: "-15px" }}
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
                        <Center h={"120px"}>
                            <Image src="/icon1.png" />
                        </Center>
                        <Text
                            mt="15px"
                            textAlign={{ base: "center", md: "center" }}
                            maxW={{ base: "100%", md: "xs" }}
                        >
                            Ecobasket provides accessible means of waste disposal.
                        </Text>
                    </Box>
                    <Box
                       
                    >
                        <Center h={"120px"}>
                            <Image src="/icon2.png" />
                        </Center>
                        <Text
                            mt="15px"
                            textAlign={{ base: "center", md: "center" }}
                            maxW={{ base: "100%", md: "xs" }}
                        >
                            it also sensitizes people on the need to keep their environment
                            clean.
                        </Text>
                    </Box>
                    <Box
                      
                    >
                        <Center h={"120px"}>
                            <Image src="/icon3.png" />
                        </Center>
                        <Text
                            mt="15px"
                            textAlign={{ base: "center", md: "center" }}
                            maxW={{ base: "100%", md: "xs" }}
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
          
            <Box bgColor={"#F1F9F3"} opacity="1">
            <Text
            mt={{ base: "32px", md: "105px" }}
            ml={{ base: "25px", md: "46px" }}
            mr={{ base: "25px", md: "46px" }}
            fontSize={{base: "20px", md: "25px"}}
            fontWeight="700"
            color={"#595959"}
                position="relative"
            >
            <Image src="/glob.png" position={"absolute"} w="271px" zIndex={"21"} bottom="-30"></Image>
            How you Can Support
            </Text>

                <SimpleGrid
                    ml={{ base: "25px", md: "46px" }}
                    mr={{ base: "25px", md: "46px" }}
                    mt={{ base: "12px", md: "32px" }}

                    p="20px"
                    spacing="45px"
                    columns={{ base: 1, md: 3 }}
                   
                >
                    <Box>
                        <Center h={"140px"}>
                            <Image src="/icon4.png" />
                        </Center>
                        <Text
                        fontSize={{base: "15px", md: "20px"}}
                        fontWeight="700"
                        color={"#000000"}
                        textAlign={{ base: "center", md: "center" }}
                        mt="20px"
                        >Eco-Ambassador</Text>
                        <Text
                            mt="10px"
                            textAlign={{ base: "center", md: "center" }}
                           
                        >
                        You can simply avoid littering the environment and encourage others to do same.
                        </Text>
                    </Box>
                    <Box>
                        <Center h={"140px"}>
                            <Image src="/icon5.png" />
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
                            textAlign={{ base: "center", md: "center" }}
                           
                        >
                        You can make donation to this cause and get more Eco-baskets out there. Click here.
                        </Text>
                    </Box>
                    <Box>
                        <Center h={"140px"}>
                            <Image src="/icon6.png" />
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
                            textAlign={{ base: "center", md: "center" }}
                           
                        >
                        You can also request for the full Eco-Basket design for replication of this product at your own location. Click here.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Box>

            <Box bgColor={"#F1F9F3"} opacity="1">
            <Text
            mt={{ base: "32px", md: "155px" }}
            ml={{ base: "25px", md: "46px" }}
            mr={{ base: "25px", md: "46px" }}
            fontSize={{base: "30px", md: "45px"}}
            fontSize={{base: "20px", md: "25px"}}
            fontWeight="700"
            color={"#595959"}
                position="relative"
            >
            <Image src="/glob.png" position={"absolute"} w="271px" zIndex={"21"} bottom="-30"></Image>
            Proud Sponsors
            </Text>

                <SimpleGrid
                    ml={{ base: "25px", md: "46px" }}
                    mr={{ base: "25px", md: "46px" }}
                    mt={{ base: "12px", md: "32px" }}

                    p="20px"
                    spacing="45px"
                    columns={{ base: 1, md: 3 }}
                   
                >
                    <Box>
                        <Center h={"140px"}>
                            <Image src="/icon4.png" />
                        </Center>
                        <Text
                            mt="20px"
                            textAlign={{ base: "center", md: "center" }}
                           
                        >
                            ...and it is completely manufactured with recycled waste.
                        </Text>
                    </Box>
                    <Box>
                        <Center h={"140px"}>
                            <Image src="/icon5.png" />
                        </Center>
                        <Text
                            mt="20px"
                            textAlign={{ base: "center", md: "center" }}
                           
                        >
                            ...and it is completely manufactured with recycled waste.
                        </Text>
                    </Box>
                    <Box>
                        <Center h={"140px"}>
                            <Image src="/icon6.png" />
                        </Center>
                        <Text
                            mt="20px"
                            textAlign={{ base: "center", md: "center" }}
                           
                        >
                            ...and it is completely manufactured with recycled waste.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Box>
        </MainLayout>
    );
}
