import React, { useEffect, useState } from "react";
import TutorProfile from "../features/profile-tutor/TutorProfile";
import { Header, Footer } from "../component/ui";
import { Center, Grid, Text } from "@chakra-ui/react";

const EnrollClass = () => {
  const axios = require("axios");
  const [tutorData, setTutorData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutorData = async () => {
      try {
        //to get id class
        const courseId = new URLSearchParams(window.location.search).get("course_id");

        //to retrive detail based on id class
        const activeClass = await axios.get(
          `https://backend.of.leonclassroom.com/items/classes?filter={"course":${courseId}}`
        );

        //to get tutor id
        const tutorId = activeClass.data.data.map((id) => id.tutor);

        //to get all user
        const allUser = await axios.get("https://backend.of.leonclassroom.com/users");

        //to filter teacher based on class
        const tutor = allUser.data.data.filter((t) => tutorId.includes(t.id));

        setTutorData(tutor);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchTutorData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  } else if (error) {
    return <Text>Error Fetching Data: {error.message}</Text>;
  }
  return (
    <>
      <Header />
      <Center minHeight="70vh">
        <Grid>
          {tutorData.map((tutor) => (
            <TutorProfile
              key={tutor.id}
              firstName={tutor.first_name}
              lastName={tutor.last_name}
              profilePicture={tutor.avatar}
              university={tutor.university}
              dayAvailable={tutor.dayAvailable}
              experience={tutor.experience}
            />
          ))}
        </Grid>
      </Center>
      <Footer />
    </>
  );
};

export default EnrollClass;
