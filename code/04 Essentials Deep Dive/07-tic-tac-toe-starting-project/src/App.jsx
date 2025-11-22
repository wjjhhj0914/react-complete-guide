import Player from './components/Player';
import { GameBoard } from './components/GameBoard';
import Log from './components/Log';
import { useState } from 'react';

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer(currActivePlayer => (currActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns();
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      <Log />
    </main>
  );
}

export default App;
