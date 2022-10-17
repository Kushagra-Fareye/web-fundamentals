import { Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { deleteTodo, getTodos } from "../../Api/Todo/Todo";

export default function DisplayTodo(props) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, [todos]);

  const deleteTodoData = async (todo) => {
    deleteTodo(todo.id);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Action",
      key: "action",
      render: (_, index) => (
        <Space size="middle">
          <a
            onClick={(e) => {
              e.preventDefault();
              props.handleOpenTodoFormModal(index);
            }}
          >
            Edit
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              deleteTodoData(index);
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={todos} rowKey={todos.id} />;
}
