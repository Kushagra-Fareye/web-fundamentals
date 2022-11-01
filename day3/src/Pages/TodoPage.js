import { Button } from "antd";
import React, { useState } from "react";
import { DisplayTodos, TodoForm } from "../Components";

export default function TodoPage() {
  const [todoFormData, setTodoFormData] = useState({});
  const [openTodoFormModal, toggleTodoFormModal] = useState(false);

  const handleTodoModalClose = () => {
    toggleTodoFormModal(false);
    setTodoFormData({});
  };

  const handleOpenTodoFormModal = (todoData) => {
    setTodoFormData(todoData);
    toggleTodoFormModal(true);
  };

  return (
    <div>
      <br />
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
    </div>
  );
}
