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
            aa: '',
            bookID : '',
        };
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this)
        this.closeUpdateDialog = this.closeUpdateDialog.bind(this)
        this.DeleteBook = this.DeleteBook.bind(this)
        // this.openDialogForDelete = this.openDialogForDelete.bind(this)
    }

    openDialogForDelete = (id) => {
        console.log("sdsdf")
        this.setState({ id: id })
        this.setState({ showDeleteDialog: true })
    }

    openDialogForUpdate = (book) => { console.log("name  a " + book.authorName)
        this.setState({ showUpdateDialog: true })
        this.setState({ id: book.bookID })
        this.setState({ bookName: book.bookName })
        this.setState({ available: book.available })
        this.setState({ publishYear: book.publishYear })
        this.setState({authorName : book.authorName })
        this.setState({bookID : book.bookID })
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
                        openDialogForDelete={this.openDialogForDelete}>
                    </Book>
                    <DeleteDialog
                        closeDeleteDialog={this.closeDeleteDialog}
                        showDeleteDialog={this.state.showDeleteDialog}
                        DeleteBook={this.DeleteBook}
                    />
                    <UpdateDialog
                        authorsList={this.props.authorsList}
                        listOfBooks={this.props.listOfBooks}
                        showUpdateDialog={this.state.showUpdateDialog}
                        closeUpdateDialog={this.closeUpdateDialog}
                        bookName={this.state.bookName}
                        available={this.state.available}
                        publishYear={this.state.publishYear}
                        bookID={this.state.bookID}
                        authorName={this.state.authorName}
                    ></UpdateDialog>
                   
                </div>

            </div>
        )
    }
}
