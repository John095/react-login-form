import React from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";

const Login = () => {
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
        <h1>Login</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <input type={type} placeholder="Password" />
              <span onClick={handleToggle}>{icon}</span>
            </div>
            <div className="button">
              <input type="submit" value="Login" />
            </div>
            <p className="link">Forgot Password?</p>
          </form>
        </div>
        <p className="text">
          Don't have an account?&nbsp;&nbsp;
          <span className="link">Sign Up.</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
