import React from 'react'

function Movieslist(props) {
  //props.moviesList.sort((a,b)=>b.duration-a.duration);
  return (
    <section>
        { props.moviesList.length !== 0 ?
            <ul
                className='styled w-100 pl-0'
                data-testid='moviesList'
            >
                {props.moviesList.map((movie, key) => {
                        return (
                            <li
                                className='flex slide-up-fade-in justify-content-between'
                                style={{borderBottom: '2px solid var(--primary-color)'}}
                                key={'l' + key}>
                                <div className='layout-column w-40' key={'d1' + key}>
                                    {/* use this header for movie name */}
                                    <h3 className='my-3' key={'h' + key}>{movie.name}</h3>
                                    {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
                                    <p className='my-0' key={'p1' + key}>Ratings: {movie.rating}/100</p>
                                </div>
                                <div className='layout-row my-auto mr-20' key={'d2' + key}>
                                    {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
                                    <p className='justify-content-end' key={'p2' + key}>{movie.duration} Hrs</p>
                                </div>
                            </li>
                        )
                    }
                )
                }
            </ul> : <div/>
        }
    </section>
  )
}

export default Movieslist;
