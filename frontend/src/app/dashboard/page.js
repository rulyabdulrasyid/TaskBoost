"use client";
import { Box, SimpleGrid } from "@chakra-ui/react";

import { CreatePage, TaskCard } from "@/components";
import { useEffect, useState } from "react";
import { fetchTask } from "@/fetching/fetchData";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await fetchTask();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <Box mt={20}>
        <CreatePage mb={2} />
        <SimpleGrid columns={1} spacing={3} justifyContent="center" m={6}>
          {tasks?.map((task, idx) => (
            <TaskCard key={idx} {...task} />
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
}

export default Dashboard;
