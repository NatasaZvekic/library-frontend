import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div class="header1">
                <NavLink to="/home" className="button">Home</NavLink>
                <NavLink to="/about" className="button">About Us</NavLink>
                <NavLink to="/books" className="button">Books</NavLink>
                <NavLink to="/galery" className="button">Galery</NavLink>
                <NavLink to="/login" className="buttonLeft">Log in</NavLink>
                {/* <NavLink to={localStorage.getItem("logged") == "suc" ? "logout" : "/login"} className="buttonLeft">{localStorage.getItem("logged") == "suc" ? "Log out" : "Log in"}</NavLink> */}
            </div>
        )
    }
}
