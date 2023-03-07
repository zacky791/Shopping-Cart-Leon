import React from "react";
import { Center, Container, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import RouterButton from "@/component/ui/RouterButton";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

const ThankYouForm = () => {
  return (
    <>
      <Header />
      <Container
        maxW={"600px"}
        mt={"170px"}
        border={"1px"}
        padding={"15px"}
        borderRadius={"20px"}
        bgColor={"purple.100"}
        mb={"250px"}
      >
        <Text textAlign={"center"} fontWeight={"bold"} mb={"15px"}>
          Thank you for purchasing golden package 💕💖
          <br />
          Receipt and details has been sent to their email 📧{" "}
        </Text>
        <Center>
          <motion.div whileTap={{ scale: 0.9 }}>
            <RouterButton href={"/"} colorScheme={"purple"}>
              Welcome
            </RouterButton>
          </motion.div>
        </Center>
      </Container>
      <Footer />
    </>
  );
};

export default ThankYouForm;
