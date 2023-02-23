import React from 'react';
import './MovieCards.css';
import MovieCardIcon from './MovieCardIcon.svg';
// import BGcircle from './BGcircle.svg';
import dotIcon from './dotIcon.svg';

interface MovieCardInterface {
  poster?: string;
  year?: number;
  category?: string;
  title?: string;
  id?: number;
  rating?: string;
  link?: string;
  description?: string;
  isBookmarked?: boolean;
  isTrending?: boolean;
  className?: string;
  BookmarkIcon?: string;
}

export const MovieCards = ({
  poster,
  year,
  category,
  title,
  BookmarkIcon,
}: MovieCardInterface) => {
  function handleBookmarkIconClick() {
    alert('Saved to Bookmark');
  }

  return (
    <div className="movie-cards">
      <a href="">
        <img src={poster} alt="poster" className="poster" />
      </a>
      <button
        className="movieCard-container__bookmark__button"
        onClick={handleBookmarkIconClick}
      >
        <object className="movieCard-container__icon" data={BookmarkIcon} />
      </button>
      <div className="movie-data">
        <p>{year}</p>
        <object data={dotIcon} type="" className="dot-icon"></object>
        <object
          data={MovieCardIcon}
          type=""
          className="movie-card-icon"
        ></object>
        <p>{category}</p>
      </div>
      <p className="movie-title">{title}</p>
    </div>
  );
};
