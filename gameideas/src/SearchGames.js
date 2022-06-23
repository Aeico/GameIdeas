import './App.css';

export async function SearchGames(name) {
    const axios = require('axios').default;
    
    var arr = []

    await axios.get('http://127.0.0.1:5000/game/'+name)
    .then(function (response) {
      arr = response.data
    }).catch(function (error){
      console.log(error)
    })
    return (arr)
}

export default SearchGames;