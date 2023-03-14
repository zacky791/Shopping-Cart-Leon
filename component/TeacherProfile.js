import React from "react";
import { Avatar, Box, Grid, Select, Text, VStack } from "@chakra-ui/react";

//NOTE - the solution is without premature optimization we can just create state
// of active keys then use it as an id for which value should be shown in modal
// 1- you can try using loop for active keys but first need to declare state
// 2- pasing the active keys through the props

const TeacherProfile = (props) => {
  //transferdatatoparentfromchild(index)
  const changeHandler = (e) => {
    const index = props.index;
    props.handlingData(index);
    props.handlingChildren(e.target.value);
    props.open();
  };

  return (
    <>
      <Grid
        // columns=5}
        // spacing=20}
        gap="20px"
        mt="40px"
        alignItems="center"
        justifyItems="center"
        bg="white"
        boxShadow="xl"
        borderRadius="20px"
        padding="20px"
        templateColumns="70px 150px 250px 100px auto"
      >
        <Avatar src={props.profilePicture} size="lg" />
        <Box textAlign="center" wordBreak="break-word" maxW="150px">
          <Text>{props.name}</Text>
        </Box>
        <Box wordBreak="break-word" maxW="150px">
          <Text>Graduated from {props.university}</Text>
          <Text>Excellent atitude</Text>
        </Box>
        <VStack>
          <Text>{props.dayAvailable}</Text>
          <Text>
            {props.timeStart} - {props.timeEnd}
          </Text>
        </VStack>
        <Select placeholder="Enroll class" w="140px" bgColor="purple.300" onChange={changeHandler}>
          <option value="Samad">Samad</option>
          <option value="Ilyias">Ilyias</option>
          <option value="Matmen">Matmen</option>
        </Select>
      </Grid>
    </>
  );
};

export default TeacherProfile;
