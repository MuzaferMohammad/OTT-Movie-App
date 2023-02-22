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
        <object data={logo}></object>
      </div>
      <a href="" className="nav-bar-dashboard">
        <object data={Dashboard} className="icon1"></object>
      </a>{' '}
      <a href="" className="nav-bar-dashboard">
        <object data={Movie}></object>
      </a>{' '}
      <a href="" className="nav-bar-dashboard">
        <object data={TVSeries}></object>
      </a>{' '}
      <a href="" className="nav-bar-dashboard">
        <object data={Bookmark}></object>
      </a>
      <a href="" className="nav-bar-profile">
        <object data={Profile}></object>
      </a>
    </div>
  );
};
