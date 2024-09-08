

export default function GameBoard({onSelectSquare , board}){
    
    return <ol id="game-board">
        {board.map((row , rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((gameBoardCell , colIndex) => <li key={colIndex}>
                    <button 
                        onClick={() => onSelectSquare(rowIndex , colIndex)}
                        disabled={gameBoardCell !== null}
                    >
                        {gameBoardCell}
                    </button>
                </li>)}
            </ol>
        </li>)}
    </ol>

}