import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Academics from "../components/Academics";
import { axiosInstance } from "../config/axiosInstance";
import logo from "../assets/logo.jpg";
import "./studentProfile.css";
function StudentProfile() {
  const [profile, setProfile] = useState([]);
  console.log(localStorage.getItem("token"));
  function loadProfile() {
    axiosInstance
      .get("/auth/me", {
        // const profile = axios.get("http://localhost:8000/api/auth/me", {
        headers: {
          "Context-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((profile) => {
        console.log(profile.data);
        profile.data && setProfile(profile.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    loadProfile();
  }, []);
  return (
    <>
      {profile && (
        <div className="profile row">
          <Academics />
        </div>
      )}
    </>
  );
}

export default StudentProfile;
