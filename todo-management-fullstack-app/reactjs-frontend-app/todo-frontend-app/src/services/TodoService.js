import axios from "axios";

const TODO_API_BASE_URL = "http://localhost:9090/api/todos";

export const getAllTodos = () => axios.get(TODO_API_BASE_URL);

export const createTodo = (todo) => axios.post(TODO_API_BASE_URL, todo);

export const getTodoById = (todoId) =>
  axios.get(TODO_API_BASE_URL + "/" + todoId);

export const updateTodo = (todoId, todo) =>
  axios.put(TODO_API_BASE_URL + "/" + todoId, todo);

export const removeTodo = (todoId) =>
  axios.delete(TODO_API_BASE_URL + "/" + todoId);

export const completeTodo = (todoId) =>
  axios.patch(TODO_API_BASE_URL + "/" + todoId + "/complete");

export const inCompleteTodo = (todoId) =>
  axios.patch(TODO_API_BASE_URL + "/" + todoId + "/in-complete");
