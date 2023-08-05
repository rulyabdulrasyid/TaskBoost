import React, { useState, useEffect } from "react";
import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
// import {
//   FiBarChart,
//   FiMenu,
//   FiCodesandbox,
//   FiUsers,
//   FiPackage,
//   FiUser,
//   FiHome,
//   FiLayout,
//   FiSliders,
// } from "react-icons/fi";
// import SideItem from "./SideItem";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  return (
    <>
      <Flex
        pos="sticky"
        top="0"
        bottom="0"
        left="0"
        right="0"
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.01)"
        // borderRadius={navSize == "small" ? "15px" : "30px"}
        // w={navSize == "small" ? "75px" : "200px"}
        flexDir="column"
        justifyContent="space-between"
      >
        <Flex
          p="5%"
          flexDir="column"
          w="20%"
          //   alignItems={navSize == "small" ? "center" : "flex-start"}
          as="nav"
        >
          SIDEBAR
          SIDEBARSIDEBARSIDEBARSIDEBARSIDEBARSIDEBARSIDEBARSIDEBARSIDEBBAIDEBAR
        </Flex>
      </Flex>
    </>
  );
};

export default Sidebar;
