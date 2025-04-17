import React, { useState } from "react";
import Card from "../../components/card/Card";
import ExpenseCard from "../../components/card/ExpenseCard";
import "../../styles/Standard.css";

function Archived() {
  const [activeTab, setActiveTab] = useState("expenses");
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  const handleArchive = () => {
    console.log("Archive clicked");
  };

  const handleCardClick = (data) => {
    console.log("Card clicked:", data);
  };

  return (
    <div className="archived-container">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "expenses" ? "active" : ""}`}
          onClick={() => setActiveTab("expenses")}
        >
          Archived Expenses
        </button>
        <button className={`tab-button ${activeTab === "bills" ? "active" : ""}`} onClick={() => setActiveTab("bills")}>
          Archived Bills
        </button>
      </div>

      {activeTab === "expenses" && (
        <div className="tab-content">
          <h2 className="tab-heading">Archived Expenses</h2>

          <ExpenseCard
            isActive={activeCardIndex === 0}
            onToggle={() => setActiveCardIndex((prev) => (prev === 0 ? null : 0))}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onArchive={handleArchive}
          />
        </div>
      )}

      {activeTab === "bills" && (
        <div className="tab-content">
          <h2 className="tab-heading">Archived Bills</h2>
          <Card
            category="Food Expense"
            description="Beautiful painting"
            date="April 14, 2025"
            imageUrl="register.png"
            onEdit={handleEdit}
            onDelete={handleDelete}
            onArchive={handleArchive}
            onClick={() =>
              handleCardClick({
                category: "Food Expense",
                description: "Beautiful painting",
                date: "April 14, 2025",
                imageUrl: "register.png",
              })
            }
          />
        </div>
      )}
    </div>
  );
}

export default Archived;
