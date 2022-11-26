import CardProject from "./CardProject";
import Paragraph from "./Paragraph";
import Title from "./Title";

export default function Projects(){
    return(
        <section className="py-20 px-60">
            <div className="container mx-auto">
                <Title>Projects</Title>
                <Paragraph> This page is under construction !!! All of the projects name are real, but not with the image</Paragraph>
                <div className="flex -mx-4 mt-20 flex-wrap">
                    <div className="w-6/12 px-4">
                        <CardProject
                            name="GoLaundry"
                            desc="A simple laundry payment web application with Laravel and VueJS"
                            img="/project_1.png"
                        />
                    </div>
                    <div className="w-6/12 px-4">
                        <CardProject
                            name="GoPayment"
                            desc="A simple tuition payment system web application with Laravel and VueJS"
                            img="/project_2.png"
                        />
                    </div>
                    <div className="w-6/12 px-4 mt-20">
                        <CardProject
                            name="Pressence App"
                            desc="Pressence App with geolocator using Flutter and GetX"
                            img="/project_2.png"
                        />
                    </div>
                    <div className="w-6/12 px-4 mt-20">
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