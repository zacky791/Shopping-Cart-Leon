import React from "react";
import { Accordion, Box, ButtonGroup, Flex, Heading, Text } from "@chakra-ui/react";
import { FaCcPaypal, SiGrab, BsFillCreditCardFill, RouterButton } from "../../component/ui";
import { BillingForm, PaymentAccordion } from "./index";

export const PaymentMethodContainer = ({ setReady, setActivePayment, children }) => {
  const facadePaymentGateway = [
    {
      name: "Debit/Credit Card",
      icon: <BsFillCreditCardFill />,
      panel: children,
      onClick: () => {
        setActivePayment(1);
        setReady(false);
      },
    },
    {
      name: "Paypal",
      icon: <FaCcPaypal />,
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
      panel: "In order to complete your transaction, we will transfer you over to Adyen secure servers.",
      onClick: () => {
        setActivePayment(3);
        setReady(true);
      },
    },
  ];

  return (
    <>
      <Flex justifyContent="space-evenly">
        <Box bg="white" boxShadow="xl" borderRadius="20px" padding="60px">
          <Heading mb="20px">Checkout</Heading>
          <Text mb="7px"> Billing Address</Text>
          <BillingForm />
          <Text mb="15px">Payment Method</Text>
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
      </Flex>
    </>
  );
};
