import { CardWidget } from "../cardWidget/CardWidget"
import { NavLink } from "react-router-dom"
import './header.css'
import Nav from "../Nav/Nav"

export const Header = () => {

   
    return (
        <div>
            <Nav />

            <NavLink to="/">

           <h2>Welcome</h2>


            </NavLink>

            <img src="img/logo.png" alt="logo" className="loguito"/>









            <CardWidget/>

        </div>
    )
}
