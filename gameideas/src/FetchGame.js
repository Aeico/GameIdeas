import './App.css';
import React from 'react';

const axios = require('axios').default;

export async function FetchGame() {
    const axios = require('axios').default;

    var name = 'Halo'

    axios.get('http://127.0.0.1:5000/game/'+name)
    .then(function (response) {
      console.log(response)
    }).catch(function (error){
      console.log(error)
    })
}

export default FetchGame;