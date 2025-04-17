import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedWrapper from "../components/anim/AnimatedWrapper";
import "../styles/LoginReg.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nickname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering User:", formData);
  };

  return (
    <AnimatedWrapper>
      <div className="login-container">
        <div className="right-con">
          <img src="/images/register.png" alt="login" />
          <div className="text-below">
            <h3>Sign Up & Settle Up.</h3>
            <p>
              A better way to split expenses starts here. Join now and <br />
              make bill splitting effortless, fair, and stress-free.
            </p>
          </div>
        </div>
        <div className="form">
          <div className="back-arrow-register" onClick={() => (window.location.href = "/")}>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <h2>Create new account</h2>

          <p>Start your day with us.</p>

          <div className="con-form">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.form
                  key="step1"
                  onSubmit={handleNext}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="first-row">
                    <div className="firstname">
                      <label htmlFor="firstName">First Name</label>
                      <div className="input-container">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="lastname">
                      <label htmlFor="lastName">Last Name</label>
                      <div className="input-container">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <label htmlFor="nickname">Nickname</label>
                  <div className="input-container">
                    <input
                      type="text"
                      name="nickname"
                      placeholder="Nickname"
                      value={formData.nickname}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <label htmlFor="email">Email Address</label>
                  <div className="input-container">
                    <i className="fa-regular fa-at"></i>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="login-button">
                    Next
                  </button>
                </motion.form>
              ) : (
                <motion.form
                  key="step2"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {/* Return Arrow */}
                  <div className="back-arrow" onClick={handleBack}>
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>

                  <label htmlFor="username">Username</label>
                  <div className="input-container">
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
                      placeholder="Enter Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <i className={`far ${showPassword ? "fa-eye-slash" : "fa-eye"}`} onClick={togglePassword}></i>
                  </div>

                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="input-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <i className={`far ${showPassword ? "fa-eye-slash" : "fa-eye"}`} onClick={togglePassword}></i>
                  </div>

                  <button type="submit" className="login-button">
                    Register
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            <div className="or-div">
              <span>By signing up, I agree to the Terms of Service and Privacy Policy</span>
            </div>
            <div className=" or-div">
              <span>Already have an account?</span>
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedWrapper>
  );
}

export default Register;
