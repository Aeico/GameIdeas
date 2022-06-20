import './App.css';
import GameHeader from './GameHeader';
import GameDetails from './GameDetails';
import { useEffect, useState } from 'react';
import Search from './Search';

function App() {
  const [searchTerm, setSearchTerm] = useState('Diablo')

  useEffect (() => { 
    console.log('Changed ' + searchTerm)
  },[searchTerm])

  return (
    <div className="App">
      <header className="App-header">
        <GameHeader/>
        <Search SearchTerm={searchTerm} SetSearchTerm={setSearchTerm}></Search>
        <div className='GameContainer'>
          <GameDetails SearchGameName={searchTerm} number='0'/>
          <GameDetails SearchGameName={searchTerm} number='1'/>
          <GameDetails SearchGameName={searchTerm} number='2'/>
          <GameDetails SearchGameName={searchTerm} number='3'/>
        </div>
      </header>
    </div>
  );
}

export default App;
