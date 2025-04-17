import React, { useState } from "react";
import UserHeader from "../../components/pages/UserHeader";
import Card from "../../components/card/Card";
import CreateModal from "../../components/popup/CreateModal";

function Dashboard({ onCardClick }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="dashboard-main">
      <div className="dashboard-con">
        <UserHeader />
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
            onClick={() =>
              onCardClick({
                category: "Food Expense",
                description: "Beautiful painting",
                date: "April 14, 2025",
                imageUrl: "register.png",
              })
            }
          />
        </div>
      </div>

      <CreateModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Dashboard;
