import Button from "./Button";
import Field from "./Field";
import ItemContact from "./ItemContact";
import Paragraph from "./Paragraph";
import Title from "./Title";

export default function Contact(){
    return(
        <section className="container mx-auto p-14" id="contact">
            <div className="container bg-primarygray flex rounded-lg">
                <div className="w-6/12 px-14 border-r border-primarygray-200">
                    <div className="p-8"></div>

                    <Title left>Contact</Title>
                    <Paragraph left>Some ways you can contact me</Paragraph>
                    <div className="mb-10"></div>

                    <ItemContact
                        icon="/mail.svg"
                        title="Email"
                        children="nadialovely1803@gmail.com"
                        className="mb-10"
                        />
                    <a href="https://www.linkedin.com/in/nadia-lovely/" target="_blank">
                        <ItemContact
                            icon="/linkedin.svg"
                            title="LinkedIn"
                            children="Nadia Lovely"
                            className="mb-10"
                        />
                    </a>
                    <a href="https://github.com/nadialvy" target="_blank">
                        <ItemContact
                            icon="/github.svg"
                            title="Github"
                            children="nadialvy"
                        />
                    </a>
                    <div className="p-8"></div>
                </div>
                <div className="w-6/12">
                    <div className="p-8"></div>

                    <form className="py-16 px-20">
                        <div className="flex -mx-4">
                            <div className="w-6/12 px-4">
                                <Field
                                    label="Name"
                                    value="name"
                                    type="text"
                                />
                            </div>
                            <div className="w-6/12 px-4">
                                <Field
                                    label="Email"
                                    value="email"
                                    type="text"
                                />
                            </div>
                        </div>
                        <Field
                            label="Subject"
                            value="subject"
                            type="text"
                        />
                        <Field
                            label="Message"
                            value="message"
                            type="textarea"
                            className="h-40"
                        />

                        <div className="text-right">
                            <Button className="px-10 py-1" variant="black" pill={false}>Send</Button>
                        </div>
                    </form>

                    <div className="p-8"></div>
                </div>
            </div>
        </section>
    );
}