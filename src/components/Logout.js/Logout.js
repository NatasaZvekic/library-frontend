import React, { Component } from 'react'
import Modal from 'react-modal';
import { Redirect } from 'react-router';

export default class Logout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedOut: false,
        }
    }

    logOut() {
        this.setState({ loggedOut: true })
        localStorage.setItem("logged", false)
    }
    cancel() {
        this.setState({ loggedOut: true })
    }
    render() {
        if (this.state.loggedOut === true) {
            return <Redirect to="/home" />
        }
        return (

            <div>
                <p>sdfsadf</p>
                <Modal className="modal"
                    isOpen="true">
                    <h2 >Are you sure you want to log out?</h2>
                    <button className="LogOutBtn"onClick={this.logOut.bind(this)}>Log out</button>
                    <button className="LogOutBtn" onClick={this.cancel.bind(this)}>Cancel</button>
                </Modal>
            </div>
        )
    }
}
