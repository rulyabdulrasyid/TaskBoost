"use client";

import Logo from "./logo";

import {
  Flex,
  Box,
  useColorModeValue,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  Stack,
  Menu,
  MenuButton,
  IconButton,
  Text,
  MenuList,
  MenuItem,
  Container,
  useToast,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { HamburgerIcon } from "@chakra-ui/icons";
import ToogleTheme from "./toogleTheme";

import { useRouter } from "next/router";

import LoginLogoutBox from "./LoginLogoutBox";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.200", "whiteAlpha.900");

  return (
    <Link
      passHref
      href={href}
      p={2}
      bg={active ? "glassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      _hover={{ color: useColorModeValue("red", "gray.500") }}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <div>
      <Flex
        // bg={useColorModeValue("gray.100", "gray.900")}
        boxShadow="lg"
        justifyContent="center"
        position="fixed"
        zIndex={1}
        top={0}
        width="100%"
      >
        <Container
          as={Flex}
          flexDirection={{ base: "row", md: "row" }}
          maxW="100%"
          alignItems="center"
          gap="10"
          style={{ backdropFilter: "blur(10px)" }}
          zIndex={1}
          p={{ base: 1, md: 3, lg: 4 }}
          transform="auto"
          // mt={1}
        >
          <Flex align="center">
            <Heading as="h1" size="xl" p={2} pt={0} pb={0}>
              <Logo />
            </Heading>
          </Flex>

          <Spacer />

          <Flex align="right" gap={1} mr={4}>
            <Box>
              <ToogleTheme />
            </Box>
            <Stack>
              <LoginLogoutBox />
            </Stack>
          </Flex>
        </Container>
      </Flex>
    </div>
  );
};

export default Navbar;
