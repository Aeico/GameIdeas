import './App.css';
import React, { useState } from 'react';

function Search(props) {
    const [search, setSearch] = useState(props.SearchTerm)

    const searchChanged = ((event) => {
        setSearch(event.target.value)
    })

    const searchPressed= ((event) => {
        event.preventDefault();
        props.SetSearchTerm(search)
    })

    return(
    <form>
        <div className='Search'>
            <label htmlFor="name">Search for game: </label>
            <input value={search} onChange={searchChanged}></input>
            <button onClick={searchPressed}>Submit</button>
        </div>
    </form>
    );
}

export default Search;