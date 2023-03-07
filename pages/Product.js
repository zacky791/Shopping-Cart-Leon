import React from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { Box, Button, Container, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import RouterButton from "@/component/ui/RouterButton";

export default function Product() {
  return (
    <>
      <Header />
      <Container display={"flex"} mt={"30px"} maxW="1050px" mb={"20px"}>
        <Box>
          <Heading mb={"15px"}>Math Lesson</Heading>
          <Box boxSize={"sm"}>
            <Image src="/assets/Tutor.webp" borderRadius={"20px"} />
          </Box>
        </Box>

        <HStack ml={"40px"}>
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"#EBDDFB"}
            borderRadius={"20px"}
            padding={"20px"}
            gap={"20px"}
          >
            <VStack>
              <Text fontWeight={"bold"} mb={"5px"} fontSize={"30px"}>
                RM 299
              </Text>
              <Flex gap={"20px"}>
                <Text>4.5/5 ⭐</Text>
                <Text>10 students enroll 🧒</Text>
                <Text>4 classes available 🏫</Text>
              </Flex>
            </VStack>

            <RouterButton bgColor={"purple.600"} color={"white"} _hover={"none"} href={"/EnrollClasses"}>
              Go to classroom available
            </RouterButton>

            <Text>We Offer A Generous Refund Policy*</Text>
          </Flex>
        </HStack>
      </Container>

      <Container maxW="1050px" bgColor={"purple.100"} borderRadius={"20px"} padding={"20px"}>
        <Heading fontSize={"26px"} mb={"10px"}>
          Class Description
        </Heading>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box gap={20}>
            <Text fontSize={"17px"}>- 3 Season per week</Text>
            <Text fontSize={"17px"}>- 1 Season 1 hour</Text>
            <Text fontSize={"17px"}>- You will learn basic math</Text>
          </Box>

          <Box>
            <Text fontSize={"17px"}>- 3 Season per week</Text>
            <Text fontSize={"17px"}>- 1 Season 1 hour</Text>
            <Text fontSize={"17px"}>- You will learn basic math</Text>
          </Box>
        </Box>
      </Container>

      <Footer />
    </>
  );
}
