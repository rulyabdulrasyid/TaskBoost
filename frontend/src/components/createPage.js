"use client";

import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Stack,
  Flex,
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  VStack,
  Toast,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { postAddTask } from "@/fetching/postData";
import { fetchDue, fetchPriority } from "@/fetching/fetchData";

function handleAddTask(details) {
  setData((prevData) => ({
    ...prevData,
    tasks: [...prevData.tasks, details],
  }));
  setDummyState((prevState) => prevState + 1); // Update dummy state
}

export const CreatePage = ({ priority, due }) => {
  const [details, setDetails] = useState({
    name: "",
    task_detail: [],
    status: [],
    priority_id: "",
    due_id: "",
  });

  const [priorities, setPriorities] = useState([]);
  useEffect(() => {
    const fetchPriorities = async () => {
      const priorities = await fetchPriority();
      setPriorities(priorities);
    };
    fetchPriorities();
  }, []);

  useEffect(() => {
    const fetchDues = async () => {
      const dues = await fetchDue();
      setDues(dues);
    };
    fetchDues();
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  const [status, setStatus] = useState(["Pending"]);
  const [dueDate, setDueDate] = useState("today");
  const [dues, setDues] = useState([]);
  const toast = useToast();

  const handleTaskChange = (value) => {
    setDetails((prev) => {
      return { ...prev, task_detail: value };
    });
  };

  const handleStatusChange = (value) => {
    setStatus(value);
    setDetails((prev) => {
      return { ...prev, status: value };
    });
  };

  const handlePriorityChange = (e) => {
    setDetails((prev) => {
      return { ...prev, priority_id: e.target.value };
    });
  };

  const handleDueChange = (e) => {
    setDetails((prev) => {
      return { ...prev, due_id: e.target.value };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    const accessToken = sessionStorage.getItem("accessToken");
    e.preventDefault();
    // console.log(details);
    // console.log(accessToken);

    try {
      await postAddTask(
        details.name,
        details.task_detail,
        details.status,
        details.priority_id,
        details.due_id,
        accessToken
      );

      setDetails({
        name: "",
        task_detail: [],
        status: [],
        priority_id: "",
        due_id: "",
      });
      toast({
        title: "Task Created",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Failed to add new task",
        description: err.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Flex
        position="fixed"
        zIndex={1}
        bottom={0}
        width="100%"
        mb={20}
        justify="right"
      >
        <Button
          leftIcon={<AddIcon />}
          colorScheme="teal"
          onClick={onOpen}
          mr={10}
        >
          Add task
        </Button>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Add a new task</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Please enter task name"
                  name="name"
                  value={details.name}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <InputGroup gap={2}>
                  <VStack>
                    <FormLabel>Task Detail</FormLabel>
                    <Input
                      type="text"
                      placeholder={`Task detail`}
                      name="task_detail"
                      value={details.task_detail}
                      onChange={(e) => handleTaskChange(e.target.value)}
                    />
                  </VStack>
                  <VStack>
                    <FormLabel>Status</FormLabel>
                    <Select
                      value={status}
                      onChange={(e) => handleStatusChange(e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="inProgress" name="In Progress">
                        In Progress
                      </option>
                      <option value="completed" name="Completed">
                        Completed
                      </option>
                    </Select>
                  </VStack>
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Priority</FormLabel>
                <Select
                  value={details.priority_id}
                  onChange={handlePriorityChange}
                >
                  {priorities.map((priority) => (
                    <option key={priority.id} value={priority.id}>
                      {priority.priority_name}
                    </option>
                  ))}
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="due">Due</FormLabel>
                <Select
                  id="due"
                  value={details.due_id}
                  onChange={handleDueChange}
                >
                  {dues.map((due) => (
                    <option key={due.id} value={due.id}>
                      {due.due_date}
                    </option>
                  ))}
                </Select>
                {dueDate === 3 && <Input type="date" />}
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CreatePage;
