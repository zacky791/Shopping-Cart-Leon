import React from "react";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { RouterButton, BsFillSunFill, BsFillCalendarWeekFill, AiFillStar, IoTime } from "../../component/ui";

const MainProduct = () => {
  return (
    <>
      <Container display="flex" mt="30px" mb="20px" maxW="930px" gap="13px">
        <Flex
          flexDirection="column"
          borderRadius="20px"
          padding="20px"
          gap="10px"
          bg="white"
          boxShadow="xl"
          width="500px"
        >
          <Box>
            <Heading>Math Lesson</Heading>
          </Box>
          <Box>
            <Text fontSize="20px" mb="10px">
              Class Description
            </Text>
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
            <Text>10 Students Enroll 🧒</Text>
            <Text>4 Classes Available 🏫</Text>
          </Flex>

          <RouterButton colorScheme="purple" color="white" href="/enroll-class" display="flex" gap="10px">
            <AiFillStar fontSize="20px" /> Go To Classroom Available
          </RouterButton>
          <Text fontWeight="bold" fontSize="25px">
            RM 299
          </Text>

          <Text fontSize="12px" color="808da1">
            We offer a generous refund policy
          </Text>
        </Flex>
        <Box boxSize="sm">
          <Image src="/assets/Tutor.webp" borderRadius="20px" boxShadow="xl" />
        </Box>
      </Container>
    </>
  );
};

export default MainProduct;
