import { Button, Modal } from 'react-bootstrap';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class DeleteDialog extends Component {
    render() {
        return (
            <div>
                <Modal
                    show={this.props.showDeleteDialog}
                    backdrop="static"
                    keyboard={false} >
                    <Modal.Header closeButton>
                        <Modal.Title>Delete resource</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete this record?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeDeleteDialog}> Close</Button>
                        <Button onClick={this.props.deleteRental} variant="primary">Delete</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
