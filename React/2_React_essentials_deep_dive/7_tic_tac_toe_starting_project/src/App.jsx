import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer , setActivePlayer] = useState('X');

  function handleSwichingTrun(){
    setActivePlayer((curPlayer) => curPlayer === 'X' ? 'O' : 'X'); 
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSwichingTrun={handleSwichingTrun} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  )
}

export default App
