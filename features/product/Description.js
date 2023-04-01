import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { IoGameController, SiGoogleclassroom, IoTime, FaChalkboardTeacher, TiTick } from "../../component/ui";

const Description = () => {
  return (
    <>
      <Container
        maxW="900px"
        bgColor="purple.100"
        borderRadius="20px"
        padding="20px"
        display="flex"
        bg="white"
        boxShadow="xl"
        gap="110px"
      >
        <Box w="380px">
          <Heading fontSize="20px" mb="10p  x">
            What You Will Learn
          </Heading>
          <Box>
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
          <Heading fontSize="20px" mb="10px">
            This Course Includes:
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
    </>
  );
};

export default Description;
