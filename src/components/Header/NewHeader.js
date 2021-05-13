import React, { Component } from 'react'
import { IoMdMenu } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';

export default class NewHeader extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <div className="NavbarItems">
                  <div className="menu-icon" onClick={this.handleClick}>
                    <i style={{ color: 'white' }}>{this.state.clicked ? <FaBeer/> : <IoMdMenu/> }</i>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <NavLink to="/home" className="button">Home</NavLink>
                    <NavLink to="/home" className="button">Home</NavLink>
                </ul>
                {/* <h1 className="navbar-logo"><i className="fas fa-times"></i></h1>
              
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {/* <NavLink to="/home" className="nav-links">Home</NavLink>
                    <NavLink to="/home" className="nav-links">Home</NavLink>
                    <NavLink to="/about" className="nav-links">About Us</NavLink>
                    <NavLink to="/books" className="nav-links">Books</NavLink>
                    <NavLink to="/galery" className="nav-links">Galery</NavLink> */}
                    {/* <NavLink to="/login" className="buttonLeft">Log in</NavLink> */}

         

            </div>
        )
    }
}
