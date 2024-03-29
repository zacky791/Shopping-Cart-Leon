import React from "react";
import { Logo } from "./Logo";
import { Box, Flex, Link, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" bg="#7e43c7" h="80px" color="white">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ x: 100 }}>
          <Logo
            src="/assets/leonimg.webp"
            alt="Leon Logo"
            width="200px"
            p="4px"
            pl={{ base: "20px", md: "50px" }}
            display={{ base: "block", md: "block" }}
          />
        </motion.div>

        <Box>
          <Stack direction="row" spacing="60px" align="center" mr="80px">
            <Link href="/">Home</Link>
            <Link>Blog</Link>
            <Link>About</Link>
            <Link>Contact Us</Link>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
