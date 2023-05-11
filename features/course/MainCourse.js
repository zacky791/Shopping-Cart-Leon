import React from "react";
import { RouterButton, AiFillStar } from "../../component/ui";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Description from "./Description";

const MainCourse = ({ courseTitle, courseImage, courseDescription, courseTag, courseKey }) => {
  return (
    <>
      <Container display="flex" mt="30px" mb="20px" maxW="100%" gap="15px" justifyContent="center">
        <Flex
          flexDirection="column"
          borderRadius="20px"
          padding="30px"
          px="40px"
          gap="20px"
          boxShadow="xl"
          width="53%"
          justifyContent="center"
          bg="white"
        >
          <Box>
            <Heading as="h1">{courseTitle}</Heading>
          </Box>
          <Text>{courseDescription}</Text>
          <Flex gap="7px">
            {courseTag.map((tag, index) => (
              <Text
                key={index}
                maxwidth="100%"
                paddingX="10px"
                paddingY="4px"
                bg="purple.200"
                textAlign="center"
                borderRadius="10px"
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="14px"
              >
                {tag}
              </Text>
            ))}
          </Flex>

          <Flex gap="20px">
            <Text fontWeight="bold">4.5/5 ⭐</Text>
            <Text>10 Students Enroll 🧒</Text>
            <Text>4 Classes Available 🏫</Text>
            <Text>3 - 8 Years Old 🙋‍♂️</Text>
          </Flex>

          <Box>
            <Text fontWeight="bold" fontSize="25px" mb="2px">
              RM 299.00
            </Text>
            <Text fontSize="12px" color="808da1">
              We offer a generous refund policy
            </Text>
          </Box>
        </Flex>
        <Box>
          <Image
            src={`https://backend.of.leonclassroom.com/assets/${courseImage}`}
            borderRadius="20px"
            boxShadow="2xl"
            boxSize="390px"
            objectFit="cover"
            margin="auto"
          />
          <RouterButton
            href={{ pathname: "/enroll-class", query: { course_id: courseKey } }}
            height="50px"
            width="390px"
            color="white"
            gap="10px"
            mt="20px"
            display="flex"
            colorScheme="purple"
          >
            <AiFillStar fontSize="20px" /> Go To Available Classes
          </RouterButton>
        </Box>
      </Container>
      <Description />
    </>
  );
};

export default MainCourse;
