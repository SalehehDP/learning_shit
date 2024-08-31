export default function Player({name , symbol}){
    return <li>
        <span className="palyer">
            <span className="player-name">{name}</span>
            <span className="player-symbol">{symbol}</span>
        </span>
        <button>Edit</button>
    </li>
}

// any palce that you see somthing is been repeted , or for some change you should do same thing multi times => components