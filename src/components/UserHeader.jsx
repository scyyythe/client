import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";
function UserHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img src="/images/BIL SPLIT.png" alt="Logo" className="logo" />
        <h1>SharePay</h1>
      </div>

      <div className="profile-section" ref={menuRef}>
        {/* <button className="premuim-btn">Upgrade</button> */}
        <div className="profile-info" onClick={() => setMenuOpen(!menuOpen)}>
          <img src="/images/profile.jpg" alt="User Profile" className="profile-pic" />
          <span className="username">Angel</span>
          <i className={`fa-solid fa-chevron-down dropdown-arrow ${menuOpen ? "open" : ""}`}></i>
        </div>

        {menuOpen && (
          <div className="dropdown-menu">
            <Link to="/settings" className="dropdown-item">
              <i className="fa-solid fa-gear"></i> Settings
            </Link>
            <Link to="/archived" className="dropdown-item">
              <i className="fa-solid fa-box-archive"></i> Archived
            </Link>
            <button className="dropdown-item logout-btn" onClick={handleLogout}>
              <i className="fa-solid fa-sign-out-alt"></i> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default UserHeader;
