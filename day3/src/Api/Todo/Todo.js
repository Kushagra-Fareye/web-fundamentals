import axios from "axios";

export async function getTodos() {
  return fetch("/todos").then((data) => data.json());
}

export async function getTodo(todoId) {
  return fetch(`/todo?todoId=${todoId}`).then((data) => data.json());
}

export async function createTodo(todo) {
  return axios.post("/todo", todo).then((data) => data.json());
}

export async function deleteTodo(todoId) {
  return axios
    .delete(`/delete/todo?todoId=${todoId}`)
    .then((res) => res.status);
}

export async function updateTodo(todoId, todo) {
  return axios
    .put(`/update/todo?todoId=${todoId}`, todo)
    .then((res) => res.status);
}
