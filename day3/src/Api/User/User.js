import axios from "axios";

export async function getUsers() {
  return fetch("/users").then((data) => data.json());
}

export async function getUser(userId) {
  return fetch(`/user?userId=${userId}`).then((data) => data.json());
}

export async function createUser(user) {
  return axios.post("/user", user);
}

export async function deleteUser(userId) {
  return fetch(`/delete/user?userId=${userId}`, {
    method: "DELETE",
  }).then((res) => res.status);
}

export async function updateUser(userId, user) {
  return axios
    .put(`/update/user?userId=${userId}`, user)
    .then((res) => res.status);
}
