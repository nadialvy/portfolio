import Paragraph from "./Paragraph";
import Title from "./Title";

export default function Profile(){
    return(
        <section className="py-24" id="profile">
            <div className="container mx-auto">
                <Title>Profile</Title>
                <Paragraph>Get to know me briefly</Paragraph>
            </div>
            <div className="
                flex mx-auto mt-10
                2xl:w-8/12
                xl:w-8/12
                lg:w-9/12
                lg:items-start
                md:w-10/12
                sm:w-11/12
                max-[380px]:flex-wrap
            ">
                <div className="
                    2xl:w-4/12 2xl:px-16
                    xl:w-3/12
                    lg:w-3/12
                    md:w-4/12 md:mr-10
                    sm:w-4/12 sm:mr-10
                    max-[380px]:w-5/12 max-[380px]:mb-10 max-[380px]:mx-auto
                ">
                    <img src="/profile_2.png" className="w-full"/>
                </div>
                <div className="
                    2xl:w-8/12 2xl:px-10
                    xl:w-10/12 xl:pl-10
                    lg:w-9/12 lg:pl-8
                    md:w-8/12
                    sm:w-8/12
                    max-[380px]:w-10/12 max-[380px]:mx-auto
                ">
                    <p className="md:text-lg leading-relaxed text-justify">Not only to jump out of the comfort zone, but to turn the original <span className="text-red-600 font-semibold">challenging zone</span> into <span className="text-green-600 font-semibold">new comfort zone</span>. Hello! My name is Nadia Lovely. I've spent the past 2+ years learning about web programming with <span className="text-blue-600">Laravel and VueJS</span>. Fast forward to today, and I've had the privilege of internship at a start-up as a <span className="text-blue-600">Junior Flutter Developer</span>, build mobile applications. I never knew anything about Flutter before, and because the Engineering Manager offered me to move from Quality Assurance to Flutter Developer, I was hesitant. But I dared to take that opportunity, and now here I am as a Junior Flutter Developer.</p>
                    <p className="md:text-lg mt-6 text-justify">Out of the office you'll find me dreaming of kpop concert, playing with stray cats, and listening to music.</p>
                </div>
            </div>
        </section>
    );
}