import React, { useState } from "react";
import AnimatedWrapper from "../components/AnimatedWrapper";
import "../styles/Register.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <AnimatedWrapper>
      <div className="login-container">
        <div className="right-con">
          <img src="/images/register.png" alt="login" />

          <div className="text-below">
            <h3>Fair. Fast. Effortless.</h3>
            <p>
              Split bills with ease and spend more time enjoying <br /> the moments that matter.
            </p>
          </div>
        </div>
        <div className="form">
          <h2>Hi, Welcome Back!</h2>
          <p>Start your day with us.</p>

          <div className="con-form">
            <div className="buttons">
              <button type="button">
                <i className="fa-brands fa-google"></i> Sign in with Google
              </button>
              <button type="button">
                <i className="fa-brands fa-facebook"></i> Sign in with Facebook
              </button>
            </div>

            <div className="or-div">
              <span>Or Sign in with Email</span>
            </div>

            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <div className="input-container">
                <i className="fa-regular fa-at"></i>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <label htmlFor="password">Password</label>
              <div className="input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <i
                  className={`fa-${showPassword ? "regular fa-eye-slash" : "regular fa-eye"}`}
                  onClick={togglePassword}
                ></i>
              </div>

              <div className="checkbox-container">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>

              <button type="submit" className="login-button">
                Login
              </button>
            </form>
            <div className="or-div">
              <span>Don't have an account?</span>{" "}
              <a href="/register">
                <Link to="/register">Register </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedWrapper>
  );
}

export default Login;
