export default function Title({ left, children } : { left? : boolean, children : any }){
    return(
        <h2 className={`text-2xl font-semibold font-mono${!left ? " text-center" : ""}`}>
            {children}
        </h2>
    );
}