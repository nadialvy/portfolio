export default function CardSkill({name, image} : {name:string, image:string}){
    return(
        <div className="w-4/12 pr-5">
            <div className="bg-white shadow-xl rounded-lg p-6 flex items-center">
                <img src={image} alt={name} className="rounded-full w-10 mr-6" />
                <h4 className="text-lg text-semibold">{name}</h4>
            </div>
        </div>
    );
}