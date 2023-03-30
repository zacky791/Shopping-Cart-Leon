import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useFormContext } from "react-hook-form";
import course from "../../data/data.json";

export const Summary = ({ activePayment, ready }) => {
  //for handling which payment gateway will lead to
  const handleButtonClick = () => {
    if (activePayment === 1) {
      handleSubmit(onSubmit)();
      router.push("/thank-you-form");
    } else if (activePayment === 2) {
      router.push(process.env.NEXT_PUBLIC_PAYPAL_URL);
    } else if (activePayment === 3) {
      router.push(process.env.NEXT_PUBLIC_GRABPAY_URL);
    }
  };

  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = useFormContext();

  //for router
  const router = useRouter();

  return (
    <>
      <Box position="sticky" mt="140px" bg="white" boxShadow="xl" borderRadius="20px" padding="20px" height="250px">
        <Box p="20px" w="320px">
          <Text fontWeight="bold">Summary</Text>

          <Flex justifyContent="space-between">
            <Text>{course.packageCourse[0].courseName}</Text>
            <Text>{course.packageCourse[0].price}</Text>
          </Flex>

          <Flex justifyContent="space-between" borderBottom="1px" py="3px">
            <Text>Discount</Text>
            <Text>{course.packageCourse[0].discount}</Text>
          </Flex>

          <Flex justifyContent="space-between" py="3px">
            <Text>Total</Text>
            <Text>{course.packageCourse[0].totalPrice}</Text>
          </Flex>
        </Box>
        <Button
          type="submit"
          isDisabled={!ready}
          onClick={handleButtonClick}
          colorScheme={ready ? "green" : "blackAlpha"}
          mt="15px"
          ml="70px"
        >
          Complete Checkout
        </Button>
      </Box>
    </>
  );
};
