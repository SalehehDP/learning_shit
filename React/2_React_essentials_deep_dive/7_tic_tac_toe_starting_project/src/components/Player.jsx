import { useState } from "react";

export default function Player({name , symbol}){

    const [ isEditing, setIsEditing ] = useState(false);
    function handleEditClick(){
        setIsEditing(true);
    }

    let playerName = <span className="player-name">{name}</span>;
    if (isEditing) {
        playerName = <input type="text" required />;
    }
    return <li>
        <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>Edit</button>
    </li>
}

// any palce that you see somthing is been repeted , or for some change you should do same thing multi times => components

//(span should have input field , button name should change ,.....) we need somthing cause the UI to update when changed => State 

// dynamic content => extra variable , if eles
