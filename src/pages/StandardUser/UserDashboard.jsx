import React, { useState } from "react";
import "../../styles/UserDashboard.css";
import UserHeader from "../../components/UserHeader";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { Link, useNavigate } from "react-router-dom";

function UserDashboard() {
  const [showMenu, setShowMenu] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const navigate = useNavigate();

  const handleAddNewList = () => {
    navigate("/add-list");
  };

  const handleOptionClick = (option) => {
    setActionType(option);
    setShowModal(true);
    setShowMenu({});
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleConfirmAction = () => {
    alert(`${actionType} confirmed!`);
    setShowModal(false);
  };

  const toggleMenu = (id) => {
    setShowMenu((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <UserHeader />
      <div className="user-dashboard-page">
        <h3>List of Bills</h3>
        <div className="body-up">
          <div className="up-btn">
            <Button text="Add New List" onClick={handleAddNewList} className="add-new-list-btn" disabled={false} />
            <p>
              <i className="fa fa-sort-amount-down"></i> Sort By Date
            </p>
          </div>

          <div className="up-body">
            <div className="list-card-con">
              <Link to="/list-view" className="list-card-link">
                <div className="list-card">
                  <div className="list-img">
                    <img src="/images/food.jpg" alt="Food Expense" className="image-list" />
                  </div>

                  <div className="card-content">
                    <div className="card-title">
                      <h3>Food Expense</h3>
                      <p>
                        My Balance: <span>PHP 350</span>
                      </p>
                    </div>
                    <div className="card-date">April 1</div>
                  </div>
                </div>
              </Link>

              <div className="options">
                <span
                  className="three-dots"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu("food");
                  }}
                >
                  &#x22EE;
                </span>

                {showMenu["food"] && (
                  <div className="options-menu">
                    <ul>
                      <li onClick={() => handleOptionClick("Edit")}>Edit</li>
                      <li onClick={() => handleOptionClick("Delete")}>Delete</li>
                      <li onClick={() => handleOptionClick("Archive")}>Archive</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="list-card-con">
              <Link to="/list-view" className="list-card-link">
                <div className="list-card">
                  <div className="list-img">
                    <img src="/images/travel.jpg" alt="Travel Expense" className="image-list" />
                  </div>

                  <div className="card-content">
                    <div className="card-title">
                      <h3>Travel Expense</h3>
                      <p>
                        My Balance: <span>PHP 350</span>
                      </p>
                    </div>
                    <div className="card-date">April 1</div>
                  </div>
                </div>
              </Link>

              <div className="options">
                <span
                  className="three-dots"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu("travel");
                  }}
                >
                  &#x22EE;
                </span>

                {showMenu["travel"] && (
                  <div className="options-menu">
                    <ul>
                      <li onClick={() => handleOptionClick("Edit")}>Edit</li>
                      <li onClick={() => handleOptionClick("Delete")}>Delete</li>
                      <li onClick={() => handleOptionClick("Archive")}>Archive</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal showModal={showModal} actionType={actionType} onConfirm={handleConfirmAction} onClose={handleModalClose} />
    </>
  );
}

export default UserDashboard;
