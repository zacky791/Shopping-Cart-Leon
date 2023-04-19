import React, { useEffect, useState } from "react";
import { Header, Footer } from "../component/ui";
import MainCourse from "../features/course/MainCourse";

export default function Course() {
  const axios = require("axios");

  const [courseData, setCourseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get("https://backend.dev.leonclassroom.com/items/courses");
        setCourseData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCourseData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator while fetching data, to avoid premature ui and react update it by batch
  } else if (error) {
    return <div>Error fetching data: {error.message}</div>; // Render an error message if fetching data fails
  }

  return (
    <>
      <Header />
      {courseData.data.map((course, index) => {
        return <MainCourse key={index} courseTitle={course.title} courseImage={course.featured_image} />;
      })}
      <Footer />
    </>
  );
}
