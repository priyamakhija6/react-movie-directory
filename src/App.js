import React,{useState} from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {

  const [moviesList, setMoviesList] = useState([]);
  const [showMoviesList, setShowMoviesList] = useState([]);

  const addMovieToFinalList = movie => {
    setMoviesList(moviesList => [...moviesList, movie].sort((a,b)=>b.duration-a.duration));
    setShowMoviesList(showMoviesList => [...showMoviesList, movie].sort((a,b)=>b.duration-a.duration));
  }

  const filterMovies = movieName => {

    if (movieName.length < 2) {
      return;
    }
    if (movieName.length === 0) {
      setShowMoviesList(showMoviesList => moviesList);
    }

    setShowMoviesList(
        showMoviesList => moviesList.filter((movie) => movie.name.toLowerCase().startsWith(movieName.toLowerCase())
    ))
  }

  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform addMovieToFinalList={addMovieToFinalList}/>
        </div>
        <div className='layout-column w-30'>
          <Search filterMovies={filterMovies}/>

          <Movieslist moviesList={showMoviesList}/>
          {moviesList.length !== 0 && showMoviesList.length === 0 ?
              <div data-testid='noResult'>
                <h3 className='text-center'>No Results Found</h3>
              </div> : <span/>
          }

        </div>
      </div>
    </div>
  )
}

export default App;
