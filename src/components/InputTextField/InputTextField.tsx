/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import './InputTextField.css';
// import dollor from '../../assets/dollor.svg'
interface InputTextFieldInterface {
  Bill: string;
  handleBillInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputTextField = ({
  Bill,
  handleBillInput,
}: InputTextFieldInterface) => {
  return (
    <div className="inputTextField">
      <label className="label" htmlFor="bill">
        Bill
      </label>
      <span className="error">error occured</span>
      <input
        type="number"
        id="input-text"
        onInput={handleBillInput}
        value={Bill}
      >
        {/* <div className='imageContainer'>
        <img src={dollor} />
       </div> */}
      </input>
    </div>
  );
};
