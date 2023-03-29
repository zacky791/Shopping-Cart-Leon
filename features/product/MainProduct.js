import React from "react";
import { RouterButton } from "../../component/ui";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Box, Container, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { IoTime } from "react-icons/io5";

const MainProduct = () => {
  return (
    <>
      <Container display="flex" mt="30px" maxW="930px" mb="20px">
        <HStack mr="65px">
          <Flex flexDirection="column" borderRadius="20px" padding="20px" gap="12px" bg="white" boxShadow="xl">
            <Box>
              <Heading>Math Lesson</Heading>
              <Text fontWeight="bold" fontSize="25px">
                RM 299
              </Text>
            </Box>
            <Box>
              <Heading fontSize="20px" mb="10px">
                Class Description
              </Heading>
              <Box>
                <Text fontSize="17px" p="3px" display="flex" gap="8px" alignItems="center">
                  <BsFillCalendarWeekFill /> 3 Sessions per week for 4 weeks
                </Text>
                <Text fontSize="17px" p="3px" display="flex" gap="8px" alignItems="center">
                  <IoTime /> Estimate 1 hour per 1 Session
                </Text>
                <Text fontSize="17px" p="3px" display="flex" gap="8px" alignItems="center">
                  <BsFillSunFill /> Morning and evening classes
                </Text>
              </Box>
            </Box>
            <Flex gap="20px">
              <Text>4.5/5 ⭐</Text>
              <Text>10 students enroll 🧒</Text>
              <Text>4 classes available 🏫</Text>
            </Flex>

            <RouterButton colorScheme="purple" color="white" href="/enroll-class" display="flex" gap="10px">
              <AiFillStar fontSize="20px" /> Go To Classroom Available
            </RouterButton>

            <Text fontSize="12px" color="808da1">
              We offer a generous refund policy
            </Text>
          </Flex>
        </HStack>
        <Box boxSize="sm">
          <Image src="/assets/Tutor.webp" borderRadius="20px" boxShadow="lg" />
        </Box>
      </Container>
    </>
  );
};

export default MainProduct;
