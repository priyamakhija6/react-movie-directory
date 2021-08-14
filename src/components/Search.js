import React,{useState} from 'react'

function Search(props) {
    const [searchMovie,setSearchMovie] = useState("")
    const handleFilter = e => {
        setSearchMovie(e.target.value);
        props.filterMovies(e.target.value);
    }

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input
        type='text'
        placeholder='Search for movie by name'
        className='w-75 py-2'
        data-testid='search'
        value={searchMovie}
        onChange={handleFilter}
      />
    </section>
  )
}

export default Search
