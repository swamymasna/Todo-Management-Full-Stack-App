import React, { useEffect, useState } from "react";
import {
  completeTodo,
  getAllTodos,
  inCompleteTodo,
  removeTodo,
} from "../services/TodoService";
import { Link, useNavigate } from "react-router-dom";

const ListTodoComponent = () => {
  const [todos, setTodos] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getTodosList();
  }, []);

  const getTodosList = () => {
    getAllTodos()
      .then((response) => {
        console.log(response.data);
        setTodos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateTodo = (id) => {
    navigator(`/edit-todo/${id}`);
  };

  const deleteTodo = (id) => {
    removeTodo(id)
      .then((response) => {
        console.log(response.data);
        getTodosList();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const markCompleteTodo = (id) => {
    completeTodo(id)
      .then((response) => {
        console.log(response.data);
        getTodosList();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const markInCompleteTodo = (id) => {
    inCompleteTodo(id)
      .then((response) => {
        console.log(response.data);
        getTodosList();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h2 className="todoList mt-2">Welcome to Todos List Details</h2>

      <Link to="/add-todo" className="btn btn-success mb-2">Register Todo</Link>

      <table className="table table-bordered table-hover dataone">
        <thead>
          <tr>
            <th>Id</th>
            <th>Todo Title</th>
            <th>Description</th>
            <th>Status</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todoId}>
              <td>{todo.todoId}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.completed ? "YES" : "NO"}</td>
              <td className="text-center">
                <button
                  className="btn btn-primary"
                  onClick={() => updateTodo(todo.todoId)}
                >
                  Update
                </button>

                <button
                  className="btn btn-danger "
                  style={{ marginLeft: 20 }}
                  onClick={() => deleteTodo(todo.todoId)}
                >
                  Delete
                </button>

                <button
                  className="btn btn-info "
                  style={{ marginLeft: 20 }}
                  onClick={() => markCompleteTodo(todo.todoId)}
                >
                  Complete
                </button>

                <button
                  className="btn btn-dark "
                  style={{ marginLeft: 20 }}
                  onClick={() => markInCompleteTodo(todo.todoId)}
                >
                  In-Complete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodoComponent;
