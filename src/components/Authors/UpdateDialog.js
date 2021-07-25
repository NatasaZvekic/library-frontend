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
                            className="form-control"
                            defaultValue={this.props.name}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            name="lastname"
                            className="form-control"
                            defaultValue={this.props.lastname}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="number"
                            name="yearOfBirth"
                            className="form-control"
                            defaultValue={this.props.yearOfBirth}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeUpdateDialog}> Close </Button>
                    <Button onClick={() =>
                        this.props.updateAuthor(
                            this.state.name == "" ? this.props.name : this.state.name,
                            this.state.lastname == "" ? this.props.lastname : this.state.lastname,
                            this.state.yearOfBirth == 0 ? this.props.yearOfBirth : this.state.yearOfBirth,
                        )
                    }
                        variant="secondary" style={{ backgroundColor: '#f0ad4e', borderColor: '#f0ad4e' }}>Update</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
