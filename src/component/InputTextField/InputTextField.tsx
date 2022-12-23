import React from 'react';
import './InputTextField.css';

export const InputTextField = () => {
  return (
    <div className="inputTextField">
      <label htmlFor="input-text">Enter Value</label>
      <span>error occured</span>
      <input type="text" name="username" id="input-text" />
    </div>
  );
};
