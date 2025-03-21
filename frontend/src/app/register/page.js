"use client";

import {
  Flex,
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";

export default function SimpleCard() {
  return (
    <div>
      <Container maxWidth="6xl">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          mt={{ base: "20px", md: "30px" }}
          // pt={5}
          gap={{ base: "20px", md: "20px" }}
          // bg="green"
        >
          <Box width={{ base: "100%", md: "50%" }} alignSelf="center">
            <Box mb={"10px"}>
              <Heading fontSize={{ base: "75px", md: "110px" }}>
                Register your account
              </Heading>
            </Box>
            <Box>
              <Text fontSize={"25px"} fontWeight="hairline">
                See and cek my lates project that i have worked
              </Text>
              <Text mt={4} fontSize={"16px"}>
                I've worked at start-ups, tech companies and corporates on a
                range of different projects, including design systems, websites
                and apps.
              </Text>
            </Box>
          </Box>
          <Box
            width={{ base: "100%", md: "50%" }}
            align="center"
            alignSelf="center"
          >
            <Flex
              //   minH={"100vh"}
              align={"center"}
              justify={"center"}
              bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                {/* <Stack align={"center"}>
                  <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                  <Text fontSize={"lg"} color={"gray.600"}>
                    to enjoy all of our cool{" "}
                    <Link color={"blue.400"}>features</Link> ✌️
                  </Text>
                </Stack> */}
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={8}
                >
                  <Stack spacing={4}>
                    <FormControl id="email">
                      <FormLabel>Email address</FormLabel>
                      <Input type="email" />
                    </FormControl>
                    <FormControl id="password">
                      <FormLabel>Password</FormLabel>
                      <Input type="password" />
                    </FormControl>
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                      >
                        <Checkbox>Remember me</Checkbox>
                        <Link color={"blue.400"}>Forgot password?</Link>
                      </Stack>
                      <Button
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                      >
                        Sign in
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </Box>
        </Flex>
        <Divider />
      </Container>
    </div>
  );
}
