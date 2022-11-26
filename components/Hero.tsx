import Button from "./Button";
import Navbar from "./Navbar";

export default function Hero(){
    return(
        <div className="bg-hero h-[650px]">
            <div className="container mx-auto px-16">
            <Navbar />
            <div className="text-center mt-16">
                <h1 className="text-2xl text-white font-semibold font-mono w-8/12 mx-auto leading-relaxed">I'm a Flutter and Laravel Developer. Fullstack wannabe.</h1>
                <p className="text-white text-opacity-60 text-lg w-5/12 mx-auto mt-4 leading-relaxed">Currently majoring in Software Engineering. Curious and Enthusiastic.</p>
                <Button className="mt-20 py-3 px-10" variant="yellow" pill={true}>Get to Know Me</Button>
            </div>
            </div>
        </div>
    );
}