import React from "react";

const CardDetails = ({ data, onBack }) => {
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
            <h3 className="card-category">{category}</h3>
          </div>
          <div className="right-side">
            <p>Transactions</p>
          </div>
        </div>
        <div className="container-details">
          <div className="right-con-det">
            <div className="card-det">
              <p className="card-date">Created on {date}</p>
              {imageUrl && <img src={`./images/${imageUrl}`} alt={category} className="card-image-det" />}

              <p className="card-description">
                <b>Bill Description</b>
                <br />
                {description}
              </p>
            </div>

            <div className="involved-person">
              <div className="head-involved">
                <small>
                  <b>Participants</b>
                </small>
                <i className="fa fa-cog"></i>
              </div>

              <div className="participants-grid">
                <div className="display-involved">
                  <p>Angel Canete</p>
                  <button>
                    <i className="fa fa-times"></i>
                  </button>
                </div>
                <div className="display-involved">
                  <p>Jerald Aliviano</p>
                  <button>
                    <i className="fa fa-times"></i>
                  </button>
                </div>{" "}
                <div className="display-involved">
                  <p>Jamaica Anuba</p>
                  <button>
                    <i className="fa fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="left-con-det">
            <div className="left-head-det">
              <h5>Active Expenses</h5>

              <div className="add-expense">
                <p>Sort By Date</p>
                <button className="add-exp">Create Expense</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
