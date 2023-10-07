import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Academics from "../components/Academics";
import { axiosInstance } from "../config/axiosInstance";
import logo from "../assets/logo.jpg";
import "./studentProfile.css";
import { Avatar, CircularProgress } from "@mui/material";
function StudentProfile() {
  const [active, setActive] = useState([]);
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState([]);
  function loadProfile() {
    setLoading(true);
    axiosInstance
      .get("/auth/me", {
        // const profile = axios.get("http://localhost:8000/api/auth/me", {
        headers: {
          "Context-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((profile) => {
        if (profile.data) {
          setProfile(profile.data);
          setLoading(false);

          localStorage.setItem("active", profile?.subjects[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    setActive(localStorage.getItem("active"));
    loadProfile();
  }, [active]);
  return (
    <>
      {profile && !loading ? (
        <div className="profile row">
          <div className="main-info col-12 col-md-3">
            <button
              className="btn btn-danger logout btn-sm"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.replace("/");
              }}
            >
              Logout
            </button>
            {/* <img src={logo} alt="" />
             */}
            <Avatar className="img">{profile?.name?.split(" ")[0]}</Avatar>

            <h5 className="tx-dark">
              <span className="md-rose  ">Name | </span>
              {profile.name}
            </h5>
            <h5 className="tx-dark">
              <span className="md-rose  ">Grade | </span>
              {profile.grade}
            </h5>
            <h5 className="tx-dark">
              <span className="md-rose  ">Address | </span>
              {profile.address}
            </h5>
            <h5 className="tx-dark">
              <span className="md-rose  ">Age |</span> {profile.age}
            </h5>
            <h5 className="tx-dark">
              <span className="md-rose  ">Email |</span> {profile.email}
            </h5>
            <h5 className="tx-dark">
              <span className="md-rose  ">Phone |</span> {profile.phoneNumber}
            </h5>

            {/* <h5>{profile.grade}</h5> */}
          </div>
          <Academics
            profile={profile}
            active={active}
            // homeWorks={homeWorks}
            // setHomeworks={setHomeworks}
          />
        </div>
      ) : (
        <div className="loading-parent">
          <CircularProgress size={50} className="loading" />
        </div>
      )}
    </>
  );
}

export default StudentProfile;
