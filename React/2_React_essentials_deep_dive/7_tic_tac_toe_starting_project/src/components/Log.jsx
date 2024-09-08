export default function Log({turns}){

    return <ol id="log">
        {turns.map((turn) => 
            <li key={`${turn.square.row}${turn.square.col}`}>
                {turn.player} selected {turn.square.row},{turn.square.row}
            </li>
        )}
    </ol>
}

// this turn data will be map to a li itme 
// you should always add key when outputing a dynamic list 
// backticks => use JavaScript's template literal syntax 