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
            <Modal
                show={this.props.showUpdateDialog}
                backdrop="static"
                keyboard={false} >
                <Modal.Header >
                    <Modal.Title>Update resource</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="form-group">
                        <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="User first name"
                            defaultValue={this.props.name}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            name="lastname"
                            class="form-control"
                            placeholder="User last name"
                            defaultValue={this.props.lastname}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="number"
                            name="contact"
                            class="form-control"
                            placeholder="User contact"
                            defaultValue={this.props.contact}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            name="address"
                            class="form-control"
                            placeholder="User address"
                            defaultValue={this.props.address}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            name="email"
                            class="form-control"
                            placeholder="User email"
                            defaultValue={this.props.email}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            name="role"
                            class="form-control"
                            placeholder="User role"
                            defaultValue={this.props.role}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>

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
                    )} variant="secondary" style={{ backgroundColor: '#f0ad4e', borderColor: '#f0ad4e' }}>Update</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
