export const baseUrl = "http://localhost:3001";

export const fetchData = async (url) => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  });
  const data = await response.json();
  return data;
};

export const fetchTask = async () => {
  const data = await fetchData("task");
  return data;
};

export const fetchPriority = async () => {
  const data = await fetchData("priority");
  return data;
};

export const fetchDue = async () => {
  const data = await fetchData("due");
  return data;
};
