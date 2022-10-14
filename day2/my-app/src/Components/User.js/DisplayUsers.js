import { Button, Space, Table } from "antd";
import React, { PureComponent } from "react";
import { userDetails } from "./UserDetails/UserDetails";

export default class DisplayUsers extends PureComponent {
  tableColumns = [
    ...userDetails,
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Space>
      ),
    },
  ];

  render() {
    return (
      <Table
        columns={this.tableColumns}
        dataSource={this.props.userList}
        rowKey="key"
      />
    );
  }
}
