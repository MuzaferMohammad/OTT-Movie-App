/* eslint-disable react/react-in-jsx-scope */

import './DisplayTipInput.css';

const DisplayTipInput = () => {
  return (
    <div className="display-tip-input">
      <div className="display-container">
        <div className="display-row">
          <div className="display-label">
            <p className="header">Tip Amount</p>
            <p className="unit">/ person</p>
          </div>
          <p className="display-amt">$0.00</p>
        </div>
        <div className="display-row">
          <div className="display-label">
            <p className="header">Total</p>
            <p className="unit">/ person</p>
          </div>
          <p className="display-amt">$0.00</p>
        </div>
      </div>
      <div className="reset-btn">
        <button className="btn"> RESET </button>
      </div>
    </div>
  );
};

export default DisplayTipInput;
