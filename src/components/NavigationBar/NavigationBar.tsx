import React from 'react';
import logo from './assets/logo.svg';
import Dashboard from './assets/Dashboard.svg';
import Movie from './assets/Movie.svg';
import TVSeries from './assets/TVSeries.svg';
import Bookmark from './assets/Bookmark.svg';
import Profile from './assets/Profile.svg';

import './NavigationBar.css';

export const NavigationBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-logo">
        <img src={logo} />
      </div>
      <a href="home" className="nav-bar-dashboard">
        <img src={Dashboard} className="icon1" />
      </a>{' '}
      <a href="movie-genres" className="nav-bar-dashboard">
        <img src={Movie} />
      </a>{' '}
      <a href="tv-series-genres" className="nav-bar-dashboard">
        <img src={TVSeries} />
      </a>{' '}
      <a href="bookmarks" className="nav-bar-dashboard">
        <img src={Bookmark} />
      </a>
      <a href="/" className="nav-bar-profile">
        <img src={Profile} />
      </a>
    </div>
  );
};
