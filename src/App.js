import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const exampleQuery = "Better%20Call%20Saul";
  const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
  const url = corsAnywhere + `http://seasonvar.ru/autocomplete.php?query=${exampleQuery}`;

  useEffect(() => {
    getMovies(url);
  }, []);

  const getMovies = async (url) => {
    const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Origin': 'www.film.ru'
          }
        });
        const data = await response.json();
        console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
