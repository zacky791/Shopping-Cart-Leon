import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ButtonGroup,
  Heading,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiWorld } from "react-icons/bi";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa";
import { SiGrab } from "react-icons/si";
import RouterButton from "./ui/RouterButton";

const PaymentMethodContainer = ({ setActivePayment, children }) => {
  return (
    <>
      <Box display="flex" justifyContent="space-evenly">
        <Box bg="white" boxShadow="xl" borderRadius="20px" padding="60px">
          <Heading mb="20px">Checkout</Heading>
          <Box>
            <Text mb="7px"> Billing Address</Text>
            <Text mb="7px">Country</Text>
            <Select w="140px" bgColor="purple.500" color="white" mb="10px" icon={<BiWorld />}>
              <option value="option1" defaultValue style={{ color: "black" }}>
                Malaysia
              </option>
              <option value="option2" style={{ color: "black" }}>
                Thailand
              </option>
              <option value="option3" style={{ color: "black" }}>
                London
              </option>
            </Select>
          </Box>

          <Text mb="10px">Payment Method</Text>
          <Accordion mb="10px" boxShadow="xl" borderRadius="8px" defaultIndex={[0]} overflow="hidden">
            <AccordionItem w="300px">
              <Text>
                <AccordionButton
                  _expanded={{ bg: "purple.500", color: "white" }}
                  onClick={() => {
                    setActivePayment(1);
                  }}
                >
                  <Box flex="1" textAlign="left" display="flex" alignItems="center" gap="8px">
                    <BsFillCreditCardFill />
                    Debit/Credit Card
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Text>
              <AccordionPanel>{children}</AccordionPanel>
            </AccordionItem>

            <AccordionItem w="300px">
              <Text>
                <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
                  <Box
                    flex="1"
                    textAlign="left"
                    display="flex"
                    alignItems="center"
                    gap="8px"
                    onClick={() => {
                      setActivePayment(2);
                    }}
                  >
                    <FaCcPaypal />
                    Paypal
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Text>
              <AccordionPanel>
                In order to complete your transaction, we will transfer you over to PayPal secure servers.
                Unfortunately, PayPal does not support payments in MYR therefore your payment will be in USD. The amount
                you will be charged by Paypal is $15.55.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem w="300px">
              <Text>
                <AccordionButton
                  _expanded={{ bg: "purple.500", color: "white" }}
                  onClick={() => {
                    setActivePayment(3);
                  }}
                >
                  <Box flex="1" textAlign="left" display="flex" alignItems="center" gap="8px">
                    <SiGrab />
                    Grabpay
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Text>
              <AccordionPanel>
                In order to complete your transaction, we will transfer you over to Adyen secure servers.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <ButtonGroup mt="25px" display="flex" justifyContent="space-evenly">
            <RouterButton href="/enroll-class" variant="outline" colorScheme="purple">
              Cancel
            </RouterButton>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
};

export default PaymentMethodContainer;
