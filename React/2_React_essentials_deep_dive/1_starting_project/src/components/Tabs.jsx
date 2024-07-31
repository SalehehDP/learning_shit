export default function Tabs({children , buttons}){
        
    console.log(children)
    return (
        <>
            <menu>{buttons}</menu>
            {children}
        </>
    );
}