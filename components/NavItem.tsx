export default function NavItem({ children, href }:{ children : any, href : any }){
    return(
        <li><a href={href} className="text-white text-lg text-opacity-60 hover:text-white transition">{children}</a></li>
    )
}
