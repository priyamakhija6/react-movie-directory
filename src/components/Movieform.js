import React, {useState} from 'react'

const convertDurationToHours = duration => {
  if (duration.endsWith('m')) {
    const durationMinutes = parseFloat(duration.substring(0, duration.length-1));
    return (durationMinutes/60).toPrecision(2);
  }
  return parseFloat(duration.substring(0, duration.length-1));
}

const regExp = /[0-9]+['m'|'h']/;

const isValidDuration = time => {
  return regExp.test(time);
}


function Movieform(props) {

  const [movie, setMovie] = useState("");
  const [duration, setDuration] = useState("");
  const [rating, setRating] = useState("");
  const [validDuration,setValidDuration] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const addMovieToFinalList = props.addMovieToFinalList;

  const addDuration = e => {
    setValidDuration(true);
    setDuration(e.target.value);

  }
  const addMovieName = e => {
    setValidDuration(true);
    setMovie(e.target.value);
  }
  const addRating = e => {
    setValidDuration(true);
    setRating(e.target.value);
  }

  const addMovie = e => {
    e.preventDefault();
    if ((movie ==='' || duration ==='' || rating ==='')) {
      return;
    }
    if(!(isValidDuration(duration))) {
      setValidDuration(false);
      return;
    }
    addMovieToFinalList({
        name: movie,
        duration: convertDurationToHours(duration),
        rating: rating
      });
      setMovieList(movieList);
      console.log(movieList);
    }

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={ addMovie }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input
              type='text'
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              value={movie}
              onChange={addMovieName}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input
              type='number'
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              value={rating}
              onChange={addRating}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input
              type='text'
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              value={duration}
              onChange={addDuration}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {validDuration===false ? <div
              className='alert error mb-30'
              data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>: <div/>
          }
          <div className='layout-row justify-content-end'>
            <button
              type='submit'
              className='mx-0'
              data-testid='addButton'
            >
              Add Movie
            </button>
          </div>
          </form>
      </div>
    </section>
  )
}

export default Movieform
