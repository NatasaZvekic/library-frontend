import { Button, Modal } from 'react-bootstrap';
import React, { Component } from 'react'

export default class UpdateDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            id: 0,
            genreName: ''
        };
    }
    onChange(e) {
        this.setState({ genreName: e.target.value })
    }
    render() {
        return (
            <div>
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
                            name={this.props.genreName}
                            className="inputFiled"
                            defaultValue={this.props.genreName}
                            onChange={this.onChange.bind(this)}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={ this.props.closeUpdateDialog}> Close</Button>
                        <Button onClick={() =>this.props.updateGenre(this.state.genreName)} variant="primary">Update</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
