import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class UpdateDialog extends Component {
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
                show={this.props.showUpdateDialog}
                backdrop="static"
                keyboard={false} >
                <Modal.Header >
                    <Modal.Title>Update resource</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        name="companyName"
                        className="inputFiled"
                        defaultValue={this.props.companyName}
                        onChange={this.onChange.bind(this)}
                    />
                    <input
                        type="text"
                        name="address"
                        className="inputFiled"
                        defaultValue={this.props.address}
                        onChange={this.onChange.bind(this)}
                    />
                    <input
                        type="number"
                        name="contact"
                        className="inputFiled"
                        defaultValue={this.props.contact}
                        onChange={this.onChange.bind(this)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeUpdateDialog}> Close </Button>
                    <Button onClick={() =>
                        this.props.updateDeliverer
                            (this.state.companyName,
                                this.state.address,
                                this.state.contact,
                            )
                    }
                        variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
