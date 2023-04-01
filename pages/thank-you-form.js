import React from "react";
import { motion } from "framer-motion";
import { Center, Container, Text } from "@chakra-ui/react";
import { Header, Footer, RouterButton } from "../component/ui";

const ThankYouForm = () => {
  return (
    <>
      <Header />
      <Container maxW="600px" mt="170px" boxShadow="xl" padding="15px" borderRadius="20px" bg="white" mb="250px">
        <Text textAlign="center" fontWeight="bold" mb="15px">
          Thank you for purchasing golden package 💕💖
          <br />
          Receipt and details has been sent to their email 📧
        </Text>
        <Center>
          <motion.div whileTap={{ scale: 0.9 }}>
            <RouterButton href="/" colorScheme="purple">
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
