import { useState, useContext } from "react";
import { Link } from "react-router-dom";

// import { Spinner } from "react-bootstrap"
const HomeworkScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // loginCall({ email, password }, dispatch)
  };

  return (
    <div className=" login row col-12">
      {/*        
        <div className="spinner-parent">
          <Spinner
            className="load-profile-spinner m-3"
            variant="primary"
            animation="border"
            role="status"
          ></Spinner>
</div> */}
      <form className=" col-10 col-md-5" onSubmit={handleSubmit}>
        <h3 className="text-center form-color ">Log In</h3>
        <div className="form-group">
          <label className="form-color">email</label>

          <input
            className="form-control my-3"
            name="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-color">password</label>{" "}
          <input
            name="password"
            className="form-control mb-3"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="auth-actions-ui">
          <button
            type="button"
            className="btn  btn-success btn-sm"
            onClick={handleSubmit}
            mt={3}
          >
            {" "}
            Log in
          </button>
          <Link to="/register" className="">
            Create an Account
          </Link>
          {/* <Google /> */}
        </div>
      </form>
    </div>
  );
};

export default HomeworkScreen;
