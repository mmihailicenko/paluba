import React, {useEffect, useState} from 'react';
import Movie from './Movie';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Better%20Call%20Saul');

  useEffect(() => {
    getMovies();
  }, [query]);

  const getMovies = async () => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/http://seasonvar.ru/autocomplete.php?query=${search}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
        setMovies(data.data);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="movies">
      {movies.map(movie =>(
        <Movie
        title={movie}
        link={movie}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
