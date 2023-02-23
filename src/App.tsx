import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { BookmarksPage } from './components/BookmarksPage/BookmarksPage';
import { HomePage } from './components/HomePage/HomePage';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { MovieGenres } from './components/MovieGenres/MovieGenres';
import { NoResults } from './components/NoResults/NoResults';
import { RegisterPage } from './components/Register/Register';
import { SignInPage } from './components/SignInPage/SignInPage';
import { TVSeriesGenres } from './components/TVSeriesGenres/TVSeriesGenres';

function App() {
  return (
    <div className="App-container">
      <section className="App-container__body">
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="movie-genres" element={<MovieGenres />} />
          <Route path="tv-series-genres" element={<TVSeriesGenres />} />
          <Route path="bookmarks" element={<BookmarksPage />} />
          {/* <Route path="search-result" element={<SearchResult />} /> */}
          <Route path="no-results" element={<NoResults />} />
          <Route path="movie-details" element={<MovieDetails />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
