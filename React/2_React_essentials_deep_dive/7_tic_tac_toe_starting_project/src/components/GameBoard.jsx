const initialGameBoard=[
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onSelectSquare}){

    return <ol id="game-board">
        {gameBoard.map((row , rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((gameBoardCell , colIndex) => <li key={colIndex}>
                    <button onClick={() => onSelectSquare(rowIndex , colIndex)}>{gameBoardCell}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>

}