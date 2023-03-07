import Footer from "@/component/Footer";
import Header from "@/component/Header";
import RouterButton from "@/component/ui/RouterButton";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
import React from "react";

const Checkout = () => {
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
        <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"}>
          <Box>
            <Heading mb={"20px"} textAlign={"center"}>
              Checkout
            </Heading>
            <Text>Billing address</Text>
            <Text>Country</Text>
            <Select placeholder="Country" w={"140px"} bgColor={"purple.300"} mb={"10px"}>
              <option value="option1">Samad</option>
              <option value="option2">Ilyias</option>
              <option value="option3">matmen</option>
            </Select>

            <Text mb={"10px"}>Payment method</Text>
            <Accordion allowToggle>
              <AccordionItem w={"300px"}>
                <h2>
                  <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Debit/Credit card
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <FormControl>
                    <FormLabel>Name on card</FormLabel>
                    <Input bg={"white"} placeholder="Name on card" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Card Number</FormLabel>
                    <Input bg={"white"} placeholder="1234 5678 9012 3456" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Expiry date</FormLabel>
                    <Input bg={"white"} placeholder="MM/YY" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>CVC/CVV</FormLabel>
                    <Input bg={"white"} placeholder="CVC" />
                  </FormControl>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem w={"300px"}>
                <h2>
                  <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Paypal
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem w={"300px"}>
                <h2>
                  <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Alipay
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Box>
              <Text>Order details</Text>
              <Flex>
                <Text>Golden package </Text>
                <Text>Rm 232</Text>
              </Flex>
            </Box>
          </Box>
          <Box>
            <Text fontWeight={"bold"}>Summary</Text>
            <Box border={"1px"} display={"flex"} p={"20px"}>
              <Box mr={"30px"}>
                <Text>Original Price</Text>
                <Text>Discount</Text>
                <Text>Total</Text>
              </Box>
              <Box>
                <Text>RM 299</Text>
                <Text>Rm 100</Text>
                <Text>Rm 199</Text>
              </Box>
            </Box>
            <RouterButton bgColor={"purple.300"} _hover={"none"} href={"/ThankYouForm"} mt="15px" ml="25px">
              Complete Checkout
            </RouterButton>
          </Box>
        </Box>
        <ButtonGroup mt={"35px"} display={"flex"} justifyContent={"space-evenly"}>
          <RouterButton href={"/EnrollClasses"}>Back</RouterButton>
        </ButtonGroup>
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;
