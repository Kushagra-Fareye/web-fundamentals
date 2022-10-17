import { Button } from "antd";
import React, { useState } from "react";
import { TodoForm, UserForm, DisplayTodos, DisplayUsers } from "./Components";

export default function App() {
  const [name, setName] = useState("");
  const [openUserFormModal, toggleUserFormModal] = useState(false);
  const [openTodoFormModal, toggleTodoFormModal] = useState(false);
  const [userFormData, setUserFormData] = useState({});
  const [todoFormData, setTodoFormData] = useState({});

  const handleModalClose = () => {
    toggleUserFormModal(false);
    setUserFormData({});
  };

  const handleTodoModalClose = () => {
    toggleTodoFormModal(false);
    setTodoFormData({});
  };

  const handleOpenUserFormModal = (userData) => {
    setUserFormData(userData);
    toggleUserFormModal(true);
  };

  const handleOpenTodoFormModal = (todoData) => {
    setTodoFormData(todoData);
    toggleTodoFormModal(true);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h1>{`Hello ${name}, Welcome to FarEye!`}</h1>
      <br />
      <br />
      <Button onClick={() => toggleUserFormModal(true)}>Add User</Button>
      <br />
      <UserForm
        openUserFormModal={openUserFormModal}
        handleModalClose={handleModalClose}
        user={userFormData}
      />

      <br />
      <Button onClick={() => toggleTodoFormModal(true)}>Add Todo</Button>
      <br />
      <TodoForm
        openTodoFormModal={openTodoFormModal}
        handleTodoModalClose={handleTodoModalClose}
        todo={todoFormData}
      />
      <br />
      <DisplayTodos handleOpenTodoFormModal={handleOpenTodoFormModal} />
      <br />
      <DisplayUsers handleOpenUserFormModal={handleOpenUserFormModal} />
    </div>
  );
}
