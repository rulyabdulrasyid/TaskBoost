import { baseUrl } from "./fetchData";

// Login
export async function postLoginData(username, password) {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status:${response.status}`);
  }
  const data = await response.json();
  return data;
}

// Add Task
export async function postAddTask(
  name,
  task_detail,
  status,
  priority_id,
  due_id,
  accessToken
) {
  const response = await fetch(`${baseUrl}/task/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      name,
      task_detail,
      status,
      priority_id,
      due_id,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
