export default function NavItem({ children }:{ children : any }){
    return(
        <li><a className="text-white text-lg text-opacity-60 hover:text-white transition">{children}</a></li>
    )
}
