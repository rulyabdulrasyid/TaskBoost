"use client";

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Divider,
  Stack,
  Wrap,
} from "@chakra-ui/react";

const Landing = () => {
  const portfolioImg = `/landing.svg`;
  return (
    <>
      <Container maxWidth="6xl">
        {/* Resume */}
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
                TaskBoost.
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
            <Image src={portfolioImg} width="350px" borderRadius="10px" />
          </Box>
        </Flex>
        <Divider />
      </Container>
    </>
  );
};

export default Landing;
