import React from "react";
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react";

const PaymentAccordion = ({ name, onClick, icon, panel }) => {
  return (
    <>
      <AccordionItem w="300px">
        <Text>
          <AccordionButton _expanded={{ bg: "purple.500", color: "white" }} onClick={onClick}>
            <Box flex="1" textAlign="left" display="flex" alignItems="center" gap="8px">
              {icon}
              {name}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel>{panel}</AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default PaymentAccordion;
