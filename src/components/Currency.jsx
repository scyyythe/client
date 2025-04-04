import React from "react";
import "../styles/Components.css";
const currencies = [
  "USD - United States Dollar",
  "EUR - Euro",
  "GBP - British Pound",
  "JPY - Japanese Yen",
  "AUD - Australian Dollar",
  "CAD - Canadian Dollar",
  "CHF - Swiss Franc",
  "CNY - Chinese Yuan",
  "INR - Indian Rupee",
  "SGD - Singapore Dollar",
  "PHP - Philippine Peso",
  "NZD - New Zealand Dollar",
];

function CurrencySelector({ selectedCurrency, onChange }) {
  return (
    <div className="input-field">
      <select id="currency" className="input" value={selectedCurrency} onChange={onChange}>
        {currencies.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencySelector;
