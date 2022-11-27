import CardSkill from "./CardSkill";
import Paragraph from "./Paragraph";
import Title from "./Title";

export default function Skills(){
    return(
        <section className="py-20 bg-primarygray md:px-16 px-10" id="skill">
            <div className="container mx-auto">
                <Title>Skills</Title>
                <Paragraph>Some of Technology Stack that I use.</Paragraph>
                <div className="flex flex-wrap -mx-4 mt-20 max-[380px]:mt-10">
                    <div className="w-4/12 px-4 pb-4 max-[380px]:w-full">
                        <CardSkill
                            name="HTML"
                            image="/html_icon.svg"
                        />
                    </div>
                    <div className="w-4/12 px-4 pb-4 max-[380px]:w-full">
                        <CardSkill
                            name="JS"
                            image="/js_icon.svg"
                        />
                    </div>
                    <div className="w-4/12 px-4 pb-4 max-[380px]:w-full">
                        <CardSkill
                            name="PHP"
                            image="/php_icon.svg"
                        />
                    </div>
                    <div className="w-4/12 px-4 pb-4 max-[380px]:w-full">
                        <CardSkill
                            name="Dart"
                            image="/dart_icon.svg"
                        />
                    </div>
                    <div className="w-4/12 px-4 pb-4 max-[380px]:w-full">
                        <CardSkill
                            name="Laravel"
                            image="/laravel_icon.svg"
                        />
                    </div>
                    <div className="w-4/12 px-4 pb-4 max-[380px]:w-full">
                        <CardSkill
                            name="Flutter"
                            image="/flutter_icon.svg"
                        />
                    </div>
                    <div className="w-4/12 px-4 pb-4 max-[380px]:w-full">
                        <CardSkill
                            name="Gitlab"
                            image="/gitlab_icon.svg"
                        />
                    </div>
                    <div className="w-4/12 px-4 pb-4 max-[380px]:w-full">
                        <CardSkill
                            name="MySQL"
                            image="/mysql_icon.svg"
                        />
                    </div>
                    <div className="w-4/12 px-4 pb-4 max-[380px]:w-full">
                        <CardSkill
                            name="Figma"
                            image="/figma_icon.svg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}