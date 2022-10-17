import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { createTodo, updateTodo } from "../../Api/Todo/Todo";

export default function TodoForm(props) {
  const [title, setTitle] = useState(props.todo.title);
  const [status, setStatus] = useState(props.todo.status);
  const [body, setBody] = useState(props.todo.body);
  const [userId, setUserId] = useState(props.todo.userId);
  const [dueDate, setDueDate] = useState(props.todo.dueDate);

  const [todo, setTodo] = useState({});

  useEffect(() => {
    setTitle(props.todo.title);
    setStatus(props.todo.status);
    setBody(props.todo.body);
    setUserId(props.todo.userId);
    setDueDate(props.todo.dueDate);
  }, [props.todo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = {
      body,
      status,
      title,
      dueDate,
      userId,
    };
    setTodo(todo);
    if (props?.todo?.id) {
      await updateTodo(props.todo.id, todo);
    } else {
      todo["userId"] = parseInt(todo.userId);
      await createTodo(todo);
    }
  };

  const handleTodoFormSubmit = () => {};

  return (
    <Modal
      open={props.openTodoFormModal}
      title="Add/Update Todo"
      onCancel={props.handleTodoModalClose}
      onOk={handleTodoFormSubmit}
      centered
      destroyOnClose={true}
    >
      <form onSubmit={handleSubmit}>
        <label for="title">Title: </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <br />
        <label for="body">Body: </label>
        <input
          type="text"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
        <br />
        <label for="status">Status: </label>
        <input
          type="text"
          onChange={(e) => setStatus(e.target.value)}
          value={status}
        />
        <br />
        <label for="userId">User Id: </label>
        <input
          type="text"
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
        />
        <br />
        <label for="dueDate">Due Date: </label>
        <input
          type="text"
          onChange={(e) => setDueDate(e.target.value)}
          value={dueDate}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </Modal>
  );
}
