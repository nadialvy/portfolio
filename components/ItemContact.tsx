export default function ItemContact({ icon, title, children, className} : { icon : any, title : any, children : any, className? : any }){
    const addClassName = className ? ` ${className}` : "";

    return(
        <div className={`flex items-start${addClassName}`}>
            <img src={icon} alt="" className="w-6" />
            <div className="ml-4">
                <div className="text-sm font-semibold">
                    {title}
                </div>
                <div className="md:text-lg font-semibold">
                    {children}
                </div>
            </div>
        </div>
    );
}