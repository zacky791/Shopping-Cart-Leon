import React, { useState } from "react";
import { RouterButton } from "../../component/ui";
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  AspectRatio,
  Grid,
} from "@chakra-ui/react";

const TutorProfileHorizontal = ({ name, profilePicture, university, dayAvailable, timeStart, timeEnd }) => {
  //for modal
  const { isOpen: isOpenModalEnroll, onOpen: onOpenEnroll, onClose: onCloseModalEnroll } = useDisclosure();
  const { isOpen: isOpenModalAboutMe, onOpen: onOpenAboutMe, onClose: onCloseModalAboutMe } = useDisclosure();

  //for picking which child is currently active
  const [updateChildValue, setUpdateChildValue] = useState();

  //for which child is being pick
  const changeHandler = (name) => {
    onOpenEnroll();
    setUpdateChildValue(name);
  };

  return (
    <>
      <Grid
        templateColumns="180px 200px 210px 250px"
        alignItems="center"
        boxShadow="xl"
        gap="10px"
        mt="20px"
        w="900px"
        bg="white"
        borderRadius="20px"
        padding="20px"
      >
        <Avatar
          src={profilePicture}
          as="button"
          onClick={onOpenAboutMe}
          _hover={{ boxShadow: "0px 0px 10px #8A2BE2", bg: "#8A2BE2" }}
          boxSize="80px"
          objectFit="cover"
          m="auto"
        />

        <Box wordBreak="break-word">
          <Text>{name}</Text>
          <Text mt="5px">⭐⭐⭐⭐⭐</Text>
        </Box>

        <Box>
          <Text fontWeight="bold">Monday - Tuesday</Text>
          <Text mt="5px">
            {timeStart} - {timeEnd}
          </Text>
        </Box>

        <Menu>
          <MenuButton as={Button} colorScheme="purple" ml="10px" width="170px">
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
                src="/assets/defaultPicture.webp"
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
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="/assets/defaultPicture.webp"
                alt="Simon the pensive"
                mr="12px"
              />
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
                src="/assets/defaultPicture.webp"
                alt="Simon the pensive"
                mr="12px"
              />
              <Text>Matmen</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Grid>

      <Modal blockScrollOnMount={false} isOpen={isOpenModalEnroll} onClose={onCloseModalEnroll}>
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
              <Button onClick={onCloseModalEnroll} variant="outline" colorScheme="purple">
                Cancel
              </Button>
              <RouterButton colorScheme="purple" href="/checkout">
                Proceed to payment
              </RouterButton>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal blockScrollOnMount={false} isOpen={isOpenModalAboutMe} onClose={onCloseModalAboutMe} size="custom">
        <ModalOverlay />
        <ModalContent
          mt="80px"
          sx={{
            width: "800px", // Set the width of the modal content
            borderRadius: "20px",
            backgroundColor: "#f4f7fe",
          }}
        >
          <ModalHeader fontWeight="bold">About Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <>
              <Flex justifyContent="center" alignItems="center" gap="30px">
                <Box
                  boxShadow="xl"
                  padding="30px"
                  borderRadius="20px"
                  width="280px"
                  height="500px"
                  alignItems="center"
                  sx={{ backgroundColor: "#ffffff" }}
                >
                  <Image src={profilePicture} boxSize="230px" objectFit="cover" borderRadius="20px" />
                  <Text mt="15px" fontWeight="bold">
                    My Profile
                  </Text>
                  <Box wordBreak="break-word" maxW="300px" mt="3px">
                    <Flex gap="4px">
                      <Text>Name:</Text>
                      <Text>Ahmad maslan</Text>
                    </Flex>
                    <Flex gap="4px">
                      <Text>Rating:</Text>
                      <Text>⭐⭐⭐⭐</Text>
                    </Flex>
                    <Flex gap="4px">
                      <Text>Age:</Text>
                      <Text>32</Text>
                    </Flex>
                    <Flex gap="4px">
                      <Text>Location:</Text>
                      <Text>London</Text>
                    </Flex>
                    <Text>University: {university}</Text>
                    <Text>Excellent attitude</Text>
                  </Box>
                </Box>

                <Flex flexDirection="column">
                  <Box
                    boxShadow="xl"
                    padding="20px"
                    borderRadius="20px"
                    h="250px"
                    w="400px"
                    sx={{ backgroundColor: "#ffffff" }}
                  >
                    <AspectRatio maxW="560px" height="205px" width="360px">
                      <iframe title="LEON" src="https://www.youtube.com/embed/gkIjOPvTIZU" allowFullScreen />
                    </AspectRatio>
                  </Box>
                  <Box
                    boxShadow="xl"
                    padding="30px"
                    borderRadius="20px"
                    h="225px"
                    w="400px"
                    wordBreak="break-word"
                    mt="20px"
                    sx={{ backgroundColor: "#ffffff" }}
                  >
                    <Text fontWeight="bold">About Me</Text>
                    <Text mt="6px">
                      Hello I am school teacher. For my education background I start my journey at british school in
                      London.Elit labore in sit esse do in consectetur fugiat consectetur elit non veniam. Cupidatat
                      mollit tempor qui
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default TutorProfileHorizontal;
