import React, { useEffect, useState } from "react";
import Header from "@/component/Header";
import TeacherProfile from "@/component/TeacherProfile";
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
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Footer from "@/component/Footer";
import data from "../data/data.json";
// import useStore from "@/util/useStore"; why @?
import ModalTeacherProfile from "@/component/ModalTeacherProfile";

const EnrollClasses = () => {
  //for modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  //for handling data from child component
  const [teacherId, setTeacherId] = useState();
  const handlingData = (teacherSelectedId) => {
    setTeacherId(teacherSelectedId);
  };

  //state for which children being picked
  const [pickedChildren, setpickedChildren] = useState();
  const handlingChildren = (pickChildren) => {
    setpickedChildren(pickChildren);
  };

  useEffect(() => {
    console.log(teacherId);
  }, [teacherId]);
  return (
    <>
      <Header />
      <Container maxW="1050px" mt="40px">
        <UnorderedList listStyleType="none">
          {data.teacherInformation.map((item, index) => (
            <ListItem key={item.id}>
              <TeacherProfile
                name={item.name}
                university={item.university}
                profilePicture={item.profilePicture}
                dayAvailable={item.dayAvailable}
                timeStart={item.timeAvailable.start}
                timeEnd={item.timeAvailable.end}
                open={() => onOpen()}
                index={index}
                handlingData={handlingData}
                handlingChildren={handlingChildren}
              />
            </ListItem>
          ))}
        </UnorderedList>

        <ButtonGroup mt="35px" display="flex" justifyContent="space-evenly">
          <RouterButton href="/" variant="outline" colorScheme="purple">
            Back
          </RouterButton>
        </ButtonGroup>

        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent mt="250px">
            <ModalHeader fontWeight="bold">Checkout</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {data.teacherInformation.map((item, index) => {
                if (item.id === teacherId) {
                  return (
                    <ModalTeacherProfile
                      key={index}
                      name={item.name}
                      profilePicture={item.profilePicture}
                      dayAvailable={item.dayAvailable}
                      timeStart={item.timeAvailable.start}
                      timeEnd={item.timeAvailable.end}
                      pickedChildren={pickedChildren}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </ModalBody>

            <ModalFooter>
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
      <Footer />
    </>
  );
};

export default EnrollClasses;
