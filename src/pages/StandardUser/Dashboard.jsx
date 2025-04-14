import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";
import CreateModal from "../../components/CreateModal";

function Dashboard() {
  const [showModal, setShowModal] = useState(false);

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

          <button className="create-new-btn" onClick={() => setShowModal(true)}>
            <i className="fas fa-plus"></i> Create
          </button>
        </div>
      </div>

      <div className="body-dash">
        <Card
          category="Food Expense"
          description="Beautiful painting"
          date="April 14, 2025"
          imageUrl="register.png"
          onEdit={() => console.log("Edit clicked")}
          onDelete={() => console.log("Delete clicked")}
          onArchive={() => console.log("Archive clicked")}
        />

        <Card
          category="Travel in Tokyo"
          description="Beautiful painting"
          date="April 14, 2025"
          imageUrl="login.png"
          onEdit={() => console.log("Edit clicked")}
          onDelete={() => console.log("Delete clicked")}
          onArchive={() => console.log("Archive clicked")}
        />

        <Card
          category="Laag laag"
          description="Beautiful painting"
          date="April 14, 2025"
          imageUrl="register.png"
          onEdit={() => console.log("Edit clicked")}
          onDelete={() => console.log("Delete clicked")}
          onArchive={() => console.log("Archive clicked")}
        />
      </div>

      {/* ✅ Render modal when showModal is true */}
      <CreateModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Dashboard;
