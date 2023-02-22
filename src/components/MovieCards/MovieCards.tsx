import React from 'react';
import './MovieCards.css';
import MovieCardIcon from './MovieCardIcon.svg';
import BookmarkIcon from './BookmarkIcon.svg';
// import BGcircle from './BGcircle.svg';
// import dotIcon from './dotIcon.svg';

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
}

export const MovieCards = ({
  poster,
  year,
  category,
  title,
}: MovieCardInterface) => {
  return (
    <div className="movie-cards">
      <a href="">
        <img src={poster} alt="poster" className="poster" />
      </a>
      <button className="movieCard-container__button">
        <object className="movieCard-container__icon" data={BookmarkIcon} />
      </button>
      <div className="movie-data">
        <p>{year}</p>
        {/* <img src={dotIcon} alt="" className='dot-icon' /> */}
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
