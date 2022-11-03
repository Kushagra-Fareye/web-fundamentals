import { Button, Menu } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { ErrorPage, Home, LoginPage, TodoPage, User } from "./Pages";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const csrfToken = document.cookie.replace(
      /(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    console.log(username, password, csrfToken);
    if (username === null || password === null) {
      setIsLoggedIn(false);
      axios
        .post(`/login?username=${username}&password=${password}`)
        .then((res) => {
          if (res.status === 200) {
            setIsLoggedIn(true);
          }
        })
        .catch((e) => {
          setIsLoggedIn(false);
        });
    }
  }, []);

  const handleLogout = () => {
    axios.get("/logout").then(() => {
      setIsLoggedIn(false);
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    });
  };
  return (
    <>
      {!isLoggedIn ? (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
            <Menu.Item key={"home"}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/users">Users</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/todos">Todos</Link>
            </Menu.Item>
          </Menu>

          <Routes>
            <Route path="/users" element={<User />} />
            <Route path="/todos" element={<TodoPage />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Button type="primary" onClick={handleLogout} danger>
            Logout
          </Button>
        </>
      )}
    </>
  );
}
