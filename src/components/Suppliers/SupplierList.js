import React, { Component } from 'react'
import DeleteDialog from './DeleteDialog';
import InsertDialog from './InsertDialog';
import SupplierTable from './SupplierTable';
import UpdateDialog from './UpdateDialog';

export default class SupplierList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            id: 0,
            name: '',
            contact: 0,
            address: ''
        };
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this)
        this.deleteSupplier = this.deleteSupplier.bind(this)
        this.closeUpdateDialog = this.closeUpdateDialog.bind(this)
        this.closeAddDialog = this.closeAddDialog.bind(this)
        this.openAddDialog = this.openAddDialog.bind(this)
    }

    openDialogForDelete = (supplierID) => {
        this.setState({ showDeleteDialog: true })
        this.setState({ id: supplierID })
    }
    openDialogForUpdate = (supplier) => {
        this.setState({ name: supplier.companyName })
        this.setState({ contact: supplier.supplierContant })
        this.setState({ address: supplier.supplierAddress })
        this.setState({ id: supplier.supplierID })
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
    deleteSupplier() {
        this.props.deleteSupplier(this.state.id)
        this.setState({ showDeleteDialog: false })
    }
    updateSupplier = (name, contact, address) => {
        this.props.updateSupplier(this.state.id, name, contact, address)
        this.setState({ showUpdateDialog: false })
        this.clearAllFileds()
    }

    insertSupplier = (name, contact, address) => {
        this.props.insertSupplier(name, contact, address)
        this.setState({ showAddDialog: false })
        this.setState({ genreName: '' })
    }
    onChange(e) {
        this.setState({ genreName: e.target.value })
    }

    clearAllFileds() {
        this.setState({ name: '' })
        this.setState({ contact: 0 })
        this.setState({ address: '' })
    }
    render() {
        return (
            <div>
                <SupplierTable
                    openDialogForDelete={this.openDialogForDelete}
                    openDialogForUpdate={this.openDialogForUpdate}
                    openAddDialog={this.openAddDialog}
                    supplierList={this.props.supplierList} />

                <InsertDialog
                    insertSupplier={this.insertSupplier}
                    showAddDialog={this.state.showAddDialog}
                    closeAddDialog={this.closeAddDialog} />

                <UpdateDialog
                    updateSupplier={this.updateSupplier}
                    name={this.state.name}
                    contact={this.state.contact}
                    address={this.state.address}
                    showUpdateDialog={this.state.showUpdateDialog}
                    closeUpdateDialog={this.closeUpdateDialog} />

                <DeleteDialog
                    deleteSupplier={this.deleteSupplier}
                    closeDeleteDialog={this.closeDeleteDialog}
                    showDeleteDialog={this.state.showDeleteDialog} />
            </div>
        )
    }
}




