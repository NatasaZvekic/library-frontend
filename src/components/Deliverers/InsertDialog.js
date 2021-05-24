import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class InsertDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            companyName: '',
            address: '',
            contact: '',
            id: 0,
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
                    <Modal.Title>Add new deliverer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        name="companyName"
                        className="inputFiled"
                        placeholder="Company name"
                        defaultValue={this.state.companyName}
                        onChange={this.onChange.bind(this)}
                    />
                    <input
                        type="text"
                        name="address"
                        className="inputFiled"
                        placeholder="Deliverer address"
                        defaultValue={this.state.address}
                        onChange={this.onChange.bind(this)}
                    />
                    <input
                        type="number"
                        name="contact"
                        className="inputFiled"
                        placeholder="Deliverer contact"
                        defaultValue={this.state.contact}
                        onChange={this.onChange.bind(this)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeAddDialog}> Close  </Button>
                    <Button onClick={() =>
                        this.props.insertDeliverer(
                            this.state.companyName,
                            this.state.address,
                            this.state.contact,
                        )}
                        variant="primary">Insert</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
