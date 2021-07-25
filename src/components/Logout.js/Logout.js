import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Redirect } from 'react-router';
import background from '../assets/photo/unnamed.jpg'
import Header from '../Header/HeaderTwo';

export default class Logout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedOut: false,
        }
    }

    logOut() {
        this.setState({ loggedOut: true })
        localStorage.removeItem("jwtToken")
        localStorage.removeItem("role")
        localStorage.removeItem("userID")
        localStorage.removeItem("userName")
        localStorage.setItem("logged", false);

    }
    cancel() {
        this.setState({ loggedOut: true })
    }
    render() {
        if (this.state.loggedOut === true) {
            window.location.reload();
            return <Redirect to="/home" />
        }
        return (
            <div>
                <Header />
                <body id="LoginForm" style={{ height: '1000px', paddingTop: "70px" }}>
                    <div class="container">
                        <div class="login-form">
                            <div class="main-div">
                                <div class="panel">
                                    <p>Are you sure you want to logout?</p>
                                </div>
                                <form id="Login">
                                    <button type="submit" onClick={this.logOut.bind(this)} class="btn btn-primary">Logout</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </body>
            </div >
        )
    }
}
