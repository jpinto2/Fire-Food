import React from "react";
import { NavLink } from "react-router-dom"
import "../styles/NavBar.css"

function NavBar() {
    return  <div className="navbar"> 
                <div className="links">
                    <div className="logo">
                        <h1><span className="letter-title">F</span>ire Foods</h1>
                    </div>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/linkOne'>Link 1</NavLink>
                    <NavLink to='/linkTwo'>Link 2</NavLink>
                    <NavLink to='/Sign-Up'>Sign Up/Login</NavLink>
                </div>
            </div>
}

export default NavBar;