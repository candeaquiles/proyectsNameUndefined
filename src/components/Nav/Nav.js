import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'


const Nav = () => {
    return (
       <nav>

        <NavLink to="/categoria/1"> Categoria 1 </NavLink> 
        <NavLink to="/categoria/2"> Categoria 2 </NavLink>


       </nav>
    )
}

export default Nav
