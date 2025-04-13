import React, { useState } from "react";
import "../../styles/Standard.css";
import Dashboard from "./Dashboard";
import Settings from "../../components/Settings";
import Archived from "./Archived";

function StandardDashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "settings":
        return <Settings />;
      case "list":
        return <Archived />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="head-side">
          <img src="/images/icons8-receipt-48.png" alt="Receipt Icon" />
          <h1>SplitBill</h1>
        </div>

        <nav>
          <a onClick={() => setActivePage("dashboard")}>
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </a>
          <a onClick={() => setActivePage("list")}>
            <i className="fas fa-archive"></i> Archived
          </a>
          <a onClick={() => setActivePage("settings")}>
            <i className="fas fa-cogs"></i> Settings
          </a>
          <a onClick={() => alert("Logging out...")}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </a>
        </nav>

        <div className="foot">
          <h4>
            Let's upgrade <br /> to premium features
          </h4>
          <p>Upgrade to premium and get exclusive features</p>
          <img src="/images/Untitled design.png" alt="Upgrade Images" />
        </div>
      </aside>

      <main className="main">{renderContent()}</main>
    </div>
  );
}

export default StandardDashboard;
