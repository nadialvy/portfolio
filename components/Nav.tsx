import NavItem from "./NavItem";

export default function Nav(){
    return(
        <ul className="flex justify-center space-x-11">
            <NavItem>Profile</NavItem>
            <NavItem>Skills</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Contact</NavItem>
        </ul>
    );
}