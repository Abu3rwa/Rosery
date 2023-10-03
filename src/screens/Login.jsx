import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import logo from "../assets/logo.jpg";

import { axiosInstance } from "../config/axiosInstance";
// import { Spinner } from "react-bootstrap"
const Login = () => {
  const [access, setAcess] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    axiosInstance
      .post("/auth", { access })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.data.token);
        data.data.token && window.location.replace("/profile");
        setLoading(false);
      })
      .catch((error) => {
        setError(error?.response?.data.errors.message);
        setTimeout(() => {
          setError("");
        }, 5000);
      });
  }
  return (
    <>
      <div className="spinner-parent">
        {/* <Spinner
            className="load-profile-spinner m-3"
            variant="primary"
            animation="border"
            role="status"
          ></Spinner> */}
      </div>
      <div className="login">
        <form
          autoCapitalize="off"
          className="   col-10 col-md-7 row"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center">Login</h1>
          <img src={logo} className="logo-md" alt="logo" />

          <div className="form-group col-10 mt-5">
            <label className="form-color">Inter Your Access Key</label>

            <input
              className="form-control my-3"
              name="access"
              type="text"
              placeholder="e.g. 342fj32"
              required
              onChange={(e) => setAcess(e.target.value)}
            />
          </div>
          {error && (
            <div className="text-center">
              <small className="text-danger my-2 text-center">{error}</small> -{" "}
              <Link to="/">Support</Link>
            </div>
          )}
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
      </div>
    </>
  );
};

export default Login;
