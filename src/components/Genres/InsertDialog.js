import { Button, Modal } from 'react-bootstrap';
import React, { Component } from 'react'
export default class InsertDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            id: 0,
            counter: 1,
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
                    show={this.props.showAddDialog}
                    backdrop="static"
                    keyboard={false} >
                    <Modal.Header >
                        <Modal.Title>Add new genre</Modal.Title>
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
                        <Button variant="secondary" onClick={this.props.closeAddDialog}> Close  </Button>
                        <Button onClick={() => this.props.insertGenre(this.state.genreName)} variant="primary">Insert</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
