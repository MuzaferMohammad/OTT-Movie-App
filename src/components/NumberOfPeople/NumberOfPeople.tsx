/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import './NumberOfPeople.css';
export const NumberOfPeople = () => {
  return (
    <div className="inputNumOfPeople">
      <label htmlFor="input-text">Number of People</label>

      <span className="error"> can not be zero</span>
      <div className="inputContainer">
        <input type="text" name="username" id="input-text" />
        <div className="imageContainer"></div>
      </div>
    </div>
  );
};
