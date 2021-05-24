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
            bookName: '',
            genreID : '',
            url: '',
            supplierID : '',
        };

    }
    setAuthor = (author) => {
        this.setState({ author: author })
    }

    setBook = (bookName) => {
        this.setState({ bookName: bookName })
    }

    setGenre = (genreID) => {
        this.setState({ genreID: genreID })
    }

    setSupplier = (supplierID) => {
        this.setState({ supplierID: supplierID })
    }

    onChange(e) {
        if (e.target.name == "available" || e.target.name == "publishYear")  {
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
                        name="bookName"
                        className="inputFiled"
                        defaultValue={this.props.bookName}
                        onChange={this.onChange.bind(this)}
                    />
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
                        name="url"
                        className="inputFiled"
                        defaultValue={this.props.url}
                        onChange={this.onChange.bind(this)}
                    />
                    <select style={{ marginLeft: '23px' }}
                        onChange={(event) => { this.setAuthor(event.target.value) }}  >
                        {this.props.authorsList.map((author, index) => {
                            return (
                                <option value={author.authorID}>{author.authorName}</option>
                            )
                        })}
                    </select>
                    <br/>
                    <select style={{ marginLeft: '23px' }}
                        onChange={(event) => { this.setGenre(event.target.value) }}  >
                        {this.props.genresList.map((genre, index) => {
                            return (
                                <option value={genre.genreID}>{genre.genreName}</option>
                            )
                        })}
                    </select>
                    <br/>
                    <select style={{ marginLeft: '23px' }}
                        onChange={(event) => { this.setSupplier(event.target.value) }}  >
                        {this.props.suppliersList.map((supplier, index) => {
                            return (
                                <option value={supplier.supplierID}>{supplier.companyName}</option>
                            )
                        })}
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeUpdateDialog}> Close </Button>
                    <Button onClick={() =>
                        this.props.updateBook(
                            this.state.bookName == "" ? this.props.bookName : this.state.bookName,
                            this.state.available == 0 ? this.props.available : this.state.available,
                            this.state.publishYear == 0 ? this.props.publishYear : this.state.publishYear,
                            this.state.url == "" ? this.props.url : this.state.url
                        )
                    }
                        variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
