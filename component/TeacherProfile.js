import {
  Avatar,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const TeacherProfile = () => {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} gap={"20px"} justifyContent={"space-evenly"} mt={"40px"}>
        <Avatar />
        <Box>
          <Text>Ahmad maslan</Text>
        </Box>
        <Box>
          <Text>Graduated from oxford</Text>
          <Text>Excellent atitude</Text>
        </Box>
        <Box>
          <Text>Monday-Friday</Text>
          <Text>2pm - 4pm</Text>
        </Box>
        <Select placeholder="Enroll class" w={"140px"} bgColor={"purple.300"}>
          <option value="option1">Samad</option>
          <option value="option2">Ilyias</option>
          <option value="option3">matmen</option>
        </Select>
      </Box>
    </>
  );
};

export default TeacherProfile;
