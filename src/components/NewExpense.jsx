import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ErrorPopup from "./ErrorPopup";

const NewExpenseModal = ({ isOpen, onClose, onCreate, host = "Angel Canete", participants = [] }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState(host);
  const [splitOption, setSplitOption] = useState("Equally divided");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTitle("");
      setAmount("");
      setPaidBy(host);
      setSplitOption("Equally divided");
      setErrorMessage("");
    }
  }, [isOpen, host]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setErrorMessage("Expense Name is required.");
      return;
    }

    if (!amount.trim()) {
      setErrorMessage("Amount is required.");
      return;
    }

    const newExpense = {
      title,
      amount: parseFloat(amount),
      paidBy,
      splitOption,
    };
    onCreate(newExpense);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="new-exp-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="new-exp-modal"
            initial={{ y: -50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -30, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h5 className="new-exp-title">Create New Expense</h5>
            <form onSubmit={handleSubmit} className="new-exp-form">
              <label className="new-exp-label">
                Expense Name:
                <input type="text" value={title} className="new-exp-input" onChange={(e) => setTitle(e.target.value)} />
              </label>
              <label className="new-exp-label">
                Amount:
                <input
                  type="number"
                  value={amount}
                  className="new-exp-input"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </label>
              <label className="new-exp-label">
                Paid By:
                <select value={paidBy} className="new-exp-input" onChange={(e) => setPaidBy(e.target.value)}>
                  {[host, ...participants.filter((p) => p !== host)].map((person, index) => (
                    <option key={index} value={person}>
                      {person}
                    </option>
                  ))}
                </select>
              </label>
              <label className="new-exp-label">
                With:
                <select value={splitOption} className="new-exp-input" onChange={(e) => setSplitOption(e.target.value)}>
                  <option value="Equally divided">Equally divided</option>
                  <option value="Custom">Custom</option>
                </select>
              </label>
              <div className="new-exp-actions">
                <button type="submit" className="new-exp-btn create">
                  Create
                </button>
                <button type="button" onClick={onClose} className="new-exp-btn cancel">
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
      <ErrorPopup message={errorMessage} onClose={() => setErrorMessage("")} />
    </AnimatePresence>
  );
};

export default NewExpenseModal;
