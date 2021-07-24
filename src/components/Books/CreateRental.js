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
                    {/* <select style={{marginLeft: '23px'}}
                        onChange={(event) => this.changeBook(event.target.value)}
                    >
                        {this.props.listOfBooks.map((book) => {
                            return ( 
                                <option value={book.bookID}>{book.bookName}</option>
                            )
                        })}
                    </select> */}

                    <div class="form-group">
                        <input
                            type="text"
                            name="userName"
                            class="form-control"
                            value={this.props.bookName}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            name="userName"
                            value={localStorage.getItem("userName")}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            name="userName"
                            value= {this.props.price}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter account number"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeInsertRentalDialog}> Close  </Button>
                    <Button variant="secondary" style={{backgroundColor: '#f0ad4e', borderColor: '#f0ad4e'}} onClick={() => this.props.InsertRental(this.state.id)}>Create</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
