import React, { useState } from "react";
import RouterButton from "@/component/ui/RouterButton";
import {
  Button,
  ButtonGroup,
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
// import child1 from "../assets/test1.webp";

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
      <Grid
        gap="20px"
        mt="20px"
        alignItems="center"
        justifyItems="center"
        bg="white"
        boxShadow="xl"
        borderRadius="20px"
        padding="20px"
        templateColumns="200px 120px 250px 100px 230px" //or you can use auto to autofill
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
            Enroll Class
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
                src="/assets/test1.webp"
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
              <Image boxSize="2rem" borderRadius="full" src="/assets/test1.webp" alt="Simon the pensive" mr="12px" />
              <Text>Azizul</Text>
            </MenuItem>

            <MenuItem
              minH="40px"
              onClick={() => {
                changeHandler("Matmen");
              }}
            >
              <Image boxSize="2rem" borderRadius="full" src="/assets/test1.webp" alt="Simon the pensive" mr="12px" />
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
    </>
  );
};

export default TeacherProfile;
