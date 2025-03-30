import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedWrapper from "../components/AnimatedWrapper";
import "../styles/LoginReg.css";
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

  return (
    <AnimatedWrapper>
      <motion.div
        className="login-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="form"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="back-arrow" onClick={() => (window.location.href = "/")}>
            <i className="fa-solid fa-arrow-left"></i>
          </div>

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

            <form>
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

              <div className="label-con">
                <label htmlFor="password">Password</label>
                <label>
                  <Link to="/forgot" className="forgot-link">
                    Forgot Password
                  </Link>
                </label>
              </div>

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
              <span>Don't have an account?</span> <Link to="/register">Register</Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="right-con"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="image">
            <img src="/images/login.png" alt="login" />
          </div>

          <div className="text-below">
            <h3>Fair. Fast. Effortless.</h3>
            <p>
              Split bills with ease and spend more time enjoying <br /> the moments that matter.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatedWrapper>
  );
}

export default Login;
