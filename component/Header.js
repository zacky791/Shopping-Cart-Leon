import Logo from "./ui/Logo";
import React, { useState } from "react";
import { Box, Flex, Link, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import NavbarMenuItem from "./ui/NavbarMenuItem";

export default function Header() {
  //for icon in small medium screen
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"} bg="#7e43c7" h="80px" color={"white"}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ x: 100 }}>
          <Logo
            src="/assets/leonimg.webp"
            alt="Leon Logo"
            width={"200px"}
            p={"4px"}
            pl={{ base: "20px", md: "50px" }}
            display={{ base: "block", md: "block" }}
          />
        </motion.div>

        <Box>
          <Stack direction="row" spacing={"60px"} align="center" mr={"80px"}>
            <Link href="/">Home</Link>
            <Link>Blog</Link>
            <Link>About</Link>
            <Link>Contact Us</Link>

            {/* <AiOutlineMenu toggle={toggle} isOpen={isOpen} /> */}
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
