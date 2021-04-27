const API = `https://60870b0fa3b9c200173b7788.mockapi.io/api/v1`;

export function getUsers() {
  return fetch(`${API}/users`)
    .then((data) => data.json())
    .catch((err) => {
      console.error(err);
      return [];
    });
}

export async function saveUser(data) {
  const response = await fetch(`${API}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}
