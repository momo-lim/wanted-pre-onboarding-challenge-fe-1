import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import TodoDetail from "./pages/TodoDetail";
import TodoHome from "./pages/TodoHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/todo" element={<TodoHome />} />
      <Route path="/todo/:id" element={<TodoDetail />} />
    </Routes>
  );
}

export default App;
