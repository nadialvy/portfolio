export default function CardProject({ name, desc, img} : {name: string, desc: string, img: string}){
    return(
        <article className="text-center">
            <img src={img} alt="" className="w-full rounded-lg"/>
            <h3 className="md:text-xl font-semibold mb-1 mt-4">{name}</h3>
            <p className="md:text-lg text-gray-400 mt-4">{desc}</p>
        </article>

    );
}