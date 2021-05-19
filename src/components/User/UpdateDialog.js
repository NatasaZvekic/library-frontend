import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class UpdateDialog extends Component {
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
            role: '',
            email: '',
        };
    }
    onChange(e) { console.log("i se " + this.state.role)
        if (e.target.name == "contact") {
            this.setState({ [e.target.name]: +e.target.value })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    render() {
        return (
            <Modal
                show={this.props.showUpdateDialog}
                backdrop="static"
                keyboard={false} >
                <Modal.Header >
                    <Modal.Title>Update resource</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <input
                            type="text"
                            name="name"
                            className="inputFiled"
                            placeholder="User first name"
                            defaultValue={this.props.name}
                            onChange={this.onChange.bind(this)}
                        />
                        <input
                            type="text"
                            name="lastname"
                            className="inputFiled"
                            placeholder="User last name"
                            defaultValue={this.props.lastname}
                            onChange={this.onChange.bind(this)}
                        />
                        <input
                            type="number"
                            name="contact"
                            className="inputFiled"
                            placeholder="User contact"
                            defaultValue={this.props.contact}
                            onChange={this.onChange.bind(this)}
                        />
                         <input
                            type="text"
                            name="address"
                            className="inputFiled"
                            placeholder="User address"
                            defaultValue={this.props.address}
                            onChange={this.onChange.bind(this)}
                        />
                        <input
                            type="text"
                            name="email"
                            className="inputFiled"
                            placeholder="User email"
                            defaultValue={this.props.email}
                            onChange={this.onChange.bind(this)}
                        />
                        <input
                            type="text"
                            name="role"
                            className="inputFiled"
                            placeholder="User role"
                            defaultValue={this.props.role}
                            onChange={this.onChange.bind(this)}
                        />
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeUpdateDialog}> Close </Button>
                    <Button onClick={() => this.props.updateUser(
                        this.state.name == "" ? this.props.name : this.state.name,
                        this.state.lastname == "" ? this.props.lastname : this.state.lastname,
                        this.state.contact == 0 ? this.props.contact : this.state.contact,
                        this.state.address == "" ? this.props.address : this.state.address,
                        this.state.email == "" ? this.props.email : this.state.email,
                        this.state.role == "" ? this.props.role : this.state.role,
                    )} variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
