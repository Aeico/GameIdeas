import './App.css';
import GameHeader from './GameHeader';
import GameDetails from './GameDetails';
import FetchGame from './FetchGame';

function App() {
  

  var resp = FetchGame();
  console.log(resp)

  return (
    <div className="App">
      <header className="App-header">
        <GameHeader/>
        <GameDetails></GameDetails>
        </header>
    </div>
  );
}

export default App;
