import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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
        <img src={logo} alt="" />
        <h5 className="tx-dark">
          <span className="md-rose  ">Name: </span>
          {profile.name}
        </h5>
        <h5 className="tx-dark">
          <span className="md-rose  ">Grade: </span>
          {profile.grade}
        </h5>
        <h5 className="tx-dark">
          <span className="md-rose  ">Address: </span>
          {profile.address}
        </h5>
        <h5 className="tx-dark">
          <span className="md-rose  ">Age:</span> {profile.age}
        </h5>
        <h5 className="tx-dark">
          <span className="md-rose  ">Email:</span> {profile.email}
        </h5>
        <h5 className="tx-dark">
          <span className="md-rose  ">Phone:</span> {profile.phoneNumber}
        </h5>
        <h5 className="tx-dark mt-3">
          <span className="md-rose  ">Subjects:</span> <br />
          {profile.subjects?.map((subject) => (
            <span>{subject} - </span>
          ))}
        </h5>
        {/* <h5>{profile.grade}</h5> */}
      </div>
      <div className="academics col-12 col-md-9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ut
        voluptatibus eveniet aut tempore inventore esse error doloribus animi,
        dicta in! Architecto itaque non voluptatum, assumenda delectus aut!
        Animi, voluptatem?
      </div>
    </div>
  );
}

export default StudentProfile;
