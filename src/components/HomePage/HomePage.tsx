import React from 'react';
import { data } from '../../MovieData';
import { MovieCards } from '../MovieCards/MovieCards';
import { MovieTray } from '../MovieTray/MovieTray';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { SearchBar } from '../SearchBar/SearchBar';
import './HomePage.css';

// interface ButtonProps {
//   backgroundColor?: string;
//   color?:string;
//   label: string;
//   onClick?: () => void;
// }

export const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* <div className="navigation-bar-home"></div> */}

      <NavigationBar />
      <div className="search-bar-container-home">
        <SearchBar placeholder="Search for movies or TV series" />
      </div>
      <div className="trending-container">
        <p className="trending-text">Trending</p>
        <div className="movie-box">
          <p>Movie</p>
        </div>
      </div>
      <div className="movie-tray-container">
        <MovieTray />
      </div>
      <div className="popularmovie-section">
        <div className="popular-movie-container">
          <p className="trending-text">Popular</p>
          <div className="movie-box">
            <p>Movie</p>
          </div>
        </div>
        <div className="popular-moviecard-container">
          <MovieCards
            poster={data[2].poster}
            year={data[2].year}
            title={data[2].title}
          />
          <MovieCards
            poster={data[4].poster}
            year={data[4].year}
            title={data[4].title}
          />
          <MovieCards
            poster={data[7].poster}
            year={data[7].year}
            title={data[7].title}
          />
        </div>
      </div>
    </div>
  );
};
