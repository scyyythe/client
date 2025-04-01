import React from "react";
import { motion } from "framer-motion";
import "../../styles/Home.css";
import { ArrowLeft } from "lucide-react";

function ViewGuestBill() {
  return (
    <div className="guest-page2">
      <div className="back-arrow" onClick={() => (window.location.href = "/")}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <motion.div
        className="card-guest-bill"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-head">
          <h2>Food Dinner</h2>
          <p>Added on March 27,2025</p>
        </div>

        <div className="input-guest-bill">
          <div className="center-card-guest">
            <div className="input-container-guest">
              <label htmlFor="invitation-code">Total Bill</label>
              <br />
              <input type="text" id="invitation-code" value={500} />
            </div>
            <div className="input-container-guest">
              <label htmlFor="invitation-code">Host Name</label>
              <br />
              <input type="text" id="invitation-code" value={"Angel Canete"} />
            </div>
          </div>

          <div className="center-card-guest2">
            <div className="input-container-guest">
              <label htmlFor="share">Guest Share</label>
              <br />
              <input type="text" value={150} />
            </div>

            <button type="submit" className="btn">
              Mark As Paid
            </button>
            <a href="/guest">Enter a new code</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ViewGuestBill;
