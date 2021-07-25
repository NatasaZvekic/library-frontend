import React, { Component } from 'react'
import Book from './BookTable'
import DeleteDialog from './DeleteDialog';
import UpdateDialog from './UpdateDialog';
import CreateRental from './CreateRental'

export default class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            showInsertRentalDialog: false,
            id: 0,
            bookName: '',
            available: '',
            publishYear: '',
            authorName: '',
            authorID: '',
            aa: '',
            bookID: '',
            price: ''
        };
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this)
        this.closeUpdateDialog = this.closeUpdateDialog.bind(this)
        this.closeInsertRentalDialog = this.closeInsertRentalDialog.bind(this)
        this.DeleteBook = this.DeleteBook.bind(this)
        this.updateBook = this.updateBook.bind(this)
        this.InsertRental = this.InsertRental.bind(this)
    }

    openDialogForDelete = (id) => {
        this.setState({ id: id })
        this.setState({ showDeleteDialog: true })
    }

    openDialogForUpdate = (book) => {
        this.setState({ showUpdateDialog: true })
        this.setState({ id: book.bookID })
        this.setState({ url: book.url })
        this.setState({ bookName: book.bookName })
        this.setState({ available: book.available })
        this.setState({ publishYear: book.publishYear })
        this.setState({ authorName: book.authorName })
        this.setState({ bookID: book.bookID })
        this.setState({ authorID: book.authorID })
        this.setState({ price: book.price })
    }

    closeUpdateDialog() {
        this.setState({ showUpdateDialog: false })
        this.setState({ name: '' })
        this.setState({ lastname: '' })
        this.setState({ yearOfBirth: '' })
        this.setState({ price: '' })
    }

    closeDeleteDialog() {
        this.setState({ showDeleteDialog: false })
    }

    DeleteBook() {
        this.props.DeleteBook(this.state.id)
        this.setState({ showDeleteDialog: false })
    }

    updateBook(bookName, available, publishYear, url, price) {
        this.props.updateBook(this.state.id, bookName, available, publishYear, url, price)
        this.closeUpdateDialog()
    }

    InsertRental(id) {
        this.props.InsertRental(this.state.id)
        this.closeInsertRentalDialog()
    }

    closeInsertRentalDialog() {
        this.setState({ showInsertRentalDialog: false })
    }

    openDialogForInsertRental = (book) => {
        this.setState({ id: book.bookID })
        this.setState({ url: book.url })
        this.setState({ bookName: book.bookName })
        this.setState({ available: book.available })
        this.setState({ publishYear: book.publishYear })
        this.setState({ authorName: book.authorName })
        this.setState({ bookID: book.bookID })
        this.setState({ price: book.price })
        this.setState({ authorID: book.authorID })
        this.setState({ showInsertRentalDialog: true })
    }

    setAuthor = (author, key) => {
        this.setState({ aa: author })
    }

    render() {
        return (
            <div>
                <div className="list" style={{ backgroundColor: '#f2e6ff' }}>
                    <Book
                        listOfBooks={this.props.listOfBooks}
                        openDialogForUpdate={this.openDialogForUpdate}
                        openDialogForDelete={this.openDialogForDelete}
                        openDialogForInsertRental={this.openDialogForInsertRental}
                    >
                    </Book>
                    <DeleteDialog
                        closeDeleteDialog={this.closeDeleteDialog}
                        showDeleteDialog={this.state.showDeleteDialog}
                        DeleteBook={this.DeleteBook}
                    />
                    <CreateRental
                        openDialogForInsertRental={this.state.showInsertRentalDialog}
                        closeInsertRentalDialog={this.closeInsertRentalDialog}
                        InsertRental={this.InsertRental}
                        bookName={this.state.bookName}
                        price={this.state.price}
                        id={this.state.id}
                        available={this.state.available}
                        publishYear={this.state.publishYear}
                        bookName={this.state.bookName}
                        genresList={this.props.genresList}
                        suppliersList={this.props.suppliersList}
                        authorName={this.state.authorName}
                        updateBook={this.updateBook}
                        url={this.state.url} >
                    </CreateRental>
                    <UpdateDialog
                        authorsList={this.props.authorsList}
                        showUpdateDialog={this.state.showUpdateDialog}
                        closeUpdateDialog={this.closeUpdateDialog}
                        bookName={this.state.bookName}
                        available={this.state.available}
                        publishYear={this.state.publishYear}
                        bookName={this.state.bookName}
                        genresList={this.props.genresList}
                        suppliersList={this.props.suppliersList}
                        authorName={this.state.authorName}
                        updateBook={this.updateBook}
                        price={this.state.price}
                        url={this.state.url} >
                    </UpdateDialog>
                </div>
            </div>
        )
    }
}
