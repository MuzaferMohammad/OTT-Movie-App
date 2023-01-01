import React from 'react';
import './InputTextField.css';
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
      <label>Bill</label>
      <span className="error">error occured</span>
      <input
        type="number"
        id="input-text"
        onInput={handleBillInput}
        value={Bill}
      />
    </div>
  );
};
