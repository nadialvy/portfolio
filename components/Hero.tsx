import Button from "./Button";
import Navbar from "./Navbar";

export default function Hero(){
    return(
        <div className="
            bg-hero
            2xl:h-[750px]
            xl:h-[600px]
            lg:h-[500px]
            md:h-[500px]
            sm:h-[475px]
            max-[380px]:h-[370px]
            pb-20" id="hero">
            <div className="
                container
                mx-auto
                2xl:px-16
                xl:px-12
                max-[380px]:px-10">
                <Navbar />
                <div className="
                    text-center
                    2xl:mt-16
                    xl:mt-16
                    lg:mt-10
                    md:mt-8
                    sm:mt-12
                    mt-12
                ">
                    <h1 className="
                        md:text-2xl
                        text-white
                        font-semibold
                        font-mono
                        2xl:w-6/12
                        xl:w-8/12
                        lg:w-7/12
                        md:w-6/12
                        sm:w-8/12
                        mx-auto leading-relaxed">I'm a Flutter and Laravel Developer. Fullstack wannabe.</h1>
                    <p className="
                        text-white
                        text-opacity-60
                        md:text-lg
                        2xl:w-3/12
                        w-5/12
                        max-[380px]:w-11/12
                        sm:w-6/12
                        mx-auto mt-4 leading-relaxed">Currently majoring in Software Engineering. Curious and Enthusiastic.</p>
                    <Button href ="#profile" className="mt-20 py-3 2xl:px-10 xl:px-10 lg:px-10 md:mt-10 sm:mt-10 sm:px-6 invisible md:visible" variant="yellow" pill={true}>Get to Know Me</Button>
                </div>
            </div>
        </div>
    );
}