import React, { useEffect, useState } from "react";
import { createTodo, getTodoById, updateTodo } from "../services/TodoService";
import { useNavigate, useParams } from "react-router-dom";

const CreateTodoComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const navigator = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getOneTodo();
  }, [id]);

  const getOneTodo = () => {
    getTodoById(id).then((response) => {
      console.log(response.data);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setCompleted(response.data.completed);
    });
  };

  const addOrUpdateTodo = (e) => {
    e.preventDefault();
    const todo = { title, description, completed };
    console.log(todo);

    if (id) {
      updateTodo(id, todo)
        .then((response) => {
          console.log(response.data);
          navigator("/todos");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      createTodo(todo)
        .then((response) => {
          console.log(response.data);
          navigator("/todos");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const changeTitle = () => {
    if (id) {
      return <h2 className="updateHead mt-2">Welcome to Update Todo Page</h2>;
    } else {
      return <h2 className="regHead mt-2">Welcome to Register Todo Page</h2>;
    }
  };

  return (
    <div className="container">
      <div className="card col-md-6 offset-md-3 offset-md-3 mt-3 shadow-lg">
        {changeTitle()}
        <div className="card-body">
          <form>
            <div className="form-group mb-2">
              <label className="label">Enter Todo Title : </label>
              <input
                type="text"
                name="title"
                value={title}
                placeholder="Enter Todo Title"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group mb-2">
              <label className="label">Enter Todo Description : </label>
              <input
                type="text"
                name="description"
                value={description}
                placeholder="Enter Todo Description"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-group mb-2">
              <label className="label">Todo Completed : </label>
              <select
                className="form-control"
                value={completed}
                onChange={(e) => setCompleted(e.target.value)}
              >
                <option value="false">NO</option>
                <option value="true">YES</option>
              </select>
            </div>

            <div>
              <button
                className="btn btn-primary form-control mt-1"
                onClick={(e) => addOrUpdateTodo(e)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTodoComponent;
