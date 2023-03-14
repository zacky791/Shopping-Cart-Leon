import React from "react";
import { Avatar, Flex, Text, VStack } from "@chakra-ui/react";

const ModalTeacherProfile = (props) => {
  return (
    <>
      <VStack>
        <Avatar src={props.profilePicture} size="lg" />

        <Flex>
          <Text>Tutor :</Text>
          <Text>{props.name}</Text>
        </Flex>

        <Flex>
          <Text>Date :</Text>
          <Text>{props.dayAvailable}</Text>
        </Flex>

        <Flex>
          <Text>Time :</Text>
          <Text>
            {props.timeStart} - {props.timeEnd}
          </Text>
        </Flex>

        <Flex>
          <Text>Child :</Text>
          <Text>{props.pickedChildren}</Text>
        </Flex>
      </VStack>
    </>
  );
};

export default ModalTeacherProfile;
