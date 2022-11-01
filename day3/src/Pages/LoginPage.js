import { Button, Form, Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function LoginPage(props) {
  const handleSubmit = (values) => {
    axios
      .post(`/login?username=${values.username}&password=${values.password}`)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("username", values.username);
          localStorage.setItem("password", values.password);
          props.setIsLoggedIn(true);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Form name="basic" onFinish={handleSubmit}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
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
