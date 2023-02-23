import React from 'react';
import arrowBack from './arrowBack.svg';
import './NoResults.css';

interface errorProps {
  searchInput?: string;
}

export const NoResults = ({ searchInput }: errorProps) => {
  function handleBackButton() {
    alert('Going Back');
  }
  return (
    <div className="no-results-container">
      <div className="inner-no-results-container">
        <button className="back-button" onClick={handleBackButton}>
          <img src={arrowBack} alt="arrow-back" />
        </button>
        <p>No Results found for the search Top Gun</p>
      </div>
    </div>
  );
};
