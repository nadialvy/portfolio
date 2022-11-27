export default function Title({ left, children } : { left? : boolean, children : any }){
    return(
        <h2 className={`md:text-2xl text-xl font-semibold font-mono${!left ? " text-center" : ""}`}>
            {children}
        </h2>
    );
}