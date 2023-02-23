import React from 'react';
import { data } from '../../MovieData';
import { MovieCards } from '../MovieCards/MovieCards';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { SearchBar } from '../SearchBar/SearchBar';
import './BookmarksPage.css';

// interface ButtonProps {
//   backgroundColor?: string;
//   color?:string;
//   label: string;
//   onClick?: () => void;
// }

export const BookmarksPage = () => {
  return (
    <div className="homepage-container">
      {/* <div className="navigation-bar-home"></div> */}
      <NavigationBar />
      <div className="search-bar-container-home">
        <SearchBar placeholder="Search for movies or TV series" />
      </div>
      <div className="bookmarked-movie-container">
        <p className="trending-text">Bookmarked Movies</p>
      </div>
      <div className="bookmarked-moviecard-container">
        <MovieCards
          poster={data[8].poster}
          year={data[8].year}
          title={data[8].title}
          category={data[8].category}
        />
        <MovieCards
          poster={data[5].poster}
          year={data[5].year}
          title={data[5].title}
          category={data[5].category}
        />
        <MovieCards
          poster={data[7].poster}
          year={data[7].year}
          title={data[7].title}
          category={data[2].category}
        />
      </div>
    </div>
  );
};
