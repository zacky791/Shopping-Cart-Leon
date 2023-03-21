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
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa";
import { SiGrab } from "react-icons/si";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { BiWorld } from "react-icons/bi";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";

const Checkout = () => {
  const router = useRouter();

  //for active payment
  const [activePayment, setActivePayment] = useState(1);

  //for display logo mastercard or visa
  const [logoCard, setLogoCard] = useState("");

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

  //for expiry date
  const [expired, setExpired] = useState();
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

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  //for handling submit outside form
  const handleButtonClick = () => {
    if (activePayment === 1) {
      handleSubmit(onSubmit)();
      isValid ? router.push("/thankYouForm") : null;
    } else if (activePayment === 2) {
      router.push("https://www.paypal.com/checkoutnow?token=7FJ482267V245434S");
    } else if (activePayment === 3) {
      router.push(
        "https://weblogin.grab.com/auth?acr_values=consent_ctx%3AcountryCode%3DMY%2Ccurrency%3DMYR&auth_endpoint=https%3A%2F%2Fpartner-api.grab.com%2Fgrabid%2Fv1%2Foauth2%2Fauthorize&browser=IE%3A110.0&client_id=c5b4aff021f14b7399a86d6aa5f398c3&code_challenge=qT20ZaqYINkaUWvRAI3TnQFYU6CvZJ6OYyLdWK69YcE&code_challenge_method=S256&ctx_id=a51c1415bcd5438fa089856fff2ded4c&device_type=Computer&forwardedHost=partner-api.grab.com&gw=pgw&redirect_uri=https%3A%2F%2Fcheckoutshopper-live.adyen.com%2Fcheckoutshopper%2FcheckoutPaymentReturn%3Fgpid%3DGPD959D94D622CD38C&request=eyJhbGciOiAibm9uZSJ9.eyJjbGFpbXMiOnsidHJhbnNhY3Rpb24iOnsidHhJRCI6IjMyZTRkYWQ5YmU0ZDRiNmFhYmQyN2ZmMGZhNmRhMTBiIn19fQ.&request_id=37faa499-2f0e-48e1-bf5f-f09af64b0476&response_type=code&scope=payment.one_time_charge&state=50854479"
      );
    }
  };

  return (
    <>
      <Header />
      <Container maxW="1050px" mt="30px">
        <Flex justifyContent="space-evenly">
          <Box display="flex" justifyContent="space-evenly">
            <Box bg="white" boxShadow="xl" borderRadius="20px" padding="60px">
              <Heading mb="20px">Checkout</Heading>
              <Box>
                <Text mb="7px"> Billing address</Text>
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

              <Text mb="10px">Payment method</Text>
              <Accordion mb="10px" boxShadow="xl" borderRadius="20px" defaultIndex={[0]}>
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
                        Debit/Credit card
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <FormControl isInvalid={errors.name} mb="10px">
                        <FormLabel>Name on card</FormLabel>
                        <Input
                          borderRadius="10px"
                          boxShadow="lg"
                          bg="white"
                          placeholder="Name on card"
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
                          <FormLabel>Expiry date</FormLabel>
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
                                <svg
                                  width="27"
                                  height="18"
                                  viewBox="0 0 27 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
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
                      </Flex>
                      <Checkbox size="sm" mt="10px" colorScheme="purple" defaultChecked>
                        Save this card for my later purchase
                      </Checkbox>
                    </form>
                  </AccordionPanel>
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
                    Unfortunately, PayPal does not support payments in MYR therefore your payment will be in USD. The
                    amount you will be charged by Paypal is $15.55.
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
                <RouterButton href="/enrollClass" variant="outline" colorScheme="purple">
                  Cancel
                </RouterButton>
              </ButtonGroup>
            </Box>
          </Box>

          <Box>
            <Box
              position="sticky"
              mt="140px"
              bg="white"
              boxShadow="xl"
              borderRadius="20px"
              padding="20px"
              height="250px"
            >
              <Box p="20px" w="320px">
                <Text fontWeight="bold">Summary</Text>

                <Flex justifyContent="space-between">
                  <Text>Math package</Text>
                  <Text>RM 299</Text>
                </Flex>

                <Flex justifyContent="space-between" borderBottom="1px" py="3px">
                  <Text>Discount</Text>
                  <Text>Rm 100</Text>
                </Flex>

                <Flex justifyContent="space-between">
                  <Text>Total</Text>
                  <Text>Rm 199</Text>
                </Flex>
              </Box>
              <Button onClick={handleButtonClick} colorScheme="green" mt="15px" ml="70px">
                Complete checkout
              </Button>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;
