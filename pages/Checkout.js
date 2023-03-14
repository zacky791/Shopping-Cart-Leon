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
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa";
import { BsAlipay } from "react-icons/bs";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { BiWorld } from "react-icons/bi";

const Checkout = () => {
  const router = useRouter();

  //validation yup
  const schema = yup
    .object({
      name: yup.string().required("Please insert child name"),
      cardNumber: yup.number().required().typeError("Please insert card number"),
      expiryDate: yup.number().required().typeError("Please insert card expiry date"),
      securityCvc: yup.number().required().typeError("Please insert card cvc"),
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
    handleSubmit(onSubmit)();
    if (isValid) {
      router.push("/thankYouForm");
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
                <Select w="140px" bgColor="purple.300" mb="10px" icon={<BiWorld />}>
                  <option value='option1' defaultValue>
                    Malaysia
                  </option>
                  <option value='option2'> Thailand</option>
                  <option value='option3'>London</option>
                </Select>
              </Box>

              <Text mb="10px">Payment method</Text>
              <Accordion mb="10px" boxShadow="xl" borderRadius="20px" defaultIndex={[0]}>
                <AccordionItem w="300px">
                  <Text>
                    <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
                      <Box flex='1' textAlign='left' display="flex" alignItems="center" gap="8px">
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
                          placeholder='Name on card'
                          {...register("name")}
                          focusBorderColor='purple.600'
                        />
                        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                      </FormControl>

                      <FormControl isInvalid={errors.cardNumber} mb="10px">
                        <FormLabel>Card Number</FormLabel>
                        <Input
                          borderRadius="10px"
                          boxShadow="lg"
                          bg="white"
                          placeholder='1234 5678 9012 3456'
                          {...register("cardNumber")}
                          focusBorderColor='purple.600'
                        />
                        <FormErrorMessage>{errors.cardNumber?.message}</FormErrorMessage>
                      </FormControl>

                      <Flex gap="20px">
                        <FormControl isInvalid={errors.expiryDate} mb="10px">
                          <FormLabel>Expiry date</FormLabel>
                          <Input
                            borderRadius="10px"
                            bg="white"
                            boxShadow="lg"
                            placeholder='MM/YY'
                            {...register("expiryDate")}
                            focusBorderColor='purple.600'
                          />
                          <FormErrorMessage>{errors.expiryDate?.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.securityCvc} mb="10px">
                          <FormLabel>CVC/CVV</FormLabel>
                          <Input
                            borderRadius="10px"
                            bg="white"
                            boxShadow="lg"
                            placeholder='CVC'
                            {...register("securityCvc")}
                            focusBorderColor='purple.600'
                          />

                          <FormErrorMessage>{errors.securityCvc?.message}</FormErrorMessage>
                        </FormControl>
                      </Flex>
                    </form>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem w="300px">
                  <Text>
                    <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
                      <Box flex='1' textAlign='left' display="flex" alignItems="center" gap="8px">
                        <FaCcPaypal />
                        Paypal
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem w="300px">
                  <Text>
                    <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
                      <Box flex='1' textAlign='left' display="flex" alignItems="center" gap="8px">
                        <BsAlipay />
                        Alipay
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <ButtonGroup mt="25px" display="flex" justifyContent="space-evenly">
                <RouterButton href="/enrollClasses" variant="outline" colorScheme="purple">
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
              height="250px">
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
              <Button onClick={handleButtonClick} bgColor="purple.300" _hover="none" mt='15px' ml='70px'>
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

{
  /* <Box bg="#ffffff" boxShadow="xl" borderRadius="20px" padding="20px">
<Text>Order details</Text>
<Flex justifyContent="space-between">
  <Text>Golden package </Text>
  <Text>Rm 299</Text>
</Flex>
</Box> */
}
