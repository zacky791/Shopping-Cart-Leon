import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Footer, Header } from "@/component/ui";
import useAxios from "@/util/useAxios";
import AllCourses from "@/features/explore-courses/AllCourses";

const ExploreCourses = () => {
  const { leonData, loading, error } = useAxios(`https://backend.of.leonclassroom.com/items/courses`);

  if (loading) {
    return <Text>Loading...</Text>; // Render a loading indicator while fetching data, to avoid premature ui and react update it by batch
  } else if (error) {
    return <Text>Error fetching data: {error.message}</Text>; // Render an error message if fetching data fails
  }
  return (
    <>
      <Header />
      <Flex justifyContent="center" gap="50px">
        {leonData.data.map((course) => (
          <Box key={course.id}>
            <AllCourses
              courseId={course.id}
              courseTitle={course.title}
              courseSubtitle={course.subtitle}
              courseImage={course.featured_image}
              courseOutline={course.course_outline}
              courseTag={course.tags}
              courseAgeMin={course.recommended_age_min}
              courseAgeMax={course.recommended_age_max}
            />
          </Box>
        ))}
      </Flex>
      <Footer />
    </>
  );
};

export default ExploreCourses;
