import React from 'react';
import { data } from '../../MovieData';
import './MovieTray.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MovieCard } from '../MovieCards/MovieCards.stories';

export const MovieTray = () => {
  return (
    <div className="cerousel-container">
      <Carousel showThumbs={false}>
        {data.map((movie, index) => (
          <div key={index}>
            <MovieCard
              poster={movie.poster}
              year={movie.year}
              category={movie.category}
              title={movie.title}
              rating={movie.rating}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
