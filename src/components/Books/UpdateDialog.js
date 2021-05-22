import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class UpdateDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            author: this.props.authorName,
            id: 0,
            name: '',
            lastname: '',
            yearOfBirth: '',
            bookTitle: '',
            available: 0,
            publishYear: 0,
            authorID: '',
            bookID: ''
        };

    }
    setAuthor = (author, key) => {
        console.log("key " + author)
        this.setState({ author: author })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    setBook = (bookID) => {
        this.setState({ bookID: bookID })
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
                    <form>
                        <select
                            onChange={(event) => { this.setBook(event.target.value) }} >
                            {this.props.listOfBooks.map((book) => {
                                return (
                                    <option value={book.bookID}>{book.bookName}</option>
                                )
                            })}

                        </select>
                        <br />
                    </form>
                    <input
                        type="number"
                        name="available"
                        className="inputFiled"
                        defaultValue={this.props.available}
                        onChange={this.onChange.bind(this)}
                    />
                    <input
                        type="number"
                        name="publishYear"
                        className="inputFiled"
                        defaultValue={this.props.publishYear}
                        onChange={this.onChange.bind(this)}
                    />
                    <input
                        type="text"
                        name="publishYear"
                        className="inputFiled"
                        defaultValue={this.state.author === '' ? this.props.authorName : this.state.author}
                        onChange={this.onChange.bind(this)}
                    />
                    <form>
                        <select
                            onChange={(event) => { this.setAuthor(event.target.value) }}  >
                            {this.props.authorsList.map((author, index) => {
                                return (
                                    <option value={author.authorID}>{author.authorName}</option>
                                )
                            })}
                        </select>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeUpdateDialog}> Close </Button>
                    <Button onClick={() =>
                        this.props.updateAuthor(
                            this.state.name == "" ? this.props.name : this.state.name,
                            this.state.bookID == "" ? this.props.bookID : this.state.bookID,
                            this.state.available == 0 ? this.props.available : this.state.available,
                            this.state.publishYear == 0 ? this.props.publishYear : this.state.publishYear,
                        )
                    }
                        variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
