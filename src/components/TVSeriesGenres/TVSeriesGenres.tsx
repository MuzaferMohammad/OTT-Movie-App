import React from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { SearchBar } from '../SearchBar/SearchBar';
import './TVSeriesGenres.css';

// interface ButtonProps {
//   backgroundColor?: string;
//   color?:string;
//   label: string;
//   onClick?: () => void;
// }

export const TVSeriesGenres = () => {
  return (
    <div className="homepage-container">
      <NavigationBar />
      <div className="search-bar-container-home">
        <SearchBar placeholder="Search for TV series" />
      </div>
      <div className="genre-container">
        <a href="" className="tv-genre-1">
          Action & Adventure
        </a>

        <a href="" className="genre-2">
          Animation
        </a>
        <a href="" className="tv-genre-1">
          Comedy
        </a>
        <a href="" className="genre-2">
          Crime
        </a>
        <a href="" className="tv-genre-1">
          Documentary
        </a>
        <a href="" className="genre-2">
          Drama
        </a>
        <a href="" className="tv-genre-1">
          Family
        </a>
        <a href="" className="genre-2">
          Kids
        </a>
        <a href="" className="tv-genre-1">
          Mystery
        </a>
        <a href="" className="genre-2">
          News
        </a>
        <a href="" className="tv-genre-1">
          Reality
        </a>
        <a href="" className="genre-2">
          Sci-Fi & Fantasy
        </a>
        <a href="" className="tv-genre-1"></a>
        <a href="" className="genre-2"></a>
        <a href="" className="tv-genre-1"></a>
        <a href="" className="genre-2"></a>
      </div>
    </div>
  );
};
