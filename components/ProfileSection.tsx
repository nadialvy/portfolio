import Paragraph from "./Paragraph";
import Title from "./Title";

export default function Profile(){
    return(
        <section className="py-24" id="profile">
            <div className="container mx-auto">
                <Title>Profile</Title>
                <Paragraph>Get to know me briefly</Paragraph>
            </div>
            <div className="flex w-8/12 mx-auto mt-10 items-center">
                <div className="w-4/12 p-10">
                    <img src="/profile.png" className="w-full"/>
                </div>
                <div className='w-8/12 px-10'>
                    <p className="text-lg leading-relaxed text-justify">Not only to jump out of the comfort zone, but to turn the original "challenging zone " into "new comfort zone". Hello! My name is Nadia Lovely. I've spent the past 2+ years learning about web programming with Laravel and VueJS. Fast forward to today, and I've had the privilege of internship at a start-up as a Junior Flutter Developer, build mobile applications. I never knew anything about Flutter before, and because the Engineering Manager offered me to move from Quality Assurance to Flutter Developer, I was hesitant. But I dared to take that opportunity, and now here I am as a Junior Flutter Developer.</p>
                    <p className="text-lg mt-6 text-justify">Out of the office you'll find me dreaming of kpop concert, playing with stray cats, and listening to music.</p>
                </div>
            </div>
        </section>
    );
}