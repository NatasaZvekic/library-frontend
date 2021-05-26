import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Redirect } from 'react-router';
import background from '../assets/photo/unnamed.jpg'
import Header from '../Header/Header';

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
        // localStorage.removeItem("jwtToken");
        // localStorage.removeItem("role")
        if (this.state.loggedOut === true) {
            return <Redirect to="/home" />
        }
        return (
            <div className="login" style={{ backgroundImage: `url(${background})` }}>
                <Header/>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Log out</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Are you sure you want to logout?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.cancel.bind(this)} variant="secondary">Close</Button>
                        <Button onClick={this.logOut.bind(this)} variant="primary">Logout</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}
