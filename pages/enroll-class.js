import { Header, Footer } from "../component/ui";
import TeacherProfile from "@/features/profile-teacher/TeacherProfile";
import { Container } from "@chakra-ui/react";
import React from "react";
import data from "../data/data.json";

//change data to much more specific
const EnrollClass = () => {
  return (
    <>
      <Header />
      <Container maxW="1050px" mt="20px">
        {data.teacherInformation.map((data, index) => (
          <TeacherProfile
            key={index}
            name={data.name}
            profilePicture={data.profilePicture}
            university={data.university}
            dayAvailable={data.dayAvailable}
            timeStart={data.timeAvailable.start}
            timeEnd={data.timeAvailable.end}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default EnrollClass;
