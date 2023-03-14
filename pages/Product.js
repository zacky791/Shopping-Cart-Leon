import React from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { Box, Container, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import RouterButton from "@/component/ui/RouterButton";
import { IoGameController } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { IoTime } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { FaSchool } from "react-icons/fa";

export default function Product() {
  return (
    <>
      <Header />
      <Container display="flex" mt="30px" maxW="1050px" mb="20px">
        <Box>
          <Box boxSize="sm">
            <Image src="/assets/Tutor.webp" borderRadius="20px" />
          </Box>
        </Box>

        <HStack ml="40px">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="20px"
            padding="20px"
            gap="20px"
            bg="#ffffff"
            boxShadow="xl"
          >
            <VStack>
              <Heading>Math Lesson</Heading>
              <Text fontWeight="bold" mb="5px" fontSize="35px">
                RM 299
              </Text>
              <Flex gap="20px">
                <Text>4.5/5 ⭐</Text>
                <Text>10 students enroll 🧒</Text>
                <Text>4 classes available 🏫</Text>
              </Flex>
            </VStack>

            <RouterButton
              bgColor="purple.600"
              color="white"
              _hover="none"
              href="/enrollClasses"
              display="flex"
              gap="10px"
            >
              <FaSchool /> Go to classroom available
            </RouterButton>

            <Text fontSize="12px">We Offer A Generous Refund Policy*</Text>
          </Flex>
        </HStack>
      </Container>

      <Container
        maxW="1050px"
        bgColor="purple.100"
        borderRadius="20px"
        padding="20px"
        display="flex"
        justifyContent="space-around"
        bg="#ffffff"
        boxShadow="xl"
      >
        <Box>
          <Heading fontSize="20px" mb="10px">
            Class Description
          </Heading>
          <Box>
            <Text fontSize="17px" p="3px" display="flex" gap="8px" alignItems="center">
              <BsFillCalendarWeekFill /> 3 Sessions per week for 4 weeks
            </Text>
            <Text fontSize="17px" p="3px" display="flex" gap="8px" alignItems="center">
              <IoTime /> Estimed 1 hour per 1 Session
            </Text>
            <Text fontSize="17px" p="3px" display="flex" gap="8px" alignItems="center">
              <BsFillSunFill /> Morning and evening classes
            </Text>
          </Box>
        </Box>

        <Box w="380px">
          <Heading fontSize="20px" mb="10px">
            What you will learn
          </Heading>
          <Box>
            <Text fontSize="17px" p="3px" display="flex" gap="8px" alignItems="start">
              <TiTick size="40px" style={{ height: "28px" }} /> Enhance logical reasoning and problem-solving
              abilities by engaging in enjoyable puzzles and games.
            </Text>
            <Text fontSize="17px" p="3px" display="flex" gap="8px">
              <TiTick size="35px" style={{ height: "28px" }} /> Develop critical thinking proficiency to assess
              arguments and make informed inferences.
            </Text>
          </Box>
        </Box>

        <Box>
          <Heading fontSize="20px" mb="10px">
            This course includes:
          </Heading>
          <Box>
            <Text fontSize="17px" p="3px" display="flex" alignItems="center" gap="8px">
              <IoGameController /> 120+ Interactive Activities
            </Text>
            <Text fontSize="17px" p="3px" display="flex" alignItems="center" gap="8px">
              <SiGoogleclassroom /> 8 Class Sessions
            </Text>
            <Text fontSize="17px" p="3px" display="flex" alignItems="center" gap="8px">
              <IoTime /> 160+ Minutes of Class Time
            </Text>
            <Text fontSize="17px" p="3px" display="flex" alignItems="center" gap="8px">
              <FaChalkboardTeacher /> 1 Caring and Qualified Tutor
            </Text>
          </Box>
        </Box>
      </Container>

      <Footer />
    </>
  );
}
