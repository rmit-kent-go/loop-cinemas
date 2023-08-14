import React from 'react';
import './pagesCSS/Home.css';
import MovieCard from './pageResources/MovieCard';
import AboutUs from './pageResources/AboutUs'
import { getMovies } from '../data/repository';


function Home() {
  const movies = getMovies();
  return (
    <>
    <h1 className='section-title'>Coming Soon</h1>
    <section className="movie-section">
      <div className='movie-row'>
        {
          movies.map((movie) =>
          <div className='movie-column'>
          <MovieCard
          imageUrl={movie.imageURL[0]}
          title={movie.name}
          text="Click to view session time"
          type="movie"/>
        </div>
          )
        }
      </div>
    </section>

    <AboutUs />
    
    </>
  );
}

export default Home;