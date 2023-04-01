import React from "react";
import TeacherProfile from "../features/profile-teacher/TeacherProfile";
import { Header, Footer } from "../component/ui";
import { Container } from "@chakra-ui/react";
import data from "../data/data.json";

const EnrollClass = () => {
  return (
    <>
      <Header />
      <Container maxW="1050px" mt="20px">
        {data.teacherInformation.map((teacherProfile, index) => (
          <TeacherProfile
            key={index}
            name={teacherProfile.name}
            profilePicture={teacherProfile.profilePicture}
            university={teacherProfile.university}
            dayAvailable={teacherProfile.dayAvailable}
            timeStart={teacherProfile.timeAvailable.start}
            timeEnd={teacherProfile.timeAvailable.end}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default EnrollClass;
