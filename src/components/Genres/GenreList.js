import React, { Component } from 'react'
import DeleteDialog from './DeleteDialog';
import InsertDialog from './InsertDialog';
import UpdateDialog from './UpdateDialog';
import GenreTable from './GenreTable';

export default class GenreList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            id: 0,
            genreName: ''
        };
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this)
        this.deleteGenre = this.deleteGenre.bind(this)
        this.closeUpdateDialog = this.closeUpdateDialog.bind(this)
        this.closeAddDialog = this.closeAddDialog.bind(this)
        this.openAddDialog = this.openAddDialog.bind(this)
    }

    openDialogForDelete = (genreID) => {
        this.setState({ showDeleteDialog: true })
        this.setState({ id: genreID })
    }

    openDialogForUpdate = (genre) => {
        this.setState({ genreName: genre.genreName })
        this.setState({ id: genre.genreID })
        this.setState({ showUpdateDialog: true })
    }

    openAddDialog() {
        this.setState({ showAddDialog: true })
    }

    closeDeleteDialog() {
        this.setState({ showDeleteDialog: false })
    }

    closeUpdateDialog() {
        this.setState({ showUpdateDialog: false })
        this.setState({ genreName: '' })
    }

    closeAddDialog() {
        this.setState({ showAddDialog: false })
    }

    deleteGenre() {
        this.props.deleteGenre(this.state.id)
        this.setState({ showDeleteDialog: false })
    }

    updateGenre = (genreName) => {
        this.props.updateGenre(genreName, this.state.id)
        this.setState({ showUpdateDialog: false })
        this.setState({ genreName: '' })
    }

    insertGenre = (genreName1) => {
        this.props.insertGenre(genreName1)
        this.setState({ showAddDialog: false })
        this.setState({ genreName: '' })
    }

    onChange(e) {
        this.setState({ genreName: e.target.value })
    }

    render() {
        return (
            <div>
                <GenreTable
                    openDialogForDelete={this.openDialogForDelete}
                    openDialogForUpdate={this.openDialogForUpdate}
                    openAddDialog={this.openAddDialog}
                    genreList={this.props.genreList} />
                <InsertDialog
                    insertGenre={this.insertGenre}
                    genreName={this.state.genreName}
                    showAddDialog={this.state.showAddDialog}
                    closeAddDialog={this.closeAddDialog} />
                <UpdateDialog
                    updateGenre={this.updateGenre}
                    genreName={this.state.genreName}
                    showUpdateDialog={this.state.showUpdateDialog}
                    closeUpdateDialog={this.closeUpdateDialog} />
                <DeleteDialog
                    deleteGenre={this.deleteGenre}
                    closeDeleteDialog={this.closeDeleteDialog}
                    showDeleteDialog={this.state.showDeleteDialog} />
            </div>
        )
    }
}




