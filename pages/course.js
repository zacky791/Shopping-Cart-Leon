import React from "react";
import { Header, Footer } from "../component/ui";
import MainCourse from "../features/course/MainCourse";
import useAxios from "@/util/useAxios";
import { Text } from "@chakra-ui/react";

export default function Course() {
  const courseId = new URLSearchParams(window.location.search).get("course_id");
  const { leonData, loading, error } = useAxios(
    `https://backend.of.leonclassroom.com/items/courses?filter={"id":${courseId}}`
  );

  if (loading) {
    return <Text>Loading...</Text>;
  } else if (error) {
    return <Text>Error fetching data: {error.message}</Text>;
  }

  return (
    <>
      <Header />
      {leonData.data.map((course) => {
        return (
          <>
            <MainCourse
              courseKey={course.id}
              course={course}
              courseTitle={course.title}
              courseImage={course.featured_image}
              courseTag={course.tags}
              courseDescription={course.description}
            />
          </>
        );
      })}
      <Footer />
    </>
  );
}
