import classnames from "classnames";

export default function Button({ className, variant, children, pill, href }:{ className: any, variant?: any, children : any, pill? : boolean, href? : any }){
    const variants = {
        "outline-yellow": `border border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-500`,
        "yellow": `bg-yellow-500 text-black hover:bg-yellow-600`,
        "black" : "bg-black text-white hover:bg-opacity-90",
    }
    const pickedVariant = variants[variant as keyof typeof variants] || variants["outline-yellow"];
    return(
        <a href={href} className={classnames(
            "transition fonts-semibold 2xl:text-lg xl:text-lg lg:text-lg rounded-full inline-block sm:text-sm",
            pickedVariant,
            className,
        )}>{children}</a>
    );
}