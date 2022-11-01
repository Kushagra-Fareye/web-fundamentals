import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { ErrorPage, Home, LoginPage, TodoPage, User } from "./Pages";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    axios
      .post(`/login?username=${username}&password=${password}`)
      .then((_) => {
        setIsLoggedIn(true);
      })
      .catch((e) => {
        setIsLoggedIn(false);
      });
  }, []);

  return (
    <>
      {!isLoggedIn ? (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
          </nav>
          <Routes>
            <Route path="/users" element={<User />} />
            <Route path="/todos" element={<TodoPage />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </>
      )}
    </>
  );
}
