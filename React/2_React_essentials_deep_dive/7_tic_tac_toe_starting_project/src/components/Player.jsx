import { useState } from "react";

export default function Player({initialName , symbol , isActive}){

    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(initialName);

    function handleEditClick(){
        setIsEditing((editing) => !editing); // schedules a state update 
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }
    
    return <li className={isActive ? "active" :undefined}>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
}

// any palce that you see somthing is been repeted , or for some change you should do same thing multi times => components

//(span should have input field , button name should change ,.....) we need somthing cause the UI to update when changed => State 

// conditianal content => extra variable , ternary expresion

//Component Instances Work In *Isolation!* , the component use the same logic 
