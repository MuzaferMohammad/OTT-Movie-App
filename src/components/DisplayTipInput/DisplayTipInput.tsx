import React from 'react';
import './DisplayTipInput.css';
export const DisplayTipInput = () => {
  return (
    <div className="display-tip-amount">
      <div className="diplay-row">
        <div className="diplay-label">
          <p className="header">Tip Amount</p>
          <p className="unit">/ person</p>
        </div>
        <p className="display-amt">$0.00</p>
      </div>
      <div className="diplay-row">
        <div className="diplay-label">
          <p className="header">Total</p>
          <p className="unit">/ person</p>
        </div>
        <p className="display-amt">$0.00</p>
      </div>
      <button className="btn">RESET</button>
    </div>
  );
};
