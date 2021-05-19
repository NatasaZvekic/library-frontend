import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class UpdateDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            id: 0,
            name: '',
            lastname: '',
            contact: 0,
            email: '',
            ssn: 0,
            role: '',
            password: ''
        };
    }
    onChange(e) {
        if (e.target.name == "contact" || e.target.name == "ssn") {
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
                        defaultValue={this.props.name}
                        onChange={this.onChange.bind(this)}
                    />
                    <input
                        type="text"
                        name="lastname"
                        className="inputFiled"
                        defaultValue={this.props.lastname}
                        onChange={this.onChange.bind(this)}
                    />
                    <input
                        type="number"
                        name="contact"
                        className="inputFiled"
                        defaultValue={this.props.contact}
                        onChange={this.onChange.bind(this)}
                    />
                    <input
                        type="text"
                        name="email"
                        className="inputFiled"
                        defaultValue={this.props.email}
                        onChange={this.onChange.bind(this)}
                    />
                    <input
                        type="number"
                        name="ssn"
                        className="inputFiled"
                        defaultValue={this.props.ssn}
                        onChange={this.onChange.bind(this)}
                    />
                    <input
                        type="text"
                        name="role"
                        className="inputFiled"
                        defaultValue={this.props.role}
                        onChange={this.onChange.bind(this)}
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeUpdateDialog}> Close </Button>
                    <Button onClick={() => this.props.updateEmployee(
                        this.state.name == "" ? this.props.name : this.state.name,
                        this.state.lastname == "" ? this.props.lastname : this.state.lastname,
                        this.state.role == "" ? this.props.role : this.state.role,
                        this.state.email == "" ? this.props.email : this.state.email,
                        this.state.ssn == 0 ? this.props.ssn : this.state.ssn,
                        this.state.contact == 0 ? this.props.contact : this.state.contact,
                    )} variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
