import React, { Component } from 'react'
import DeleteDialog from './DeleteDialog';
import UpdateDialog from './UpdateDialog';
import RentalTable from './RentalTable';
import UncompletedRentalsTable from './UncompletedRentalsTable'

export default class RentalList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            id: 0,
            employee: '',
            deliverer: '',
            showCompleted: 'none',
            showUnCompleted: 'block'
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
    openDialogForUpdate = (rental) => {
        this.setState({ employee: rental.employeeID })
        this.setState({ deliverer: rental.deliverID })
        this.setState({ id: rental.rentalID })
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

    showCompleted = () => {
        this.setState({ showCompleted: 'block' })
        this.setState({ showUnCompleted: 'none' })
    }
    showUnCompleted = () => {
        this.setState({ showCompleted: 'none' })
        this.setState({ showUnCompleted: 'block' })
    }
    updateRental = ( employeeID, deliveryID) => {
        this.props.updateRental(this.state.id, employeeID, deliveryID)
    }

    render() {
        return (
            <div>
                <div className="buttonsList">
                    <button onClick={this.showUnCompleted.bind(this)} className="btnUncompletedRentals">Uncompleted orders</button>
                    <button onClick={this.showCompleted.bind(this)} className="btnUncompletedRentals">Completed orders</button>
                </div>
                <RentalTable
                    showCompleted={this.state.showCompleted}
                    openDialogForDelete={this.openDialogForDelete}
                    openDialogForUpdate={this.openDialogForUpdate}
                    openAddDialog={this.openAddDialog}
                    completedRentals={this.props.completedRentals} />
                <UncompletedRentalsTable
                    showCompleted={this.state.showUnCompleted}
                    openDialogForDelete={this.openDialogForDelete}
                    openDialogForUpdate={this.openDialogForUpdate}
                    openAddDialog={this.openAddDialog}
                    completedRentals={this.props.uncompletedRentals}
                  
                    
                />
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
                <UpdateDialog
                    closeUpdateDialog={this.closeUpdateDialog}
                    showUpdateDialog={this.state.showUpdateDialog}
                    employeeList={this.props.employeeList}
                    deliveryList={this.props.deliveryList}
                    updateRental={this.updateRental}
                />
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




