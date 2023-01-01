/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import './SelectTipAmount.css';
interface TipSelectionInterface {
  Tip: string;
  handleSelectedTip: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SelectTipAmount = ({ Tip, handleSelectedTip }: TipSelectionInterface) => {
  return (
    <div>
      <div className="tip-selection">
        <p className="label">Select Tip%</p>
        <div className="tip-amt">
          {/* <input type = "radio"  name= "tip" value= ".05" />  */}
          <button className="tip-btn">5%</button>

          {/* <input type = "radio"  name= "tip" value= ".10" /> */}
          <button className="tip-btn">10%</button>

          {/* <input type = "radio"  name= "tip" value= ".15" /> */}
          <button className="tip-btn ">15%</button>
        </div>
        <div className="tip-amt">
          {/* <input type = "radio"  name= "tip" value= ".25" /> */}
          <button className="tip-btn">25%</button>

          {/* <input type = "radio"  name= "tip" value= ".50" /> */}
          <button className="tip-btn">50%</button>
          <input type="number" className="tip-custom" placeholder="CUSTOM" />
        </div>
      </div>
    </div>
  );
};
export default SelectTipAmount;
