import React from "react";
import { Accordion, Box, ButtonGroup, Heading, Select, Text } from "@chakra-ui/react";
import { BiWorld } from "react-icons/bi";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa";
import { SiGrab } from "react-icons/si";
import { RouterButton } from "../../component/ui";
import PaymentAccordion from "./PaymentAccordion";

export const PaymentMethodContainer = ({ setReady, setActivePayment, children }) => {
  // list of all link and map method
  const facadePaymentGateway = [
    {
      name: "Debit/Credit Card",
      icon: <BsFillCreditCardFill />,
      // link: process.env.NEXT_PUBLIC_PAYPAL_URL || "www.",
      panel: children,
      onClick: () => {
        setActivePayment(1);
        setReady(false);
      },
    },
    {
      name: "Paypal",
      icon: <FaCcPaypal />,
      // link: process.env.NEXT_PUBLIC_PAYPAL_URL || "www.",
      panel:
        "In order to complete your transaction, we will transfer you over to PayPal secure servers. Unfortunately, PayPal does not support payments in MYR therefore your payment will be in USD. The amount you will be charged by Paypal is $15.55.",
      onClick: () => {
        setActivePayment(2);
        setReady(true);
      },
    },
    {
      name: "Debit/Credit Card",
      icon: <SiGrab />,
      // link: process.env.NEXT_PUBLIC_GRABPAY_URL || "www.",
      panel: "In order to complete your transaction, we will transfer you over to Adyen secure servers.",
      onClick: () => {
        setActivePayment(3);
        setReady(true);
      },
    },
  ];

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
            {facadePaymentGateway.map((data, index) => {
              return (
                <PaymentAccordion
                  key={index}
                  name={data.name}
                  icon={data.icon}
                  panel={data.panel}
                  onClick={data.onClick}
                  ready={data.ready}
                />
              );
            })}
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
