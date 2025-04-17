import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import { FaRocket, FaPaperPlane, FaSmile } from "react-icons/fa";

function Plans() {
  return (
    <div className="pricing-section">
      <h2 className="pricing-title">Pricing Plan</h2>
      <p className="pricing-subtitle">No Hidden Charges! Choose your Plan.</p>

      <div className="billing-toggle">
        <span>Monthly</span>
        <div className="toggle-switch">
          <div className="toggle-circle"></div>
        </div>
        <span className="active">
          Annually <span className="save"> (Save 30%)</span>
        </span>
      </div>

      <div className="plans-grid">
        <motion.div
          className="plan-box"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FaSmile className="plan-icon" />
          <h3 className="plan-name">FREE</h3>
          <p className="plan-price">
            $0 <span>/ annually</span>
          </p>
          <ul className="plan-features">
            <li>Limited access</li>
            <li>1 invited bill view per day</li>
            <li>No login required</li>
            <li>Guest invitation required</li>
          </ul>
          <button className="start-button">Start Now</button>
        </motion.div>

        <motion.div
          className="plan-box active-plan"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <FaPaperPlane className="plan-icon" />
          <h3 className="plan-name">STANDARD</h3>
          <p className="plan-price">
            Free <span className="note">(For registered users)</span>
          </p>
          <ul className="plan-features">
            <li>Create up to 5 bills per month</li>
            <li>Max 3 participants per bill</li>
            <li>Can invite guest users</li>
            <li>Default plan for registered users</li>
          </ul>
          <button className="start-button active">Register Now</button>
        </motion.div>

        <motion.div
          className="plan-box"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <FaRocket className="plan-icon" />
          <h3 className="plan-name">PREMIUM</h3>
          <p className="plan-price">
            $22.50 <span>/ annually</span>
          </p>
          <ul className="plan-features">
            <li>Unlimited bills</li>
            <li>Unlimited participants</li>
            <li>All Standard features included</li>
            <li>Priority support</li>
          </ul>
          <button className="start-button">Start Now</button>
        </motion.div>
      </div>
    </div>
  );
}

export default Plans;
