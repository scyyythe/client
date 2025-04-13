import React from "react";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";
function Dashboard() {
  return (
    <div className="dashboard-main">
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
      <div className="head-body">
        <p>Overview of Active Bills</p>

        <div className="right-head-body">
          <label htmlFor="filter">
            <i className="fas fa-filter"></i> Filter
          </label>

          <button className="create-new-btn">
            <i className="fas fa-plus"></i> Create
          </button>
        </div>
      </div>
      <div className="body-dash">
        <Card
          category="Food Expense"
          description="This is a description for food expenses."
          date="April 1"
          imageUrl="register.png"
        />
        <Card
          category="Food Expense"
          description="This is a description for food expenses."
          date="April 1"
          imageUrl="login.png"
        />
        <Card
          category="Food Expense"
          description="This is a description for food expenses."
          date="April 1"
          imageUrl="register.png"
        />
      </div>
    </div>
  );
}

export default Dashboard;
