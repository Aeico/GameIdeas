import './App.css';
import React from 'react';

const axios = require('axios').default;

export async function SearchGames() {
    const axios = require('axios').default;


    var arr = []

    var name = 'Halo'

    await axios.get('http://127.0.0.1:5000/game/'+name)
    .then(function (response) {
      console.log(response)
      arr = response.data
    }).catch(function (error){
      console.log(error)
    })
    return (arr)
}

export default SearchGames;