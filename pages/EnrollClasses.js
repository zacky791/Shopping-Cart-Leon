import React from "react";
import Header from "@/component/Header";
import TeacherProfile from "@/component/TeacherProfile";
import RouterButton from "@/component/ui/RouterButton";
import {
  Button,
  ButtonGroup,
  Container,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Footer from "@/component/Footer";

const EnrollClasses = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Header />
      <Container
        maxW={"1050px"}
        mt={"70px"}
        border={"1px"}
        padding={"15px"}
        borderRadius={"20px"}
        bgColor={"purple.100"}
      >
        <TeacherProfile />
        <TeacherProfile />
        <TeacherProfile />
        <TeacherProfile />
        <TeacherProfile />

        <ButtonGroup mt={"35px"} display={"flex"} justifyContent={"space-evenly"}>
          <RouterButton href={"/"}>Back</RouterButton>
          <Button onClick={onOpen} bgColor={"purple.300"} _hover={"none"}>
            Proceed to checkout
          </Button>
          {/* <RouterButton href={"/"} bgColor={"purple.300"}>
            Proceed to checkout
          </RouterButton> */}
        </ButtonGroup>

        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent mt={"250px"}>
            <ModalHeader fontWeight={"bold"}>Confirmation Information</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Class: Math Basic</Text>
              <Text>Time: Monday Evening 2pm-4pm</Text>
              <Text>Tutor : Encik Zakaria </Text>
            </ModalBody>

            <ModalFooter>
              <ButtonGroup>
                <Button onClick={onClose}>Back</Button>
                <RouterButton bgColor={"purple.400"} _hover={"none"} href={"/Checkout"}>
                  Confirm
                </RouterButton>
              </ButtonGroup>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
      <Footer />
    </>
  );
};

export default EnrollClasses;
