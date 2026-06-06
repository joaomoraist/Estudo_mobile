const API_URL = "https://jsonplaceholder.typicode.com";

export async function getUsers() {
  const responde = await fetch(`${API_URL}/users`);
  const data = await responde.json();

  return data;
}
