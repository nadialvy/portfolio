import NavItem from "./NavItem";

export default function Nav(){
    return(
        <ul className="flex justify-center space-x-11">
            <NavItem href="#profile">Profile</NavItem>
            <NavItem href="#skill">Skills</NavItem>
            <NavItem href="#project">Projects</NavItem>
            <NavItem href="#contact">Contact</NavItem>
        </ul>
    );
}