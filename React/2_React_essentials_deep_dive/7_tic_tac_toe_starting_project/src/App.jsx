import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  const [activePlayer , setActivePlayer] = useState('X');
  const [gameTurns , setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex , colIndex){
    setActivePlayer((curPlayer) => curPlayer === 'X' ? 'O' : 'X'); 
    setGameTurns((prevTruns) => {

      let currentPlayer = "X";
      if (prevTruns.length > 0 && prevTruns[0].player === 'X'){
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
         ...prevTruns
      ];
    
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
