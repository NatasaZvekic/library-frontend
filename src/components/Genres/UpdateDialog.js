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
                        <div class="form-group">
                            <input
                                type="text"
                                name={this.props.genreName}
                                class="form-control"
                                defaultValue={this.props.genreName}
                                onChange={this.onChange.bind(this)}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeUpdateDialog}> Close</Button>
                        <Button onClick={() => this.props.updateGenre(this.state.genreName)}  variant="secondary" style={{ backgroundColor: '#f0ad4e', borderColor: '#f0ad4e' }} >Update</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
