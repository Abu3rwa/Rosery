import { useState } from "react";
import { Link } from "react-router-dom";
import "./studentAddmission.css";
import logo from "../assets/logo.jpg";

import { axiosInstance } from "../config/axiosInstance";
import { CircularProgress } from "@mui/material";
// import { Spinner } from "react-bootstrap"
const StudentAddmission = () => {
  const [access, setAcess] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [grade, setGrade] = useState(0);
  const [subjects, setSubjects] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const body = {
    name,
    email,
    address,
    phoneNumber,
    grade,

    age,
  };
  body.subjects = subjects.split(",");
  console.log(error);
  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    axiosInstance
      .post("/students/create", body)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          window.location.replace("/profile");
          console.log(res.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (error?.response?.data.msg) {
          setLoading(false);
          setError(error?.response?.data.msg);
          console.log(error?.response?.data.msg);
          setTimeout(() => {
            setError("");
          }, 5000);
        }
      });
  }
  return (
    <>
      <div className="student-addmission">
        <h2 className="mt-3 text-center">Student Addmission</h2>
        <form
          autoCapitalize="off"
          className="   col-11 col-md-7 row"
          onSubmit={handleSubmit}
        >
          {/* //////////////////////////////// */}
          <div className="form-group col-11 mt-3">
            <label className="form-color">Student's Name</label>
            <input
              className="form-control mt-2"
              name="name"
              type="text"
              //   placeholder="e.g. 342fj32"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* //////////////////////////////// */}
          <div className="form-group col-11 mt-3">
            <label className="form-color">Email</label>
            <input
              className="form-control mt-2"
              name="email"
              type="text"
              //   placeholder="e.g. 342fj32"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* //////////////////////////////// */}
          <div className="form-group col-11 mt-3">
            <label className="form-color">Phone</label>
            <input
              className="form-control mt-2"
              name="phone"
              type="number"
              //   placeholder="e.g. 342fj32"
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          {/* //////////////////////////////// */}
          <div className="form-group col-11 mt-3">
            <label className="form-color">Age</label>
            <input
              className="form-control mt-2"
              name="age"
              type="text"
              //   placeholder="e.g. 342fj32"
              required
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group col-11 mt-3">
            <label className="form-color">Grade</label>
            <input
              className="form-control mt-2"
              name="grade"
              type="number"
              //   placeholder="e.g. 342fj32"
              required
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>
          {/* //////////////////////////////// */}
          <div className="form-group col-11 mt-3">
            <label className="form-color">address</label>
            <input
              className="form-control mt-2"
              name="address"
              type="text"
              //   placeholder="e.g. 342fj32"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          {/* //////////////////////////////// */}
          <div className="form-group col-11 mt-3">
            <label className="form-color">subjects</label>
            <input
              className="form-control mt-2"
              name="Subjects"
              type="text"
              placeholder="e.g. English, Math, science"
              required
              onChange={(e) => setSubjects(e.target.value)}
            />
            <small className="light-rose ">
              Please, separate the subjects with a comma
            </small>
          </div>

          <div className="actions">
            <Link to="/" className="link">
              Back Home
            </Link>
            <button type="submit" className="btn  btn-sm" mt={3}>
              {" "}
              Submit
            </button>

            {/* <Google /> */}
          </div>
        </form>

        <div className={error ? "error-box showError" : "error-box"}>
          <h5 className="text-white my-2 text-center me-3">{error}</h5>{" "}
          <Link to="/">Support</Link>
        </div>
        {loading && <CircularProgress size={50} className="loading" />}
      </div>
    </>
  );
};

export default StudentAddmission;
