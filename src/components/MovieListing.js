import React from 'react'
import { getAllMovies,getAllShows } from '../features/movies/movieSlice'
import {useSelector} from 'react-redux'
import MovieDetail from './MovieDetail'
import './MovieListing.css'

const MovieListing = () => {
    const movies=useSelector(getAllMovies)
    const shows=useSelector(getAllShows)
  return (
    <div className='movie-wrapper'>
         <div className='movie-list'>
          <h2>Movies</h2>
          <div className='movie-container'>
            {movies && movies.length && movies.map(movie=><MovieDetail key={movie.id} data={movie} />)}
          </div>
         </div>
         <div className='show-list'>
          <h2>Shows</h2>
          <div className='movie-container'>
            {shows && shows.length && shows.map(show=><MovieDetail key={show.id} data={show} />)}
          </div>
         </div>

        
    </div>
  )
}

export default MovieListing