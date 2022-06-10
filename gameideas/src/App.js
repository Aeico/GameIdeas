import './App.css';
import GameHeader from './GameHeader';
import GameDetails from './GameDetails';
import { useEffect, useState } from 'react';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <GameHeader/>
        <div className='GameContainer'>
          <GameDetails number='0'/>
          <GameDetails number='1'/>
          <GameDetails number='2'/>
        </div>
      </header>
    </div>
  );
}

export default App;
