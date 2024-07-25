
export default function Section({title , children , ...props}){ // ...anyName => will group some data , merge reminding props (name prpos is on to you)
    return ( //  ... => will spread some data 
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}