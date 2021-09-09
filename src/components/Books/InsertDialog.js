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
            genreID: '',
            price: 0
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

    setGenre = (genreID) => {
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
                    <div class="form-group">
                        <input
                            type="text"
                            name="bookName"
                            class="form-control"
                            placeholder="Book name"
                            defaultValue={this.props.bookName}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="number"
                            name="available"
                            class="form-control"
                            placeholder="Available"
                            defaultValue={this.props.available}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="number"
                            name="price"
                            class="form-control"
                            placeholder="Price"
                            defaultValue={this.props.price}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="number"
                            name="publishYear"
                            class="form-control"
                            placeholder="Publish year"
                            defaultValue={this.props.publishYear}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            name="url"
                            class="form-control"
                            placeholder="Url"
                            defaultValue={this.props.url}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                    <div class="form-group">
                        <form>
                            <select
                                class="form-control"
                                onChange={(event) => { this.setGenre(event.target.value) }}  >
                                {this.props.genresList.map((genre, index) => {
                                    return (
                                        <option value={genre.genreID}>{genre.genreName}</option>
                                    )
                                })}
                            </select>
                        </form>
                    </div>
                    <div class="form-group">
                        <form>
                            <select
                                class="form-control"
                                onChange={(event) => { this.setAuthor(event.target.value) }}  >
                                {this.props.authorsList.map((author) => {
                                    return (
                                        <option value={author.authorID}>{author.authorName + " " + author.authorLastName}</option>
                                    )
                                })}
                            </select>
                        </form>
                    </div>
                    <div class="form-group">
                        <form>
                            <select
                                class="form-control"
                                onChange={(event) => { this.setSupplier(event.target.value) }}  >
                                {this.props.suppliersList.map((supplier) => {
                                    return (
                                        <option value={supplier.supplierID}>{supplier.companyName}</option>
                                    )
                                })}
                            </select>
                        </form>
                    </div>
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
                            this.state.url,
                            this.state.price
                        )
                    }
                        variant="secondary" style={{ backgroundColor: '#f0ad4e', borderColor: '#f0ad4e' }} >Insert</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
