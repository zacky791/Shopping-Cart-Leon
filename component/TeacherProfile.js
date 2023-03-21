import React, { useState } from "react";
import RouterButton from "@/component/ui/RouterButton";
import {
  Button,
  ButtonGroup,
  Container,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Flex,
  Avatar,
  Box,
  Text,
  Grid,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import child1 from "../public/assets/test1.webp";

const TeacherProfile = ({ name, profilePicture, university, dayAvailable, timeStart, timeEnd }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //for picking which child is currently active
  const [updateChildValue, setUpdateChildValue] = useState();

  const changeHandler = (name) => {
    onOpen();
    setUpdateChildValue(name);
  };

  return (
    <>
      <Container maxW="1050px" mt="40px">
        <Grid
          gap="20px"
          mt="25px"
          alignItems="center"
          justifyItems="center"
          bg="white"
          boxShadow="xl"
          borderRadius="20px"
          padding="20px"
          templateColumns="70px 150px 250px 100px auto"
        >
          <Avatar src={profilePicture} size="lg" />
          <Box textAlign="center" wordBreak="break-word" maxW="150px">
            <Text>{name}</Text>
          </Box>
          <Box wordBreak="break-word" maxW="150px">
            <Text>Graduated from {university}</Text>
            <Text>Excellent attitude</Text>
          </Box>
          <VStack>
            <Text>{dayAvailable}</Text>
            <Text>
              {timeStart} - {timeEnd}
            </Text>
          </VStack>

          <Menu>
            <MenuButton as={Button} colorScheme="purple">
              Enroll class
            </MenuButton>
            <MenuList>
              <MenuItem
                minH="48px"
                onClick={() => {
                  changeHandler("Amin");
                }}
              >
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src={
                    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1679039583~exp=1679040183~hmac=1894bb8ffe1184ae4bfdd1a44dc5d443cbf2913b663a280c34606dfccf55a8c1"
                  }
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <Text>Amin</Text>
              </MenuItem>

              <MenuItem
                minH="40px"
                onClick={() => {
                  changeHandler("Azizul");
                }}
              >
                <Image boxSize="2rem" borderRadius="full" src={child1} alt="Simon the pensive" mr="12px" />
                <Text>Azizul</Text>
              </MenuItem>

              <MenuItem
                minH="40px"
                onClick={() => {
                  changeHandler("Matmen");
                }}
              >
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://placekitten.com/120/120"
                  alt="Simon the pensive"
                  mr="12px"
                />
                <Text>Matmen</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Grid>

        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent mt="250px">
            <ModalHeader fontWeight="bold">Checkout</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <>
                <Flex justifyContent="center" alignItems="center" gap="60px">
                  <Avatar src={profilePicture} size="xl" />

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
                      <Text>{name}</Text>
                      <Text>{dayAvailable}</Text>
                      <Text>
                        {timeStart} -{timeEnd}
                      </Text>
                      <Text>{updateChildValue}</Text>
                    </Box>
                  </Flex>
                </Flex>
              </>
            </ModalBody>
            <ModalFooter display="flex" justifyContent="center" alignItems="center">
              <ButtonGroup>
                <Button onClick={onClose} variant="outline" colorScheme="purple">
                  Cancel
                </Button>
                <RouterButton colorScheme="purple" href="/checkout">
                  Proceed to payment
                </RouterButton>
              </ButtonGroup>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

export default TeacherProfile;
