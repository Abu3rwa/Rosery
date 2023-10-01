import React from "react";
import "./bootstrap.min.css";

import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar";
import HomeworkScreen from "./screens/HomeworkScreen";
import StudentProfile from "./screens/StudentProfile";
import Login from "./screens/Login";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
