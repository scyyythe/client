import React from "react";
import { motion } from "framer-motion";
import "../../styles/Home.css";

function Guest() {
  return (
    <div className="guest-page">
      <motion.div
        className="card-guest"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-head">
          <h2>Welcome, Guest!</h2>
          <p>Enter your invitation code to view your bill.</p>
        </div>

        <div className="form-card">
          <form action="">
            <div className="input-container">
              <label htmlFor="invitation-code">Invitation Code</label>
              <br />
              <input type="text" id="invitation-code" placeholder="Enter your code" required />
            </div>

            <button type="submit" className="btn">
              View Bill
            </button>
          </form>
        </div>
        <p>
          Feel free to explore! You can only view one bill per day with a valid <br />
          invitation code.
        </p>
      </motion.div>
    </div>
  );
}

export default Guest;
