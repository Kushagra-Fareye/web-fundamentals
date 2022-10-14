import { Button } from "antd";
import React, { PureComponent } from "react";
import { AddButton, AddUser, Counter, DisplayUsers } from "./Components/index";

export default class App1 extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0,
      todoList: [],
      userList: [],
      openDrawer: false,
    };
  }

  incrementCounter = () => {
    let newCounter = this.state.counter + 1;
    this.setState({ counter: newCounter });
  };

  addTodo = (todo) => {};

  addUser = (user) => {
    user = { ...user, key: this.state.userList.length + 1 };
    this.setState({ userList: this.state.userList.concat(user) });
  };

  toggleDrawer = () => {
    let previousState = this.state.openDrawer;
    this.setState({ openDrawer: !previousState });
  };

  render() {
    return (
      <div>
        <AddButton incrementCounter={this.incrementCounter} />
        <Counter counter={this.state.counter} />
        <Button onClick={this.toggleDrawer}>Add User</Button>
        <AddUser
          openDrawer={this.state.openDrawer}
          toggleDrawer={this.toggleDrawer}
          onFormSubmit={this.addUser}
          addUser={this.addUser}
        />
        <DisplayUsers userList={this.state.userList} />
      </div>
    );
  }
}
