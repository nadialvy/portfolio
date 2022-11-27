import NavItem from "./NavItem";
import classnames from "classnames";

export default function Nav({dir, scheme} : {dir?: any, scheme?: any}){
    const dirs = {
        horizontal: "flex justify-center space-x-11",
        vertical: "flex-col space-y-4"
    }

    const picekdDir = dirs[dir as keyof typeof dirs] || dirs["horizontal"];

    return(
        <ul className={classnames(
            "flex",
            picekdDir
        )}>
            <NavItem scheme={scheme} href="#profile">Profile</NavItem>
            <NavItem scheme={scheme} href="#skill">Skills</NavItem>
            <NavItem scheme={scheme} href="#project">Projects</NavItem>
            <NavItem scheme={scheme} href="#contact">Contact</NavItem>
        </ul>
    );
}