import React, { useState } from "react";
import "../../styles/Standard.css";
import Dashboard from "./Dashboard";
import Settings from "../../components/pages/Settings";
import Archived from "./Archived";
import CardDetails from "./CardDetails";

function StandardDashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [selectedCard, setSelectedCard] = useState(null);

  const renderContent = () => {
    if (selectedCard) {
      return <CardDetails data={selectedCard} onBack={() => setSelectedCard(null)} />;
    }

    switch (activePage) {
      case "settings":
        return <Settings />;
      case "list":
        return <Archived />;
      default:
        return <Dashboard onCardClick={(card) => setSelectedCard(card)} />;
    }
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="head-side">
          <img src="/images/icons8-receipt-48.png" alt="Receipt Icon" />
          <h1>SharePay</h1>
        </div>

        <nav>
          <a
            onClick={() => {
              setActivePage("dashboard");
              setSelectedCard(null);
            }}
          >
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </a>
          <a
            onClick={() => {
              setActivePage("list");
              setSelectedCard(null);
            }}
          >
            <i className="fas fa-archive"></i> Archived
          </a>
          <a
            onClick={() => {
              setActivePage("settings");
              setSelectedCard(null);
            }}
          >
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
