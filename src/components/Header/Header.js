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
                {/* <NavLink to="/login" className="buttonLeft">Log in</NavLink> */}
                {localStorage.getItem("role") === "admin" ? <NavLink to="/genres" className="button">Genres</NavLink> : ''}
                {localStorage.getItem("role") === "admin" ? <NavLink to="/employees" className="button">Employees</NavLink> : ''}
                {localStorage.getItem("role") === "admin" ? <NavLink to="/suppliers" className="button">Suppliers</NavLink> : ''}
                {localStorage.getItem("role") === "admin" ? <NavLink to="/deliverers" className="button">Deliverers</NavLink> : ''}  
                {localStorage.getItem("role") === "admin" ? <NavLink to="/rentals" className="button">Rentals</NavLink> : ''}              
                {<NavLink to={localStorage.getItem("jwtToken") !== null ? "logout" : "/login"} className="buttonLeft">{localStorage.getItem("jwtToken") !== null ? "Log out" : "Log in"}</NavLink>}
            </div>
        )
    }
}
