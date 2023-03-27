import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import ButtonComponent from "./buttonhandlesubmit";
import {
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Img,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const Form = () => {
  //for display logo mastercard or visa
  const [logoCard, setLogoCard] = useState("");

  //for expiry date
  const [expired, setExpired] = useState();

  //for passing and updating the state of activepayment
  // const [test, setTest] = useState();

  const showCard = () => {
    if (logoCard === "") {
      return (
        <Flex gap="4px">
          <FaCcVisa size="20px" /> <FaCcMastercard size="20px" />
        </Flex>
      );
    } else if (logoCard?.startsWith("4")) {
      return <FaCcVisa size="20px" ml="8px" />;
    } else {
      return <FaCcMastercard size="20px" />;
    }
  };

  //for allowing numeric only
  function validateInput(event) {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (!regex.test(input)) {
      event.target.value = input.replace(/[^\d]/g, "");
    }
  }

  //for card number
  const handleChange = (event) => {
    setLogoCard(event.target.value);
    const { value } = event.target;
    event.target.value = value
      .replace(/\D/g, "") //other than number will be replace with empty string
      .slice(0, 16) //limitation only to 16 value
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  };

  const handleExpiryDateChange = (event) => {
    const { value } = event.target;
    const month = value.replace(/\D/g, "").slice(0, 2);
    const year = value.replace(/\D/g, "").slice(2, 4);

    if (month > 12) {
      return; // Do nothing if month is greater than 12
    }

    const formattedValue = `${month}/${year}`;
    setExpired(formattedValue);
    //   .replace(/(\d{2})(\d{0,2})/, "$1/$2"); //to handle slash between month and year
  };

  //to show inside form data
  const onSubmit = (data) => console.log(data);

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // //test
  // const test = () => {
  //   paymentHandler();
  //   handleButtonClick();
  // };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name} mb="10px">
          <FormLabel>Name On Card</FormLabel>
          <Input
            borderRadius="10px"
            boxShadow="lg"
            bg="white"
            placeholder="Name On Card"
            {...register("name")}
            focusBorderColor="purple.600"
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.cardNumber} mb="10px">
          <FormLabel>Card Number</FormLabel>
          <InputGroup>
            <InputRightElement pointerEvents="none" mr="10px" children={showCard()} />
            <Input
              borderRadius="10px"
              boxShadow="lg"
              bg="white"
              placeholder="1234 5678 9012 3456"
              {...register("cardNumber")}
              focusBorderColor="purple.600"
              type="text"
              maxLength="19"
              onInput={handleChange}
            />
          </InputGroup>
          <FormErrorMessage>{errors.cardNumber?.message}</FormErrorMessage>
        </FormControl>

        <Flex gap="20px">
          <FormControl isInvalid={errors.expiryDate} mb="10px">
            <FormLabel>Expiry Date</FormLabel>
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                mr="3px"
                children={
                  <Img
                    src="https://checkoutshopper-test.adyen.com/checkoutshopper/images/components/expiry_date_hint.svg"
                    alt="Expiry date"
                  ></Img>
                }
              />
              <Input
                borderRadius="10px"
                bg="white"
                boxShadow="lg"
                placeholder="MM/YY"
                {...register("expiryDate")}
                focusBorderColor="purple.600"
                type="text"
                maxLength="5"
                onInput={handleExpiryDateChange}
                value={expired}
              />
            </InputGroup>
            <FormErrorMessage>{errors.expiryDate?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.securityCvc} mb="10px">
            <FormLabel>CVC/CVV</FormLabel>
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                mr="3px"
                children={
                  <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 3C0 1.34315 1.34315 0 3 0H24C25.6569 0 27 1.34315 27 3V15C27 16.6569 25.6569 18 24 18H3C1.34315 18 0 16.6569 0 15V3Z"
                      fill="#E6E9EB"
                    ></path>
                    <rect x="4" y="12" width="19" height="2" fill="#B9C4C9"></rect>
                    <rect x="4" y="4" width="4" height="4" rx="1" fill="white"></rect>
                    <rect x="16.5" y="4.5" width="7" height="5" rx="2.5" stroke="#C12424"></rect>
                  </svg>
                }
              />
              <Input
                borderRadius="10px"
                bg="white"
                boxShadow="lg"
                placeholder="CVC"
                {...register("securityCvc")}
                focusBorderColor="purple.600"
                type="text"
                maxLength="3"
                onInput={validateInput}
              />
            </InputGroup>
            <FormErrorMessage>{errors.securityCvc?.message}</FormErrorMessage>
          </FormControl>
          <ButtonComponent />
        </Flex>
        <Checkbox size="sm" mt="10px" colorScheme="purple" defaultChecked>
          Save this card for my later purchase
        </Checkbox>
      </form>
    </FormProvider>
  );
};

export default Form;
