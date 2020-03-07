import React from 'react';
import style from './movie.module.css';

function Movie({ link}) {
    return(
        <div className={style.movie}>
            <h1>TITLE</h1>
            <p>{link}</p>
        </div>
    );
}

export default Movie;