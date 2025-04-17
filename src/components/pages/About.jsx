import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../../styles/Home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h2>How it works?</h2>
      <div className="steps">
        <Step icon="fa-user" title="Register" text="Sign up and create your account easily." color="#D8BFD8" />
        <Connector />
        <Step
          icon="fa-credit-card"
          title="Split Bill"
          text="Enter the total amount and split with your friends."
          color="#FFB6C1"
        />
        <Connector />
        <Step icon="fa-check-circle" title="Settle Up" text="Everyone pays their share securely." color="#ADD8E6" />
      </div>
    </div>
  );
};

const Step = ({ icon, title, text, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="step"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="icon-box"
        style={{ backgroundColor: color }}
        initial={{ scale: 0.5, rotate: -10 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <i className={`fas ${icon}`}></i>
      </motion.div>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
};

const Connector = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="connector"
      initial={{ width: 0, opacity: 0 }}
      animate={isInView ? { width: "5rem", opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
};

export default HowItWorks;
