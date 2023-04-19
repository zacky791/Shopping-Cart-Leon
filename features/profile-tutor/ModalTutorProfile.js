import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const ModalTutorProfile = (props) => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" gap="60px">
        <Avatar src={props.profilePicture} size="xl" />

        <Flex gap="8px">
          <Box fontWeight="bold">
            <Text>Class</Text>
            <Text>Tutor</Text>
            <Text>Date</Text>
            <Text>Time</Text>
            <Text>Child</Text>
          </Box>
          <Box>
            <Text>Math class</Text>
            <Text>{props.name}</Text>
            <Text>{props.dayAvailable}</Text>
            <Text>
              {props.timeStart} - {props.timeEnd}
            </Text>
            <Text>{props.pickedChildren}</Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default ModalTutorProfile;
