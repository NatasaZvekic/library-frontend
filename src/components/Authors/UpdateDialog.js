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
        console.log("im here")

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
                    <Button variant="secondary" onClick={this.props.closeUpdateDialog}> Close </Button>
                    <Button onClick={() =>
                        this.props.updateAuthor(
                            this.state.name == "" ? this.props.name : this.state.name,
                            this.state.lastname == "" ? this.props.lastname : this.state.lastname,
                            this.state.yearOfBirth == 0 ? this.props.yearOfBirth : this.state.yearOfBirth,
                        )
                    }
                        variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
