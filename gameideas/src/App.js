import './App.css';
import GameHeader from './GameHeader';
import { useEffect, useState } from 'react';
import Search from './Search';
import SearchGames from './SearchGames';
import GameWindow from './GameWindow';
import GameDetailedWindow from './GameDetailedWindow';

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

  const OpenGame = function(number) {
    console.log("Opened in app " + number)
  }

  return (
    <div className="App">
      <header className="App-header">
        <GameHeader/>
        <Search SearchTerm={searchTerm} SetSearchTerm={setSearchTerm}></Search>
        <div className='GameContainer'>
          <GameWindow data={gameData} openGame={OpenGame} num={0}></GameWindow>
          <GameWindow data={gameData} openGame={OpenGame} num={1}></GameWindow>
          <GameWindow data={gameData} openGame={OpenGame} num={2}></GameWindow>
          <GameWindow data={gameData} openGame={OpenGame} num={3}></GameWindow>
          <GameWindow data={gameData} openGame={OpenGame} num={4}></GameWindow>
        </div>
        <div className='GameContainer'>
          <GameWindow data={gameData} openGame={OpenGame} num={5}></GameWindow>
          <GameWindow data={gameData} openGame={OpenGame} num={6}></GameWindow>
          <GameWindow data={gameData} openGame={OpenGame} num={7}></GameWindow>
          <GameWindow data={gameData} openGame={OpenGame} num={8}></GameWindow>
          <GameWindow data={gameData} openGame={OpenGame} num={9}></GameWindow>
        </div>
        
      </header>
    </div>
  );
}

export default App;
