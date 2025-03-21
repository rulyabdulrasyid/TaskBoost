"use client";

import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  //   height: 30px;
  line-height: 20px;
  padding: 5px;

  &:hover img {
    transform: rotate(180deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <LogoBox>
        <Text
          color={useColorModeValue("black", "white")}
          fontFamily="M PLUS Rounde 1c"
          fontWeight="bold"
          ml={5}
          fontSize={{ base: "18px", md: "27px", lg: "30px" }}
        >
          TaskBoost
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
