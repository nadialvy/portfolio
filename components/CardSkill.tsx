export default function CardSkill({name, image} : {name:string, image:string}){
    return(
        <div className="bg-white shadow-xl rounded-lg md:p-6 p-4 flex items-center">
            <img src={image} alt={name} className="rounded-full w-10 mr-6" />
            <div>
                <h4 className="md:text-lg text-semibold">{name}</h4>
            </div>
        </div>
    );
}