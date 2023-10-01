import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

import "./navBar.css";
function Navbar() {
  return (
    <div className="nav-bar row">
      <div className="title-container col-12 justify-content-between justify-content-md-start">
        <img src={logo} className="sm-logo me-3 " alt="home" />

        <h6 className="title text-center">
          {/* <Link to="/" className="title text-center link "> */}
          Rosery Kindergartens & School
          {/* </Link> */}
        </h6>
      </div>
      {/* <div className="links col-4">
        <li>
          {" "}
          <a href="#"> Log In</a>
        </li>
      </div> */}
    </div>
  );
}

export default Navbar;
