import React from 'react';
import './MovieDetails.css';
import { data } from '../../MovieData';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { SearchBar } from '../SearchBar/SearchBar';

const MovieDetails = () => {
  return (
    <div className="homepage-container">
      <NavigationBar />
      <div className="search-bar-container-home">
        <SearchBar placeholder="Search for movies" />
      </div>
      <div className="movie-detail-container">
        <div className="movie-poster-container">
          <img src={data[5].poster} className="moviedetail-poster" />
        </div>
        <div className="description-container">
          <p className="description-container-title">{data[5].title}</p>
          <p className="synopsis">Synopsis</p>
          <p className="movie-description">{data[5].description}</p>
          <div className="length-ratings-container">
            <div className="inner-length-ratings-container">
              <p className="heading">Length</p>
              <p className="heading-data">142 min</p>
            </div>
            <div className="inner-length-ratings-container">
              <p className="heading">Language</p>
              <p className="heading-data">English</p>
            </div>{' '}
            <div className="inner-length-ratings-container">
              <p className="heading">Year</p>
              <p className="heading-data">{data[5].year}</p>
            </div>{' '}
            <div className="inner-length-ratings-container">
              <p className="heading">Status</p>
              <p className="heading-data">NA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
