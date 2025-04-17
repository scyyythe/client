import React from "react";
import SearchBar from "../SearchBar";

function Header() {
  return (
    <header>
      <h5>Welcome back, Angel!</h5>
      <div className="search-dashboard">
        <SearchBar placeholder="Search" />
        <div className="notification-icon">
          <i className="fa-solid fa-bell"></i>
          <span className="notification-badge">3</span>
        </div>
      </div>
    </header>
  );
}
export default Header;
