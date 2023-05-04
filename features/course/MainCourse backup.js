import React from "react";
import { Box, Container, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { RouterButton, BsFillSunFill, BsFillCalendarWeekFill, AiFillStar, IoTime } from "../../component/ui";
import Description from "./Description";

const MainCourse = ({ courseTitle, courseImage, index, course, courseDescription }) => {
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
          width="900px"
        >
          <Box>
            <Heading>{courseTitle}</Heading>
          </Box>
          <Box>
            {/* <Text fontSize="20px" mb="10px">
              Class Description
            </Text> */}
            <Text>{courseDescription}</Text>
            <Flex gap="20px">
              <Text fontWeight="bold">4.5/5 ⭐</Text>
              <Text>10 Students Enroll 🧒</Text>
              <Text>4 Classes Available 🏫</Text>
            </Flex>

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

          <Text fontWeight="bold" fontSize="25px">
            RM 299
          </Text>
          <RouterButton colorScheme="purple" color="white" href="/enroll-class" display="flex" gap="10px">
            <AiFillStar fontSize="20px" /> Go To Available Classes
          </RouterButton>

          <Text fontSize="12px" color="gray">
            We offer a generous refund policy
          </Text>
        </Flex>
        <Box boxSize="sm">
          <Image
            src={`https://backend.of.leonclassroom.com/assets/${courseImage}`}
            borderRadius="20px"
            boxShadow="xl"
            boxSize="385px"
            objectFit="cover"
          />
        </Box>
      </Container>
      <Description />
      {index !== course.length - 1 && (
        <Divider borderWidth="1px" borderColor="black" my="40px" width="1000px" mx="auto" />
      )}
    </>
  );
};

export default MainCourse;
