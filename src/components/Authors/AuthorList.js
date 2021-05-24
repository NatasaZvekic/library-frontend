import React, { Component } from 'react'
import InsertDialog from './InsertDialog';
import DeleteDialog from './DeleteDialog';
import UpdateDialog from './UpdateDialog';
import AuthorTable from './AuthorTable';

export default class AuthorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            id: 0,
            name: '',
            lastname: '',
            yearOfBirth: ''
        };
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this)
        this.deleteAuthor = this.deleteAuthor.bind(this)
        this.closeUpdateDialog = this.closeUpdateDialog.bind(this)
        this.closeAddDialog = this.closeAddDialog.bind(this)
        this.openAddDialog = this.openAddDialog.bind(this)
    }
    
    openDialogForDelete = (id) => {
        this.setState({ id: id })
        this.setState({ showDeleteDialog: true })
    }

    openDialogForUpdate = (author) => {
        this.setState({ showUpdateDialog: true })
        this.setState({ id: author.authorID })
        this.setState({ name: author.authorName })
        this.setState({ lastname: author.authorLastName })
        this.setState({ yearOfBirth: author.yearOfBirth })
    }

    closeDeleteDialog() { 
        this.setState({ showDeleteDialog: false }) 
    }

    closeUpdateDialog() {
        this.setState({ showUpdateDialog: false })
        this.setState({ name: '' })
        this.setState({ lastname: '' })
        this.setState({ yearOfBirth: '' })
        
    }
    closeAddDialog() { 
        this.setState({ showAddDialog: false })
        this.setState({ name: '' })
        this.setState({ lastname: '' })
        this.setState({ yearOfBirth: '' })
    }
    deleteAuthor() {
        this.props.deleteAuthor(this.state.id)
        this.setState({ showDeleteDialog: false })
    }
    openAddDialog() { this.setState({ showAddDialog: true }) }

    updateAuthor = (name, lastname, yearOfBirth) => { console.log(" af " + name + " " + lastname + " " + yearOfBirth)
        this.props.updateAuthor(this.state.id, name, lastname, yearOfBirth)
        this.closeUpdateDialog()
    }
    insertAuthor = (name, lastname, yearOfBirth) => {
        this.props.insertAuthor(name, lastname, yearOfBirth)
        this.closeAddDialog()
        this.setState({ name: '' })
        this.setState({ lastname: '' })
        this.setState({ yearOfBirth: '' })
    }

    render() {
        return (
            <div>
                <AuthorTable
                    authorsList={this.props.authorsList}
                    openDialogForDelete={this.openDialogForDelete}
                    openDialogForUpdate={this.openDialogForUpdate}
                    openAddDialog={this.openAddDialog}
                />

                <DeleteDialog
                    closeDeleteDialog={this.closeDeleteDialog}
                    showDeleteDialog={this.state.showDeleteDialog}
                    deleteAuthor={this.deleteAuthor} />

                <UpdateDialog
                    updateAuthor={this.updateAuthor}
                    name={this.state.name}
                    lastname={this.state.lastname}
                    yearOfBirth={this.state.yearOfBirth}
                    showUpdateDialog={this.state.showUpdateDialog}
                    closeUpdateDialog={this.closeUpdateDialog} />

                <InsertDialog
                    insertAuthor={this.insertAuthor}
                    showAddDialog={this.state.showAddDialog}
                    closeAddDialog={this.closeAddDialog} />
            </div>
        )
    }
}
