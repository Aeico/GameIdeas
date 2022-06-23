import './App.css';
import GameHeader from './GameHeader';
import { useEffect, useState } from 'react';
import Search from './Search';
import SearchGames from './SearchGames';
import GameWindow from './GameWindow';

function App() {
  const [searchTerm, setSearchTerm] = useState('Diablo');

  const [gameData, setGameData] = useState({
    cover: [],
    game_name: [],
    summary: [],
    url: []
  })

  const gameReply = async () => {
    const resp = await SearchGames(searchTerm);
    setGameData(resp)
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
          <GameWindow data={gameData} num={0}></GameWindow>
          <GameWindow data={gameData} num={1}></GameWindow>
          <GameWindow data={gameData} num={2}></GameWindow>
        </div>
        <div className='GameContainer'>
          <GameWindow data={gameData} num={3}></GameWindow>
          <GameWindow data={gameData} num={4}></GameWindow>
          <GameWindow data={gameData} num={5}></GameWindow>
        </div>
        <div className='GameContainer'>
          <GameWindow data={gameData} num={6}></GameWindow>
          <GameWindow data={gameData} num={7}></GameWindow>
          <GameWindow data={gameData} num={8}></GameWindow>
        </div>
      </header>
    </div>
  );
}

export default App;
