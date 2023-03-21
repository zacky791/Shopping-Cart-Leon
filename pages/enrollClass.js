import Footer from "@/component/Footer";
import Header from "@/component/Header";
import TeacherProfile from "@/component/TeacherProfile";
import React from "react";
import data from "../data/data.json";

const EnrollClass = () => {
  return (
    <>
      <Header />
      {data.teacherInformation.map((data, index) => (
        <TeacherProfile
          key={index}
          name={data.name}
          profilePicture={data.profilePicture}
          dayAvailable={data.dayAvailable}
          timeStart={data.timeAvailable.start}
          timeEnd={data.timeAvailable.end}
        />
      ))}
      <Footer />
    </>
  );
};

export default EnrollClass;
