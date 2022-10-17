import { Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../../Api/User/User";

export default function DisplayUsers(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, [users]);

  const deleteUserData = async (user) => {
    deleteUser(user.id);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Blood Group",
      dataIndex: "bloodGroup",
      key: "bloodGroup",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Action",
      key: "action",
      render: (_, index) => (
        <Space size="middle">
          <a
            onClick={(e) => {
              e.preventDefault();
              props.handleOpenUserFormModal(index);
            }}
          >
            Edit
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              deleteUserData(index);
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={users} rowKey={users.id} />;
}
