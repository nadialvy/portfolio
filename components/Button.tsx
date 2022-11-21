export default function Button({ className, variant, children }:{ className: any, variant: any, children : any }){
    const addClassName = className ? ` ${className}` : "";
    const variants = {
        "outline-yellow": `border border-yellow-500 text-yellow-500`,
        "yellow": `bg-yellow-500 text-black`,
    }
    const pickedVariant = variants[variant as keyof typeof variants] || variants["outline-yellow"];
    return(
        <a className={`fonts-semibold text-lg py-3 px-10 rounded-full inline-block ${pickedVariant}${addClassName}`}>
            {children}
        </a>
    );
}