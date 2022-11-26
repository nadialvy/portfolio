export default function Button({ className, variant, children, pill }:{ className: any, variant?: any, children : any, pill : boolean }){
    const addClassName = className ? ` ${className}` : "";
    const variants = {
        "outline-yellow": `border border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-500`,
        "yellow": `bg-yellow-500 text-black hover:bg-yellow-700`,
        "black" : "bg-black text-white hover:bg-opacity-90",
    }
    const pickedVariant = variants[variant as keyof typeof variants] || variants["outline-yellow"];
    return(
        <a className={`transition fonts-semibold text-lg rounded-full inline-block ${pickedVariant}${addClassName}`}>{children}</a>
    );
}