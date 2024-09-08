import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard=[
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  // const [activePlayer , setActivePlayer] = useState('X');
  const [gameTurns , setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;
  for(const turn of gameTurns){
      const {player , square} = turn;
      const {row , col} = square; 
      gameBoard[row][col] = player;
  };

  for(const combination of WINNING_COMBINATIONS){
    
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    // const secondSquareSymbol = ;
    // const thirdquareSymbol = ;
  };


  function handleSelectSquare(rowIndex , colIndex){
    // setActivePlayer((curPlayer) => curPlayer === 'X' ? 'O' : 'X'); 
    setGameTurns((prevTruns) => {
      const currentPlayer = deriveActivePlayer(prevTruns);

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
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
