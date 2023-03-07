import React from "react";
import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";

function NavbarMenuItem(props) {
  return (
    <Box>
      <NextLink href="#home">
        <Link>{props.children}</Link>
      </NextLink>
    </Box>
  );
}

export default NavbarMenuItem;
