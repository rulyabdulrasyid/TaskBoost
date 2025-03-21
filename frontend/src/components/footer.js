import {
  Box,
  chakra,
  Container,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Link,
  Flex,
} from "@chakra-ui/react";
// import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"10px"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Flex
      position="fixed"
      zIndex={1}
      bottom={0}
      width="100%"
      mb={0}
      justify="right"
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.800", "white")}
    >
      <Container
        bottom={0}
        as={Stack}
        maxW="6xl"
        style={{ backdropFilter: "blur(10px)" }}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>@ 2023 MyPortfolio. All right reserved</Text>
        {/* <Stack direction="row" spacing={6}>
          <SocialButton label="Twitter" href="#">
            <FaTwitter />
          </SocialButton>
          <SocialButton label="Instagram" href="#">
            <FaInstagram />
          </SocialButton>
          <SocialButton label="Youtube" href="#">
            <FaYoutube />
          </SocialButton>
        </Stack> */}
      </Container>
    </Flex>
  );
};

export default Footer;
