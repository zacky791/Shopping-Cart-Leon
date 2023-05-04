import React, { useEffect, useState } from "react";
import TutorProfileHorizontal from "../features/profile-tutor/TutorProfileHorizontal";
import { Header, Footer } from "../component/ui";
import { Box, Center, Flex, Grid } from "@chakra-ui/react";
import data from "../data/data.json";
import TutorProfile2 from "@/features/profile-tutor/TutorProfile2";

const EnrollClass = () => {
  const axios = require("axios");

  const [tutorData, setTutorData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // const limitedTutorData = tutorData?.slice(0, 6);

  useEffect(() => {
    const fetchTutorData = async () => {
      try {
        const response = await axios.get("https://backend.of.leonclassroom.com/users");
        setTutorData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchTutorData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error Fetching Data: {error.message}</div>;
  }
  return (
    <>
      <Header />
      <Center>
        <Grid>
          {data.tutorInformation.map((tutorProfile, index) => (
            <TutorProfileHorizontal
              key={index}
              name={tutorProfile.name}
              profilePicture={tutorProfile.profilePicture}
              university={tutorProfile.university}
              dayAvailable={tutorProfile.dayAvailable}
              timeStart={tutorProfile.timeAvailable.start}
              timeEnd={tutorProfile.timeAvailable.end}
            />
          ))}
          {/* {tutorData.data.map((tutorData, index) => (
            <TutorProfileHorizontal
              key={index}
              tutorImage={tutorData.avatar}
              tutorFirstName={tutorData.first_name}
              tutorLastName={tutorData.last_name}
              tutorDescription={tutorData.description}
              tutorLocation={tutorData.location}
            />
          ))} */}
        </Grid>
      </Center>
      <Footer />
    </>
  );
};

export default EnrollClass;
