import * as yup from "yup";
import React, { useState } from "react";
import { Header, Footer } from "../component/ui";
import { Container, Flex } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PaymentForm, PaymentMethodContainer, Summary } from "../features/payment";

const Checkout = () => {
  //for deciding active payment to proceed example debit,paypal or grabpay
  const [activePayment, setActivePayment] = useState(1);

  //for allow button to proceed checkout when all requirement validation meet
  const [ready, setReady] = useState(false);

  //validation yup
  const schemaPaymentGateway = yup
    .object({
      nameOnCard: yup.string().required("Please insert name"),
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

  const schemaBilling = yup
    .object({
      firstName: yup.string().required("Please insert first name"),
      lastName: yup.string().required("Please insert last name"),
      address: yup.string().required("Please insert address"),
      zip: yup.string().required("Please insert zip code"),
      city: yup.string().required("Please insert city"),
    })
    .required();

  const combinedSchema = yup.object().shape({
    ...schemaPaymentGateway.fields,
    ...schemaBilling.fields,
  });

  const methods = useForm({
    resolver: yupResolver(combinedSchema),
  });

  return (
    <>
      <Header />
      <Container maxW="1050px" mt="30px" mr="500px">
        <Flex justifyContent="space-evenly" gap="60px">
          <FormProvider {...methods}>
            <PaymentMethodContainer setReady={setReady} setActivePayment={setActivePayment}>
              <PaymentForm setReady={setReady} />
            </PaymentMethodContainer>
            <Summary ready={ready} activePayment={activePayment} />
          </FormProvider>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;
