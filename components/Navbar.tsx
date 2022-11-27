import Button from "./Button";
import Logo from "./Logo";
import Nav from "./Nav";
import {useState} from "react";
import classnames from "classnames";

export default function Navbar(){
    const [offCanvas, setOffCanvas] = useState(false);

    return(
        <>
            <div className="
                flex
                items-center
                md:px-8
                2xl:py-20
                xl:py-20
                lg:py-12
                md:py-10
                sm:py-8
            ">
                <div className="w-3/12 md:py-0 py-6">
                    <Logo />
                </div>
                <div className="w-6/12 hidden md:block">
                    <Nav
                        scheme="light"
                        dir="horizontal"
                    />
                </div>
                <div className="w-3/12 text-right hidden md:block">
                    <Button href ="#contact" className="py-1 2xl:px-8 xl:px-8 lg:px-8 md:px-8 sm:px-4" variant="outline-yellow">Contact</Button>
                </div>
                <div className="w-9/12 md:hidden text-right">
                    <img src="menu.svg" alt="" className="inline-block" onClick={() => setOffCanvas(true)}/>
                </div>
            </div>

            <div className={classnames(
                "fixed bg-white z-10 top-0 h-full w-full p-10 md:hidden transition-all",
                offCanvas ? "right-0" : "-right-full"
            )}>
                <img src="/x.svg" alt="" className="absolute top-10 right-8 w-6" onClick={() => setOffCanvas(false)}/>
                <Nav
                    scheme="dark"
                    dir="vertical"
                />
            </div>
        </>
    );
}