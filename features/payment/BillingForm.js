import React from "react";
import { BiWorld } from "react-icons/bi";
import { useFormContext } from "react-hook-form";
import { Box, Flex, FormControl, FormErrorMessage, FormLabel, Input, Select } from "@chakra-ui/react";

export const BillingForm = () => {
  //for allowing numeric only
  function validateInput(event) {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (!regex.test(input)) {
      event.target.value = input.replace(/[^\d]/g, "");
    }
  }

  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Box bg="white" boxShadow="xl" borderRadius="20px" padding="20px" mb="30px">
        <form>
          <Flex gap="20px">
            <FormControl isInvalid={errors.firstName} mb="10px">
              <FormLabel>First Name</FormLabel>
              <Input
                borderRadius="10px"
                boxShadow="lg"
                bg="white"
                placeholder="Name On Card"
                {...register("firstName")}
                focusBorderColor="purple.600"
                onBlur={() => {
                  trigger("firstName");
                }}
              />
              <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.lastName} mb="10px">
              <FormLabel>Last Name</FormLabel>
              <Input
                borderRadius="10px"
                boxShadow="lg"
                bg="white"
                placeholder="First Name"
                {...register("lastName")}
                focusBorderColor="purple.600"
                onBlur={() => {
                  trigger("lastName");
                }}
              />
              <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl isInvalid={errors.address} mb="10px">
            <FormLabel>Address</FormLabel>
            <Input
              borderRadius="10px"
              boxShadow="lg"
              bg="white"
              placeholder="Address"
              {...register("address")}
              focusBorderColor="purple.600"
              onBlur={() => {
                trigger("address");
              }}
            />
            <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
          </FormControl>

          <Flex gap="20px">
            <FormControl isInvalid={errors.zip} mb="10px">
              <FormLabel>zip</FormLabel>
              <Input
                borderRadius="10px"
                boxShadow="lg"
                bg="white"
                placeholder="Zip Code"
                {...register("zip")}
                focusBorderColor="purple.600"
                onInput={validateInput}
                onBlur={() => {
                  trigger("zip");
                }}
              />
              <FormErrorMessage>{errors.zip?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.city} mb="10px">
              <FormLabel>City</FormLabel>
              <Input
                borderRadius="10px"
                boxShadow="lg"
                bg="white"
                placeholder="City"
                {...register("city")}
                focusBorderColor="purple.600"
                onBlur={() => {
                  trigger("city");
                }}
              />
              <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl>
            <FormLabel mb="7px">Country</FormLabel>
            <Select w="140px" bgColor="purple.500" color="white" mb="10px" icon={<BiWorld />} {...register("country")}>
              <option value="Malaysia" defaultValue style={{ color: "black" }}>
                Malaysia
              </option>
              <option value="Thailand" style={{ color: "black" }}>
                Thailand
              </option>
              <option value="London" style={{ color: "black" }}>
                London
              </option>
            </Select>
          </FormControl>
        </form>
      </Box>
    </>
  );
};
