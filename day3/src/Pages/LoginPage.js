import { Button, Form, Input, Modal } from "antd";
import axios from "axios";
import React from "react";

export default function LoginPage(props) {
  const handleSubmit = (values) => {
    axios
      .post(
        `/login`,
        `username=${values.username}&password=${values.password}`,
        { "content-type": "application/x-www-form-urlencoded" }
      )
      .then((res) => {
        if (res.request.status === 200) {
          localStorage.setItem("username", values.username);
          localStorage.setItem("password", values.password);
          props.setIsLoggedIn(true);
        }
      })
      .catch((e) => {
        if (e.response.status === 401) {
          Modal.error({
            closable: false,
            title: "Wrong Credentials.",
            content: "Incorrect Username or Password.",
          });
        }
      });
  };

  return (
    <div>
      <Form name="basic" onFinish={handleSubmit} resetFields>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
          initialValue=""
          resetFields={true}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          resetFields={true}
          initialValue=""
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
