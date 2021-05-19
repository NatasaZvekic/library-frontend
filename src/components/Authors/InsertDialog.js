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
            lastname: '',
            yearOfBirth: ''
        };
    }
    onChange(e) {
        if (e.target.name == "yearOfBirth") {
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
                <Modal.Title>Add new genre</Modal.Title>
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
                    name="yearOfBirth"
                    className="inputFiled"
                    defaultValue={this.props.yearOfBirth}
                    onChange={this.onChange.bind(this)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.props.closeAddDialog}> Close  </Button>
                <Button onClick={() => this.props.insertAuthor(this.state.name, this.state.lastname, this.state.yearOfBirth)} variant="primary">Insert</Button>
            </Modal.Footer>
        </Modal>
        )
    }
}
