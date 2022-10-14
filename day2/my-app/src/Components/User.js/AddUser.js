import { Button, Drawer, Form, Input } from "antd";
import FormItemInput from "antd/es/form/FormItemInput";
import React, { PureComponent } from "react";
import { userDetails } from "./UserDetails/UserDetails";

export default class AddUser extends PureComponent {
  render() {
    return (
      <Drawer
        placement="right"
        title="Add User"
        open={this.props.openDrawer}
        onClose={this.props.toggleDrawer}
      >
        <Form layout="vertical" onFinish={this.props.addUser}>
          {userDetails.map((detail) => {
            return (
              <Form.Item label={detail.title} name={detail.key}>
                <Input />
              </Form.Item>
            );
          })}
          <Form.Item>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Drawer>
    );
  }
}
