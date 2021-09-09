import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'


export default class MyProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            name: '',
            lastname: '',
            contact: 0,
            address: '',

        };
    }
    onChange(e) {
        console.log("i se " + this.state.role)
        if (e.target.name == "contact") {
            this.setState({ [e.target.name]: +e.target.value })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    render() {
        return (
            <div>
                <body id="LoginForm" style={{ height: '1000px', paddingTop: "70px" }}>
                    <div class="container">
                        <div class="login-form">
                            <div class="main-div">
                                <div class="panel">
                                    <h1 class="loginTitle">Change information</h1>
                                </div>
                                <form id="Login">
                                    <div>
                                    </div>
                                    <div class="form-group">
                                        <input type="email"
                                            name="name"
                                            defaultValue={this.props.user.name}
                                            class="form-control"
                                            onChange={this.onChange.bind(this)}
                                            id="inputEmail" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email"
                                            name="lastname"
                                            defaultValue={this.props.user.userLastName}
                                            onChange={this.onChange.bind(this)}
                                            class="form-control"
                                            id="inputEmail" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email"
                                            name="address"
                                            onChange={this.onChange.bind(this)}
                                            defaultValue={this.props.user.userAddress}
                                            class="form-control"
                                            id="inputEmail" />
                                    </div>
                                    <div class="form-group">
                                        <input type="number"
                                            name="contact"
                                            onChange={this.onChange.bind(this)}
                                            defaultValue={this.props.user.userContact}
                                            class="form-control"
                                            id="inputEmail" />
                                    </div>
                                    <Button onClick={() => this.props.updateUser(
                                        this.state.name == "" ? this.props.user.name : this.state.name,
                                        this.state.lastname == "" ? this.props.user.userLastName : this.state.lastname,
                                        this.state.contact == 0 ? this.props.user.userContact : this.state.contact,
                                        this.state.address == "" ? this.props.user.userAddress : this.state.address,
                                    )} class="btn btn-primary">Update</Button>

                                </form>
                            </div>
                        </div>
                    </div>
                </body>
            </div >
        )
    }
}
