import classnames from "classnames";

export default function NavItem({ children, href, scheme }:{ children : any, href : any, scheme? : any }){
    const schemes = {
        light: "text-white hover:text-white text-opacity-60",
        dark: "text-black font-semibold",
    }

    const pickedScheme = schemes[scheme as keyof typeof schemes] || schemes["light"];

    return(
        <li>
            <a
                href={href}
                className={classnames("text-lg transition", pickedScheme)}
            >
                {children}
            </a>
        </li>
    )
}
