"use client";

import {
  Stack,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  useToast,
  useColorModeValue,
  Flex,
  Heading,
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { postLoginData } from "@/fetching/postData";

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

function LoginLogoutBox() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const toast = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    postLoginData(username, password)
      .then((data) => {
        const { token } = data;
        sessionStorage.setItem("accessToken", token);
        setIsLogin(true);
        router.push("/dashboard");
        toast({
          title: "Login",
          description: "You have successfully Login.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        const error = new Error(e);
        toast({
          title: "An error occurred.",
          description: error?.message || "An error occurred. Please try again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("accessToken");
    toast({
      title: "Logout",
      description: "You have successfully logged out.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setIsLogin(false);
    router.push("/");
  };

  return (
    <>
      <Stack>
        {!isLogin ? (
          <Button onClick={onOpen}>Login</Button>
        ) : (
          <>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        )}
      </Stack>
      <Stack>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <Flex
              // minH={"100vh"}
              align={"center"}
              justify={"center"}
              // bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                  <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                </Stack>

                <Stack spacing={4}>
                  <FormControl>
                    <InputGroup>
                      <Input
                        variant="flushed"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <InputGroup>
                      <Input
                        type={showPassword ? "text" : "password"}
                        variant="flushed"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <InputRightElement>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Stack spacing={10}>
                    <Button onClick={handleSubmit} mb={6} size="sm">
                      Login
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Flex>
          </ModalContent>
        </Modal>
      </Stack>
    </>
  );
}

export default LoginLogoutBox;
