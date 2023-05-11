import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import {
  IoGameController,
  SiGoogleclassroom,
  IoTime,
  FaChalkboardTeacher,
  TiTick,
  BsFillSunFill,
  BsFillCalendarWeekFill,
} from "../../component/ui";

const Description = () => {
  return (
    <>
      <Container
        maxW="1200px"
        borderRadius="20px"
        padding="30px"
        px="40px"
        display="flex"
        bg="white"
        boxShadow="xl"
        gap="80px"
      >
        <Box w="380px">
          <Heading as="h1" fontSize="20px" mb="10p  x">
            What You Will Learn
          </Heading>
          <Box mt="7px">
            <Text fontSize="17px" p="3px" display="flex" gap="8px" alignItems="start">
              <TiTick size="40px" style={{ height: "28px" }} /> Enhance logical reasoning and problem-solving abilities
              by engaging in enjoyable puzzles and games.
            </Text>
            <Text fontSize="17px" p="3px" display="flex" gap="8px">
              <TiTick size="35px" style={{ height: "28px" }} /> Develop critical thinking proficiency to assess
              arguments and make informed inferences.
            </Text>
          </Box>
        </Box>

        <Box>
          <Heading as="h1" fontSize="20px" mb="10px">
            This Course Includes
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

        <Box>
          <Heading as="H1" fontSize="20px" mb="10px">
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
      </Container>
    </>
  );
};

export default Description;
