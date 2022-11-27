import Button from "./Button";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar(){
    return(
        <div className="flex items-center 2xl:py-20 xl:py-20 lg:py-12 px-8 md:py-10 sm:py-8">
            <div className="w-3/12">
                <Logo />
            </div>
            <div className="w-6/12">
                <Nav />
            </div>
            <div className="w-3/12 text-right">
                <Button href ="#contact" className="py-1 2xl:px-8 xl:px-8 lg:px-8 md:px-8 sm:px-4" variant="outline-yellow">Contact</Button>
            </div>
        </div>
    );
}