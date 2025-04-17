import React, { useState } from "react";
import ParticipantModal from "../../components/popup/ParticipantModal";
import ExpenseCard from "../../components/card/ExpenseCard";
import NewExpenseModal from "../../components/popup/NewExpense";
import UpdateModal from "../../components/popup/UpdateModal";
const CardDetails = ({ data, onBack }) => {
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showParticipantModal, setShowParticipantModal] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleCreate = (expense) => {
    console.log("Created Expense:", expense);
  };

  const onEdit = () => console.log("Edit clicked");
  const onDelete = () => console.log("Delete clicked");
  const onArchive = () => console.log("Archive clicked");

  if (!data) return <p>No card data found.</p>;

  const { category, description, date, imageUrl } = data;

  return (
    <div className="dashboard-main">
      <div className="card-details">
        <div className="top-card-det">
          <div className="left-side">
            <button onClick={onBack} className="back-button">
              <i className="fa fa-arrow-left"></i>
            </button>
            <h3 className="card-category">Bill Details</h3>
          </div>
          <div className="right-side">
            <p className="card-date">Created on {date}</p>
          </div>
        </div>

        <div className="container-details">
          <div className="right-con-det">
            <div className="card-det">
              <div className="descrip-con">
                {imageUrl && <img src={`./images/${imageUrl}`} alt={category} className="card-image-det" />}
                <div className="info">
                  <h3 className="card-category">{category}</h3>
                  <p className="card-description">Description : {description}</p>
                  <p>Created by Angel Canete</p>
                </div>
              </div>
              <div className="view-part">
                <button onClick={() => setShowModal(true)}>
                  <i className="fa fa-cog"></i> Edit
                </button>
                <p onClick={() => setShowParticipantModal(true)} style={{ cursor: "pointer" }}>
                  Participants:{" "}
                  <span>
                    <b>3</b>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="left-con-det">
            <div className="left-head-det">
              <h5>Active Expenses</h5>
              <div className="add-expense">
                <p>Sort By Date</p>
                <button onClick={() => setShowExpenseModal(true)} className="add-exp">
                  Create Expense
                </button>
              </div>
            </div>

            <NewExpenseModal
              isOpen={showExpenseModal}
              onClose={() => setShowExpenseModal(false)}
              onCreate={handleCreate}
            />

            <div className="expense-con">
              {[0, 1, 2, 3].map((_, index) => (
                <ExpenseCard
                  key={index}
                  isActive={activeCardIndex === index}
                  onToggle={() => setActiveCardIndex((prev) => (prev === index ? null : index))}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onArchive={onArchive}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <UpdateModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <ParticipantModal isOpen={showParticipantModal} onClose={() => setShowParticipantModal(false)} />
    </div>
  );
};

export default CardDetails;
