import React from "react";
import Link from "next/link";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

const AllCourses = ({
  courseId,
  courseTitle,
  courseSubtitle,
  courseImage,
  courseOutline,
  courseTag,
  courseAgeMin,
  courseAgeMax,
}) => {
  return (
    <>
      <Container maxW="400px" borderRadius="20px" padding="30px" px="40px" bg="white" boxShadow="xl" mt="30px">
        <Box position="relative">
          <Link href={`/course?course_id=${courseId}`}>
            <Image
              src={`https://backend.of.leonclassroom.com/assets/${courseImage}`}
              borderRadius="20px"
              boxShadow="xl"
              boxSize="210px"
              width="300px"
              objectFit="cover"
              margin="auto"
              mb="20px"
            />
            <Flex
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              py="2"
              px="3"
              borderRadius="20px"
              height="210px"
              justifyContent="space-between"
              alignItems="center"
              width="300px"
              ml="10px"
              cursor="pointer"
              bg="purple.400"
              opacity="0"
              transition="opacity 0.2s"
              _hover={{ opacity: 0.6 }}
            >
              <Text color="white" fontWeight="extrabold" ml="90px">
                View Details
              </Text>
            </Flex>
          </Link>
        </Box>

        <Heading as="h1" fontSize="20px" mb="10px">
          {courseTitle} {courseSubtitle}
        </Heading>
        <Text mb="10px">
          {courseOutline
            .replace(/\*/g, "")
            .split("\n")
            .map((line, index) => (
              <Text key={index} mb="10px">
                {line}
              </Text>
            ))}
        </Text>
        <Text mb="8px">
          {courseAgeMin} - {courseAgeMax} Years Old
        </Text>
        <Text mb="8px">12 Sessions 1 Per Week</Text>
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
      </Container>
    </>
  );
};

export default AllCourses;
