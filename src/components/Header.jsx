import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>SharePay</h1>
      </div>

      <div className="center-link">
        <a href="#home" className="nav-link home">
          Home
        </a>
        <a href="#about" className="nav-link about">
          About
        </a>
        <a href="#services" className="nav-link services">
          Services
        </a>
        <a href="#services" className="nav-link services">
          Contact
        </a>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/login" className="nav-link login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-link register">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
