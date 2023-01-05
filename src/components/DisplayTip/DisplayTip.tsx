/* eslint-disable react/react-in-jsx-scope */

import './DisplayTip.css';
// interface TipInputDisplayInterface {
//   tipAmount: number;
//   totalTip: number;
// }
// const DisplayTip = ({ calculatedTip, total, people }) => {}
const DisplayTip = () => {
  // const returnCurrencyAmt = (amt:number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amt);

  return (
    <div className="display-tip-input">
      <div className="display-container">
        <div className="display-row">
          <div className="display-label">
            <p className="header">Tip Amount</p>
            <p className="unit">/ person</p>
          </div>
          <p className="display-amt">$3.14</p>
          {/* {returnCurrencyAmt(`${calculatedTip ? calculatedTip/people : "0"}`)} */}
        </div>
        <div className="display-row">
          <div className="display-label">
            <p className="header">Total</p>
            <p className="unit">/ person</p>
          </div>
          <p className="display-amt">$11.2</p>
          {/* {returnCurrencyAmt(`${total ? total/people : "0"}`)} */}
        </div>
      </div>
      <div className="reset-btn">
        <button className="btn" onClick={() => window.location.reload()}>
          {' '}
          RESET{' '}
        </button>
      </div>
    </div>
  );
};

export default DisplayTip;
