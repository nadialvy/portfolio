export default function Title({ children } : { children : any }){
    return(
        <h2 className="text-2xl font-semibold font-mono text-center">
            {children}
        </h2>
    );
}