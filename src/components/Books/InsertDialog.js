import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class InsertDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            author: this.props.authorName,
            id: 0,
            yearOfBirth: '',
            bookTitle: '',
            available: 0,
            publishYear: 0,
            authorID: '',
            bookID: '',
            supplierID: '',
            url: '',
            genreID: ''
        };

    }
    setAuthor = (authorID) => {
        this.setState({ authorID: authorID })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    setBook = (bookID) => {
        this.setState({ bookID: bookID })
    }
    setSupplier = (supplierID) => {
        this.setState({ supplierID: supplierID })
    }
 
    setGenre = (genreID) => { console.log("gid " + genreID)
        this.setState({ genreID: genreID })
    }
    render() {
        return (
            <Modal
                show={this.props.showInsertBookDialog}
                backdrop="static"
                keyboard={false} >
                <Modal.Header >
                    <Modal.Title>Add new book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        name="bookName"
                        className="inputFiled"
                        placeholder="Book name"
                        defaultValue={this.props.bookName}
                        onChange={this.onChange.bind(this)}
                    />
                    <input
                        type="number"
                        name="available"
                        className="inputFiled"
                        placeholder="Available"
                        defaultValue={this.props.available}
                        onChange={this.onChange.bind(this)}
                    />
                    <input
                        type="number"
                        name="publishYear"
                        className="inputFiled"
                        placeholder="Publish year"
                        defaultValue={this.props.publishYear}
                        onChange={this.onChange.bind(this)}
                    />
                    <input
                        type="text"
                        name="url"
                        className="inputFiled"
                        placeholder="Url"
                        defaultValue={this.props.url}
                        onChange={this.onChange.bind(this)}
                    />
                    <form>
                    <select style={{marginLeft: '23px'}}
                            onChange={(event) => { this.setGenre(event.target.value) }}  >
                            {this.props.genresList.map((genre, index) => {
                                return (
                                    <option value={genre.genreID}>{genre.genreName}</option>
                                )
                            })}
                        </select>
                    </form>
                    <form>
                    <select style={{marginLeft: '23px'}}
                            onChange={(event) => { this.setAuthor(event.target.value) }}  >
                            {this.props.authorsList.map((author) => {
                                return (
                                    <option value={author.authorID}>{author.authorName + " " + author.authorLastName}</option>
                                )
                            })}
                        </select>
                    </form>
                    <form>
                    <select style={{marginLeft: '23px'}}
                            onChange={(event) => { this.setSupplier(event.target.value) }}  >
                            {this.props.suppliersList.map((supplier) => {
                                return (
                                    <option value={supplier.supplierID}>{supplier.companyName}</option>
                                )
                            })}
                        </select>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeInsertDialog}> Close </Button>
                    <Button onClick={() =>
                        this.props.insertBook(
                            this.state.bookName,
                            this.state.supplierID,
                            this.state.available,
                            this.state.genreID,
                            this.state.authorID,
                            this.state.publishYear,
                            this.state.url
                        )
                    }
                        variant="primary">Insert</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
