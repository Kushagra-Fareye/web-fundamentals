import { List } from "antd";
import React, { Component } from "react";

export default class UserList extends Component {
  render() {
    return <List size="large" dataSource={this.props.userList} />;
  }
}
