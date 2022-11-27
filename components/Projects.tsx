import CardProject from "./CardProject";
import Paragraph from "./Paragraph";
import Title from "./Title";

export default function Projects(){
    return(
        <section className="
            2xl:py-20 2xl:px-60
            xl:py-20 xl:px-60
            lg:py-20 lg:px-40
            md:px-24 md:py-20
            sm:px-12 sm:py-10
            max-[380px]:px-8 max-[380px]:py-8
            "
            id="project">
            <div className="container mx-auto">
                <Title>Projects</Title>
                <Paragraph> <span className="text-red-500 font-semibold">This page is under construction!</span> All of the projects name are real, but not with the image.</Paragraph>
                <div className="flex -mx-4 mt-20 md:mt-10 flex-wrap">
                    <div className="md:w-6/12 w-full px-4 md:pb-0 pb-8">
                        <CardProject
                            name="GoLaundry"
                            desc="A simple laundry payment web application with Laravel and VueJS"
                            img="/project_1.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 md:pb-0 pb-8">
                        <CardProject
                            name="GoPayment"
                            desc="A simple tuition payment system web application with Laravel and VueJS"
                            img="/project_2.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 md:pb-0 pb-8 md:mt-20">
                        <CardProject
                            name="Pressence App"
                            desc="Pressence App with geolocator using Flutter and GetX"
                            img="/project_2.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 md:pb-0 pb-8 md:mt-20">
                        <CardProject
                            name="Jualin App"
                            desc="This is a project collaboration with my friend to support UMKM in Indonesia using Flutter and GetX"
                            img="/project_1.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}