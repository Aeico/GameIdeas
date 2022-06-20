import './App.css';
import GameHeader from './GameHeader';
import GameDetails from './GameDetails';
import { Suspense, useEffect, useState } from 'react';
import Search from './Search';
import SearchGames from './SearchGames';
import GameWindow from './GameWindow';

function App() {
  const [searchTerm, setSearchTerm] = useState('Diablo');

  const [names, setNames] = useState(['a name','another'])

  const [urls, setUrls] = useState(['sc92is'])

  const gameReply = async () => {
    var resp = await SearchGames(searchTerm);
    setNames(resp['game_name'])
    setUrls(resp['url'])
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
          <GameWindow name={names[0]} url={urls[0]} ></GameWindow>
          <GameWindow name={names[1]} url={urls[1]} ></GameWindow>
          <GameWindow name={names[2]} url={urls[2]} ></GameWindow>
          <GameWindow name={names[3]} url={urls[3]} ></GameWindow>
        </div>
      </header>
    </div>
  );
}

export default App;
