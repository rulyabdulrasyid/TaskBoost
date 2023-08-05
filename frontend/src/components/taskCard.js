"use client";

import {
  Card,
  CardHeader,
  Stack,
  Heading,
  CardBody,
  StackDivider,
  Box,
  Text,
  Container,
} from "@chakra-ui/react";
import { fetchTask } from "@/fetching/fetchData";
import { useState } from "react";

function TaskCard(props) {
  const { name, Priorities, Dues, Task_details } = props;
  const priorityName = Priorities[0]?.priority_name || "No Priority";
  const dueDate = Dues[0]?.due_date || "No Due Date";

  return (
    <Container maxW="5xl" mt={8}>
      <Card>
        <CardHeader>
          <Heading>{name}</Heading>
          <Text>Prioritas: {priorityName}</Text>
          <Text>Tanggal Jatuh Tempo: {dueDate}</Text>
          <Text>Task Details</Text>
          {Task_details.map((detail) => (
            <Box key={detail.id}>
              <Text>{detail.task_detail}</Text>
              <Text>Status</Text>
              <Text>{detail.status || "Tidak ada status"}</Text>
            </Box>
          ))}
        </CardHeader>
      </Card>
    </Container>
  );
}

export default TaskCard;
