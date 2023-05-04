import { Footer, Header } from "@/component/ui";
import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const ExploreCourses = () => {
  return (
    <>
      <Header />
      <Container
        maxW="400px"
        borderRadius="20px"
        padding="30px"
        px="40px"
        bg="white"
        boxShadow="xl"
        gap="100px"
        mt="30px"
      >
        <Image src="../../assets/defaultPicture.webp" width="200px" mb="15px" mx="auto" />
        <Heading as="H1" fontSize="20px" mb="10px">
          Leon Logic Level 1
        </Heading>
        <Text mb="10px">
          Learn about logic and math using fun puzzles and games!. The course is designed to teach children how to think
          critically and solve problems using logical reasoning. Leon Logic is a fun and engaging way for children to
          learn essential skills that will help them in school and in life.
        </Text>
        <Text mb="8px">3 - 8 Years Old</Text>
        <Text mb="8px">12 Sessions 1 Per Week</Text>
        <Flex gap="4px">
          <Text width="65px" padding="3px" bg="purple.200" textAlign="center" borderRadius="20px" fontWeight="bold">
            Logic
          </Text>
          <Text width="120px" padding="3px" bg="purple.200" textAlign="center" borderRadius="20px" fontWeight="bold">
            Mathematics
          </Text>
          <Text width="65px" padding="3px" bg="purple.200" textAlign="center" borderRadius="20px" fontWeight="bold">
            Puzzle
          </Text>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default ExploreCourses;
