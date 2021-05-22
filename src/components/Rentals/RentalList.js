import React, { Component } from 'react'
import DeleteDialog from './DeleteDialog';
import InsertDialog from './InsertDialog';
import UpdateDialog from './UpdateDialog';
import RentalTable from './RentalTable';

export default class RentalList extends Component {
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
        this.deleteRental = this.deleteRental.bind(this)
        this.closeUpdateDialog = this.closeUpdateDialog.bind(this)
        this.closeAddDialog = this.closeAddDialog.bind(this)
        this.openAddDialog = this.openAddDialog.bind(this)
    }

    openDialogForDelete = (id) => {
        this.setState({ showDeleteDialog: true })
        this.setState({ id: id })
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
    deleteRental() {
        this.props.deleteRental(this.state.id)
        this.setState({ showDeleteDialog: false })
    }
    // updateGenre = (genreName) => {
    //     this.props.updateGenre(genreName, this.state.id)
    //     this.setState({ showUpdateDialog: false })
    //     this.setState({ genreName: '' })
    // }
    // insertGenre = (genreName1) => {
    //     this.props.insertGenre(genreName1)
    //     this.setState({ showAddDialog: false })
    //     this.setState({ genreName: '' })
    // }
    // onChange(e) {
    //     this.setState({ genreName: e.target.value })
    // }

    render() {
        return (
            <div>
                <RentalTable
                    openDialogForDelete={this.openDialogForDelete}
                    openDialogForUpdate={this.openDialogForUpdate}
                    openAddDialog={this.openAddDialog}
                    rentalList={this.props.rentalList} />
                {/* <rentalList
                    insertGenre={this.insertGenre}
                    genreName={this.state.genreName}
                    showAddDialog={this.state.showAddDialog}
                    closeAddDialog={this.closeAddDialog} />
                <UpdateDialog
                    updateGenre={this.updateGenre}
                    genreName={this.state.genreName}
                    showUpdateDialog={this.state.showUpdateDialog}
                    closeUpdateDialog={this.closeUpdateDialog} /> */}
                <DeleteDialog
                    deleteRental={this.deleteRental}
                    closeDeleteDialog={this.closeDeleteDialog}
                    showDeleteDialog={this.state.showDeleteDialog} /> 
                    {/* <InsertDialog
                    usersList={this.props.usersList}
                    /> */}
            </div>
        )
    }
}




