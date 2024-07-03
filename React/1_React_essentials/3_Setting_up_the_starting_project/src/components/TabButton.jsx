
export default function TabButton({children , onSelect}){ // only children porps name is out off our contorl beside that we can name any props anything we want.
    // function handleClick(){
    //     console.log(children)
    // }

    return(
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>

    );
}