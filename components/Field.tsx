export default function Field({ label, value, type, className } : { label : any, value : any, type : any, className? : any }){
    const addClassName = className ? ` ${className}` : "";
    const formControllClassName = `bg-transparent border border-primarygray-300 py-2 px-6 w-full${addClassName}`;

    return(
        <div className="mb-6">
            <label htmlFor={value} className="block mb-1 text-sm font-semibold">{label}</label>
            {type === "text" && (
                <input type="text" name={value} id={value} className={formControllClassName} />
            )}

            {type === "textarea" && (
                <textarea name={value} id={value} className={formControllClassName} />
            )}
        </div>
    );
}