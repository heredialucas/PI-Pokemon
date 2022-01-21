import { NavLink } from "react-router-dom"

export default function Navbar(){
    return (
        <>
            <h1>NAV BAR</h1>
            <NavLink to='/create'>Create</NavLink>
        </>
    )
}