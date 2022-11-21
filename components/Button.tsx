export default function Button({ children }:{ children : any }){
    return(
        <a className="border border-yellow-500 fonts-semibold text-lg text-yellow-500 py-3 px-10 rounded-full">
            {children}
        </a>
    );
}