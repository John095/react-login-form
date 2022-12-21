import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Register = () => {
  const [icon, setIcon] = useState(<AiFillEyeInvisible />);
  const [type, setType] = useState("password");

  const handleToggle = () => {
    if (type === "password") {
      setIcon(<AiFillEye />);
      setType("text");
    } else {
      setIcon(<AiFillEyeInvisible />);
      setType("password");
    }
  };

  const handleSubmit = () => {};

  return (
    <div className="container">
      <div className="form-container">
        <h1>Register</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <input type={type} placeholder="Password" />
              <span onClick={handleToggle}>{icon}</span>
            </div>
            <div className="input-group">
              <input type={type} placeholder="Confirm Password" />
              <span onClick={handleToggle}>{icon}</span>
            </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
            <p className="link">Forgot Password?</p>
          </form>
        </div>
        <p className="text">
          Already have an account?&nbsp;&nbsp;
          <span className="link">Sign In.</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
