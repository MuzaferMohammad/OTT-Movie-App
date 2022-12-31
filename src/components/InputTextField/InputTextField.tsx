/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import './InputTextField.css';
export const InputTextField = () => {
  return (
    <div className="inputTextField">
      <label htmlFor="input-text">Bill</label>
      <span className="error">error occured</span>
      <div className="inputContainer">
        <input type="text" name="username" id="input-text" />
        <div className="imageContainer"></div>
      </div>
    </div>
  );
};
