import React from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { SearchBar } from '../SearchBar/SearchBar';
import './MovieGenres.css';

// interface ButtonProps {
//   backgroundColor?: string;
//   color?:string;
//   label: string;
//   onClick?: () => void;
// }

export const MovieGenres = () => {
  return (
    <div className="homepage-container">
      <NavigationBar />
      <div className="search-bar-container-home">
        <SearchBar placeholder="Search for movies" />
      </div>
      <div className="genre-container">
        <a href="" className="genre-1">
          Action
        </a>
        <a href="" className="genre-2">
          Adventure
        </a>
        <a href="" className="genre-1">
          Animation
        </a>
        <a href="" className="genre-2">
          Comedy
        </a>
        <a href="" className="genre-1">
          Crime
        </a>
        <a href="" className="genre-2">
          Documentary
        </a>
        <a href="" className="genre-1">
          Drama
        </a>
        <a href="" className="genre-2">
          Family
        </a>
        <a href="" className="genre-1">
          Fantasy
        </a>
        <a href="" className="genre-2">
          History
        </a>
        <a href="" className="genre-1">
          Horror
        </a>
        <a href="" className="genre-2">
          Music
        </a>
        {/* <a href="" className="genre-1"></a>
        <a href="" className="genre-2"></a>
        <a href="" className="genre-1"></a>
        <a href="" className="genre-2"></a> */}
      </div>
    </div>
  );
};
