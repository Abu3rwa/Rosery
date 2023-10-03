import "./App.css";
import React from "react";
import "./bootstrap.min.css";

import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar";
import HomeworkScreen from "./screens/HomeworkScreen";
import StudentProfile from "./screens/StudentProfile";
import Login from "./screens/Login";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<StudentProfile />} />
        <Route path="/homework" element={<HomeworkScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
