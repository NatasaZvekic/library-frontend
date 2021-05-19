import { Button, Modal } from 'react-bootstrap';
import React, { Component } from 'react'

export default class InsertDialog extends Component {
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
            password: ' '
        };
    }
    onChange(e) {
        if (e.target.name == "contact") {
            this.setState({ [e.target.name]: +e.target.value })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    render() {
        return (
            <div>
                <Modal
                    show={this.props.showAddDialog}
                    backdrop="static"
                    keyboard={false} >
                    <Modal.Header >
                        <Modal.Title>Add new genre</Modal.Title>
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
                        <input
                            type="text"
                            name="password"
                            className="inputFiled"
                            placeholder="User password"
                            defaultValue={this.props.password}
                            onChange={this.onChange.bind(this)}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeAddDialog}> Close  </Button>
                        <Button onClick={() =>
                            this.props.insertUser(this.state.name,
                                this.state.lastname,
                                this.state.contact,
                                this.state.address,
                                this.state.email,
                                this.state.role,
                                this.state.password)}
                            variant="primary">Insert</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
