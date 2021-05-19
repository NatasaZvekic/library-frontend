import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class InsertDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            id: 0,
            name: '',
            contact: '',
            address: ''
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
            <Modal
                show={this.props.showAddDialog}
                backdrop="static"
                keyboard={false} >
                <Modal.Header >
                    <Modal.Title>Add new supplier</Modal.Title>
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
                        type="number"
                        name="contact"
                        className="inputFiled"
                        defaultValue={this.props.contact}
                        onChange={this.onChange.bind(this)}
                    />
                    <input
                        type="text"
                        name="address"
                        className="inputFiled"
                        defaultValue={this.props.address}
                        onChange={this.onChange.bind(this)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeAddDialog}> Close  </Button>
                    <Button onClick={() => this.props.insertSupplier(this.state.name, this.state.contact, this.state.address)} variant="primary">Insert</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
