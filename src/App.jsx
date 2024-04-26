import React from "react";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Messages from "./components/Messages";
import Profile from "./components/Profile";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Select from "./pages/select/Select";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/select" element={<Select />} />
      </Routes>
    </>
  );
}

export default App;
