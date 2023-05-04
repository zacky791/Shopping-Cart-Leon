import React from "react";
import { useState } from "react";
import { RouterButton, AiFillStar } from "../../component/ui";
import { Box, Container, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Description from "./Description";

const MainCourse = ({ courseTitle, courseImage, index, course }) => {
  //for showing more courses
  const courses = ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
  const [visibleCourses, setVisibleCourses] = useState(courses.slice(0, 5));
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    setVisibleCourses(courses);
    setShowMore(false);
  };
  return (
    <>
      <Container display="flex" mt="30px" mb="20px" maxW="100%" gap="13px" justifyContent="center">
        <Flex
          flexDirection="column"
          borderRadius="20px"
          padding="30px"
          px="40px"
          gap="20px"
          boxShadow="xl"
          width="53%"
          bg="linear-gradient(180deg, rgba(156, 39, 176, 0.2) 20%, #FFFFFF)"
          justifyContent="center"
        >
          <Box>
            <Heading as="h1">{courseTitle}</Heading>
          </Box>
          <Text>
            Learn about logic and math using fun puzzles and games! The course is designed to teach children how to
            think critically and solve problems using logical reasoning. Leon Logic is a fun and engaging way for
            children to learn essential skills that will help them in school and in life.
          </Text>
          <Flex gap="20px">
            <Text fontWeight="bold">4.5/5 ⭐</Text>
            <Text>10 Students Enroll 🧒</Text>
            <Text>4 Classes Available 🏫</Text>
            <Flex gap="4px">
              <Text width="65px" padding="3px" bg="purple.200" textAlign="center" borderRadius="20px">
                Logic
              </Text>
              <Text width="120px" padding="3px" bg="purple.200" textAlign="center" borderRadius="20px">
                Mathematics
              </Text>
              <Text width="65px" padding="3px" bg="purple.200" textAlign="center" borderRadius="20px">
                Puzzle
              </Text>
            </Flex>
          </Flex>

          <Text>Age Recommended: 3 - 8</Text>

          <Flex alignItems="center">
            <Text>Courses: {visibleCourses.join(", ")}</Text>
            {showMore && (
              <Text onClick={handleShowMore} ml="2px" color="purple" cursor="pointer" textDecoration="underline">
                (See more)
              </Text>
            )}
          </Flex>

          <Text fontWeight="bold" fontSize="25px">
            RM 299.00
          </Text>

          <Text fontSize="12px" color="808da1">
            We offer a generous refund policy
          </Text>
        </Flex>
        <Box>
          <Image
            src={`https://backend.of.leonclassroom.com/assets/${courseImage}`}
            borderRadius="20px"
            boxShadow="xl"
            boxSize="390px"
            objectFit="cover"
            margin="auto"
          />
          <RouterButton
            colorScheme="purple"
            height="50px"
            width="390px"
            color="white"
            href="/enroll-class"
            display="flex"
            gap="10px"
            mt="20px"
            _hover={{ boxShadow: "0px 0px 10px #8A2BE2", bg: "#8A2BE2" }}
          >
            <AiFillStar fontSize="20px" /> Go To Available Classes
          </RouterButton>
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
