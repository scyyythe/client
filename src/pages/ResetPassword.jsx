import AnimatedWrapper from "../components/anim/AnimatedWrapper";
import "../styles/Header.css";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Reset() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatedWrapper>
      <div className="reset-container">
        <div className="left">
          <img src="/images/forgot.png" alt="Forgot Password" />
        </div>
        <div className="right-reset">
          <form>
            <div className="label">
              <h3>Reset your password</h3>
              <p>Your new password must be different from previously used passwords.</p>
            </div>

            <div className="pass-con">
              <label htmlFor="password">Password</label>
              <div className="input-container-password">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter new password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <i
                  className={`far ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>

              <label htmlFor="confirm_password">Confirm Password</label>
              <div className="input-container-password">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirm_password"
                  placeholder="Confirm new password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  required
                />
                <i
                  className={`far ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                ></i>
              </div>

              <button type="submit">Reset Password</button>
            </div>

            <div className="link-reset">
              <Link to="/login" className="forgot-link">
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </AnimatedWrapper>
  );
}

export default Reset;
