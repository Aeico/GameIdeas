import './App.css';
import GameHeader from './GameHeader';
import { Suspense, useEffect, useState } from 'react';
import Search from './Search';
import SearchGames from './SearchGames';
import GameWindow from './GameWindow';

function App() {
  const [searchTerm, setSearchTerm] = useState('Diablo');

  const [names, setNames] = useState([])

  const [screenUrls, setScreenUrls] = useState([])

  const [coverUrls, setCoverUrls] = useState([])
  

  const gameReply = async () => {
    var resp = await SearchGames(searchTerm);
    console.log(resp)
    setNames(resp['game_name'])
    setScreenUrls(resp['url'])
    setCoverUrls(resp['cover'])
  };

  useEffect (() => { 
    gameReply()
  },[searchTerm]);

  return (
    <div className="App">
      <header className="App-header">
        <GameHeader/>
        <Search SearchTerm={searchTerm} SetSearchTerm={setSearchTerm}></Search>
        <div className='GameContainer'>
          <GameWindow name={names[0]} url={screenUrls[0]} cover={coverUrls[0]} ></GameWindow>
          <GameWindow name={names[1]} url={screenUrls[1]} cover={coverUrls[1]}></GameWindow>
          <GameWindow name={names[2]} url={screenUrls[2]} cover={coverUrls[2]}></GameWindow>
          <GameWindow name={names[3]} url={screenUrls[3]} cover={coverUrls[3]}></GameWindow>
        </div>
      </header>
    </div>
  );
}

export default App;
