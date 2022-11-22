import Button from "./Button";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar(){
    return(
        <div className="flex items-center py-20">
            <div className="w-3/12">
                <Logo />
            </div>
            <div className="w-6/12">
                <Nav />
            </div>
            <div className="w-3/12 text-right">
                <Button className="py-1 px-8" variant="outline-yellow">Contact</Button>
            </div>
        </div>
    );
}