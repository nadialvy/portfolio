import CardSkill from "./CardSkill";
import Paragraph from "./Paragraph";
import Title from "./Title";

export default function Skills(){
    return(
        <section className="py-20 bg-primarygray px-16">
            <div className="container mx-auto">
                <Title>Skills</Title>
                <Paragraph>Some of Technology Stack that I use.</Paragraph>
                <div className="flex mt-28">
                    <CardSkill
                        name="HTML"
                        image="/html_icon.svg"
                    />
                    <CardSkill
                        name="JavaScript"
                        image="/js_icon.svg"
                    />
                    <CardSkill
                        name="PHP"
                        image="/php_icon.svg"
                    />
                </div>
                <div className="flex mt-5">
                    <CardSkill
                        name="Dart"
                        image="/dart_icon.svg"
                    />
                    <CardSkill
                        name="Laravel"
                        image="/laravel_icon.svg"
                    />
                    <CardSkill
                        name="Flutter"
                        image="/flutter_icon.svg"
                    />
                </div>
                <div className="flex mt-5 mb-24">
                    <CardSkill
                        name="Gitlab"
                        image="/gitlab_icon.svg"
                    />
                    <CardSkill
                        name="MySQL"
                        image="/mysql_icon.svg"
                    />
                    <CardSkill
                        name="Figma"
                        image="/figma_icon.svg"
                    />
                </div>
            </div>
        </section>
    );
}