import React from "react";
import image from "../assets/pic1.jpg";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import "./home.css";
export default function HomeScreen() {
  return (
    <div className="home row">
      <div className="img-container">
        <img src={image} className="background-img" alt="home" />
      </div>
      <div className="hero">
        <div>
          <div className="moto">
            <h1>Get</h1>
            <h5> Education & Inspiration</h5>
          </div>
          <img src={logo} className="logo-md" alt="logo" />
          <div>
            <Link className="btn btn-outline admission-btn" to="addmission">
              Admission
            </Link>

            <Link className="link login-btn btn ms-2" to="login">
              login
            </Link>
          </div>
          {/* {!localStorage.getItem("token") ? (
            <></>
          ) : (
            <div>
              <button className="btn btn-outline admission-btn">
                Admission
              </button>

              <Link className="link login-btn btn ms-2" to="login">
                login
              </Link>
            </div>
          )} */}
        </div>
      </div>
      {/* <div className="col-12 info">
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut
          corrupti repudiandae officia labore. Cupiditate quibusdam minima
          soluta dolorem tenetur quisquam. Nisi quis suscipit magnam doloremque
          ut itaque hic cumque.
        </h5>
      </div> */}
    </div>
  );
}
