import React, { Component } from 'react'
import { IoMdMenu } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import VerifyToken from './VerifyToken'

export default class Header extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() { 
        if (localStorage.getItem("jwtToken")) {
            VerifyToken.verifyToken().then(response => {
                if (response.data == false) {
                    localStorage.removeItem("jwtToken")
                    localStorage.removeItem("role")
                    localStorage.removeItem("userID")
                    localStorage.removeItem("userName")
                }
            })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
        return (

            <div className="NavbarItems1">

                <div className="menu-icon1" onClick={this.handleClick}>
                    <i className="menuitem">{this.state.clicked ? <AiOutlineClose className="menuitem" /> : <IoMdMenu className="menuitem" />}</i>
                </div>
                <div className={this.state.clicked ? 'nav-menu1 active' : 'nav-menu1'}>
                    <NavLink to="/home" className="nav-links1">Home</NavLink>
                    <NavLink to="/about" className="nav-links1">About Us</NavLink>
                    <NavLink to="/galery" className="nav-links1">Gallery</NavLink>
                    <NavLink to="/books" className="nav-links1">Catalog</NavLink>
                    {/* <NavLink to="/login" className="buttonLeft">Log in</NavLink> */}
                    {localStorage.getItem("role") === "admin" ? <NavLink to="/genres" className="nav-links1">Genres</NavLink> : ''}
                    {localStorage.getItem("role") === "admin" ? <NavLink to="/employees" className="nav-links1">Employees</NavLink> : ''}
                    {localStorage.getItem("role") === "admin" ? <NavLink to="/suppliers" className="nav-links1">Suppliers</NavLink> : ''}
                    {localStorage.getItem("role") === "admin" ? <NavLink to="/authors" className="nav-links1">Authors</NavLink> : ''}
                    {localStorage.getItem("role") === "admin" ? <NavLink to="/deliverers" className="nav-links1">Deliverers</NavLink> : ''}
                    {localStorage.getItem("role") === "admin" ? <NavLink to="/rentals" className="nav-links1">Rentals</NavLink> : ''}
                    {localStorage.getItem("role") === "admin" ? <NavLink to="/users" className="nav-links1">Users</NavLink> : ''}
                    {localStorage.getItem("role") === "user" ? <NavLink to="/myRentals" className="nav-links1">My Rentals</NavLink> : ''}
                    {<NavLink to={localStorage.getItem("jwtToken") !== null ? "logout" : "/login"} className="nav-links1r">{localStorage.getItem("jwtToken") !== null ? "Log out" : "Log in"}</NavLink>}
                    {/* {localStorage.getItem("userName") !== null ? <div className="nav-links1r">Hello {localStorage.getItem("userName")}!</div> : ''} */}
                </div>
            </div>
        )
    }
}
