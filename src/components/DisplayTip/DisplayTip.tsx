/* eslint-disable react/react-in-jsx-scope */

import './DisplayTip.css';
interface TipInputDisplayInterface {
  tipAmount: number;
  totalTip: number;
  handleResetBtn?: () => void;
}

// const DisplayTip = ({ calculatedTip, total, people }) => {}
const DisplayTip = ({
  tipAmount,
  totalTip,
  handleResetBtn,
}: TipInputDisplayInterface) => {
  // const returnCurrencyAmt = (amt:number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amt);

  return (
    <div className="display-tip-input">
      <div className="display-container">
        <div className="display-row">
          <div className="display-label">
            <p className="header">Tip Amount</p>
            <p className="unit">/ person</p>
          </div>
          <p className="display-amt">
            {isNaN(tipAmount) ? '$0.00' : `$${tipAmount.toFixed(2)}`}
          </p>
        </div>
        <div className="display-row">
          <div className="display-label">
            <p className="header">Total</p>
            <p className="unit">/ person</p>
          </div>
          <p className="display-amt">
            {isNaN(totalTip) ? '$0.00' : `$${totalTip.toFixed(2)}`}
          </p>
        </div>
      </div>
      <div className="reset-btn">
        <button
          className="btn"
          onClick={handleResetBtn}
          disabled={isNaN(tipAmount)}
        >
          {' '}
          RESET{' '}
        </button>
      </div>
    </div>
  );
};

export default DisplayTip;
