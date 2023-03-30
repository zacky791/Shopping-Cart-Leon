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
      router.push("https://www.paypal.com/checkoutnow?token=7FJ482267V245434S");
    } else if (activePayment === 3) {
      router.push(
        "https://weblogin.grab.com/auth?acr_values=consent_ctx%3AcountryCode%3DMY%2Ccurrency%3DMYR&auth_endpoint=https%3A%2F%2Fpartner-api.grab.com%2Fgrabid%2Fv1%2Foauth2%2Fauthorize&browser=IE%3A110.0&client_id=c5b4aff021f14b7399a86d6aa5f398c3&code_challenge=qT20ZaqYINkaUWvRAI3TnQFYU6CvZJ6OYyLdWK69YcE&code_challenge_method=S256&ctx_id=a51c1415bcd5438fa089856fff2ded4c&device_type=Computer&forwardedHost=partner-api.grab.com&gw=pgw&redirect_uri=https%3A%2F%2Fcheckoutshopper-live.adyen.com%2Fcheckoutshopper%2FcheckoutPaymentReturn%3Fgpid%3DGPD959D94D622CD38C&request=eyJhbGciOiAibm9uZSJ9.eyJjbGFpbXMiOnsidHJhbnNhY3Rpb24iOnsidHhJRCI6IjMyZTRkYWQ5YmU0ZDRiNmFhYmQyN2ZmMGZhNmRhMTBiIn19fQ.&request_id=37faa499-2f0e-48e1-bf5f-f09af64b0476&response_type=code&scope=payment.one_time_charge&state=50854479"
      );
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
