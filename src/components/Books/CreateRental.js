import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class CreateRental extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            id: 0,
            bookName: '',

        };

    }
    changeBook(bookName) {
        this.setState({ id: bookName })
    }
    render() {
        return (
            <Modal
                show={this.props.openDialogForInsertRental}
                backdrop="static"
                keyboard={false} >
                <Modal.Header >
                    <Modal.Title>Create new rental</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select style={{marginLeft: '23px'}}
                        onChange={(event) => this.changeBook(event.target.value)}
                    >
                        {this.props.listOfBooks.map((book) => {
                            return ( 
                                <option value={book.bookID}>{book.bookName}</option>
                            )
                        })}
                    </select>
                    <input
                        type="text"
                        name="userName"
                        className="inputFiled"
                        value={localStorage.getItem("userName")}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeInsertRentalDialog}> Close  </Button>
                    <Button onClick={() => this.props.InsertRental(this.state.id)} variant="primary">Create</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
