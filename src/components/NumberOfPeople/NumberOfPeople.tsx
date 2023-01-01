/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import './NumberOfPeople.css';
interface InputPeopleInterface {
  People: string;
  handlePeople: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const NumberOfPeople = ({
  handlePeople,
  People,
}: InputPeopleInterface) => {
  return (
    <div className="inputNumOfPeople">
      <label>Number of People</label>

      <span className="error">can not be zero</span>
      <input type="text" id="people" onInput={handlePeople} value={People} />
    </div>
  );
};
