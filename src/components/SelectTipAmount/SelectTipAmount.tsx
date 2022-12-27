import React from 'react';
import './InputTextField.css';
export const SelectTipAmount = () => {
  return (
    <div className="tip-selection">
      <p className="label">Selected Tip %</p>
      <div className="tip-amount">
        <input type="radio" name="tip" value=".5" />
        <div className="tip-btn">5%</div>
      </div>
      <div className="tip-amount">
        <input type="radio" name="tip" value=".10" />
        <div className="tip-btn">10%</div>
      </div>
      <div className="tip-amount">
        <input type="radio" name="tip" value=".15" />
        <div className="tip-btn">15%</div>
      </div>
      <div className="tip-amount">
        <input type="radio" name="tip" value=".25" />
        <div className="tip-btn">25%</div>
      </div>
      <div className="tip-amount">
        <input type="radio" name="tip" value=".5" />
        <div className="tip-btn">50%</div>
      </div>
    </div>
  );
};
