import './App.css';
import React from 'react';

const axios = require('axios').default;

export async function GetGameImage(id) {
    const axios = require('axios').default;

    var arr = ""

    var imgId = id

    await axios.get('http://127.0.0.1:5000/img/'+imgId)
    .then(function (response) {
      console.log(response)
      arr = response.data['URL'];
    }).catch(function (error){
      console.log(error)
    })
    return (arr)
}

export default GetGameImage;