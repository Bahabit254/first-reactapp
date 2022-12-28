import { NavLink } from "react-router-dom"
import { useAuth } from "./auths"


export const Navbar = () => {
    const auths = useAuth()
    return (
        <nav className="primary-nav">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            {
            !auths.user && (<NavLink to='/login'>Login</NavLink>)
            }
        </nav>
    )
}