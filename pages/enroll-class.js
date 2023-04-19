import React, { useEffect, useState } from "react";
import TutorProfile from "../features/profile-tutor/TutorProfile";
import { Header, Footer } from "../component/ui";
import { Center, Grid } from "@chakra-ui/react";
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
        const response = await axios.get("https://backend.dev.leonclassroom.com/users");
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
    return <div>Error fetching data: {error.message}</div>;
  }
  return (
    <>
      <Header />
      <Center>
        <Grid maxW="1050px" mt="20px" templateColumns="repeat(3, 1fr)" gap={6}>
          {data.tutorInformation.map((tutorProfile, index) => (
            <TutorProfile
              key={index}
              name={tutorProfile.name}
              profilePicture={tutorProfile.profilePicture}
              university={tutorProfile.university}
              dayAvailable={tutorProfile.dayAvailable}
              timeStart={tutorProfile.timeAvailable.start}
              timeEnd={tutorProfile.timeAvailable.end}
            />
          ))}
          {tutorData.data.map((tutorData) => {
            <TutorProfile2 tutorData={tutorData} />;
          })}
        </Grid>
      </Center>
      <Footer />
    </>
  );
};

export default EnrollClass;
