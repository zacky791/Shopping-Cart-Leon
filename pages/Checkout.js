import * as yup from "yup";
import { Header, Footer } from "../component/ui";
import { Container, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, PaymentMethodContainer, Summary } from "../features/payment";

const Checkout = () => {
  //for active payment
  const [activePayment, setActivePayment] = useState(1);
  const [ready, setReady] = useState(false);
  const paymentHandler = (handleButtonClick) => {
    console.log(handleButtonClick);
  };

  //validation yup
  const schema = yup
    .object({
      name: yup.string().required("Please insert name"),
      cardNumber: yup
        .string()
        .required("Please insert card number")
        .min(19, "Card number too short")
        .max(19, "Card number 16 digit only"),
      expiryDate: yup
        .string()
        .required("Please insert card expiry date")
        .min(5, "Expiry date too short")
        .max(5, "Expiry 4 digit number only"),
      securityCvc: yup
        .string()
        .required("Please insert card cvc")
        .min(3, "CVC/CVV number too short")
        .max(3, "CVC/CVV 3 digit number only"),
    })
    .required();

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Header />
      <Container maxW="1050px" mt="30px">
        <Flex justifyContent="space-evenly">
          <FormProvider {...methods}>
            <PaymentMethodContainer
              setActivePayment={setActivePayment}
              activePayment={activePayment}
              paymentHandler={paymentHandler}
            >
              <Form setReady={setReady} />
            </PaymentMethodContainer>
            <Summary paymentHandler={paymentHandler} ready={ready} methods={methods} />
          </FormProvider>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;

// create payment and submit button component
// then isvalidity from payment to parent to submit
