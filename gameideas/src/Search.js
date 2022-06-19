import './App.css';
import React, { useState } from 'react';

function Search(props) {
    //props.SearchTerm

    const searchChanged = ((event) => {  
        props.SearchTerm = event.target.value
    })

    return(
    <form>
        <div className='Search'>
            <label for="name">Search for game: </label>
            <input value={props.SearchTerm} onChange={searchChanged}></input>
        </div>
    </form>
    );
}

export default Search;