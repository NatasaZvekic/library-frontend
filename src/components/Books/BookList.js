import React, { Component } from 'react'
import Book from './BookTable'
import DeleteDialog from './DeleteDialog';
import UpdateDialog from './UpdateDialog';

export default class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            id: 0,
            bookName: '',
            available: '',
            publishYear: '',
            authorName : '',
            authorID: '',
            aa: '',
            bookID : '',
        };
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this)
        this.closeUpdateDialog = this.closeUpdateDialog.bind(this)
        this.DeleteBook = this.DeleteBook.bind(this)
        this.updateBook = this.updateBook.bind(this)
        // this.openDialogForDelete = this.openDialogForDelete.bind(this)
    }

    openDialogForDelete = (id) => {
        console.log("sdsdf")
        this.setState({ id: id })
        this.setState({ showDeleteDialog: true })
    }

    openDialogForUpdate = (book) => { console.log("name  a " + book.url)
        this.setState({ showUpdateDialog: true })
        this.setState({ id: book.bookID })
        this.setState({ url: book.url })
        this.setState({ bookName: book.bookName })
        this.setState({ available: book.available })
        this.setState({ publishYear: book.publishYear })
        this.setState({authorName : book.authorName })
        this.setState({bookID : book.bookID })
        this.setState({authorID : book.authorID })
    }
    closeUpdateDialog() {
        this.setState({ showUpdateDialog: false })
        this.setState({ name: '' })
        this.setState({ lastname: '' })
        this.setState({ yearOfBirth: '' })
    }
    closeDeleteDialog() {
        this.setState({ showDeleteDialog: false })
    }
    DeleteBook() {
        this.props.DeleteBook(this.state.id)
        this.setState({ showDeleteDialog: false })
    }
    updateBook( bookName, available ,publishYear,url) {
        this.props.updateBook(this.state.id,bookName, available ,publishYear,url)
        this.closeUpdateDialog()
    }
    setAuthor = (author, key) => { console.log("author " + author)
    this.setState({ aa: author })
}
    render() {
        return (
            <div>
                <div className="list">
            
                    <Book
                        listOfBooks={this.props.listOfBooks}
                        openDialogForUpdate={this.openDialogForUpdate}
                        openDialogForDelete={this.openDialogForDelete}
                    >

                    </Book>
                    <DeleteDialog
                        closeDeleteDialog={this.closeDeleteDialog}
                        showDeleteDialog={this.state.showDeleteDialog}
                        DeleteBook={this.DeleteBook}
                    />
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
                        url={this.state.url}
                    ></UpdateDialog>
                   
                </div>

            </div>
        )
    }
}
