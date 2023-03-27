import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { Container, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Form from "@/component/Form";
import { FormProvider } from "react-hook-form";
import Summary from "@/component/Summary";
import PaymentMethodContainer from "@/component/PaymentMethodContainer";

const Checkout = () => {
  //for active payment
  const [activePayment, setActivePayment] = useState(1);
  const [ready, setReady] = useState(false);
  const paymentHandler = (handleButtonClick) => {
    // setTest(handleButtonClick);
    console.log(handleButtonClick);
  };

  return (
    <>
      <Header />
      <Container maxW="1050px" mt="30px">
        <Flex justifyContent="space-evenly">
          <FormProvider>
            <PaymentMethodContainer
              setActivePayment={setActivePayment}
              activePayment={activePayment}
              paymentHandler={paymentHandler}
            >
              <Form setReady={setReady} />
            </PaymentMethodContainer>
            <Summary paymentHandler={paymentHandler} ready={ready} />
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
