import React, { Component } from 'react'
import UpdateDialog from './UpdateDialog';
import DeleteDialog from './DeleteDialog';
import InsertDialog from './InsertDialog';
import DelivererTable from './DelivererTable';

export default class DelivererList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            companyName: '',
            address: '',
            contact: '',
            id: 0,
        };
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this)
        this.deleteDeliverer = this.deleteDeliverer.bind(this)
        this.closeUpdateDialog = this.closeUpdateDialog.bind(this)
        this.closeAddDialog = this.closeAddDialog.bind(this)
        this.openAddDialog = this.openAddDialog.bind(this)
        this.openDialogForUpdate = this.openDialogForUpdate.bind(this)
    }
    openDialogForDelete = (id) => {
        this.setState({ showDeleteDialog: true })
        this.setState({ id: id })
    }
    openDialogForUpdate = (deliverer) => {
        this.setState({ showUpdateDialog: true })
        this.setState({ id: deliverer.deliveryID })
        this.setState({ companyName: deliverer.deliveryCompanyName })
        this.setState({ address: deliverer.deliveryAddress })
        this.setState({ contact: deliverer.deliveryContant })
    }
    openAddDialog() {
        this.setState({ showAddDialog: true })
    }
    closeDeleteDialog() {
        this.setState({ showDeleteDialog: false })
    }
    closeUpdateDialog() {
        this.setState({ showUpdateDialog: false })
        this.clearAllFields()
    }
    closeAddDialog() {
        this.setState({ showAddDialog: false })
        this.clearAllFields()
    }
    deleteDeliverer() {
        this.props.deleteDeliverer(this.state.id)
        this.setState({ showDeleteDialog: false })
    }
    updateDeliverer = (companyName, address, contact) => {
        this.props.updateDeliverer(this.state.id, companyName, address, contact)
        this.setState({ showUpdateDialog: false })
        this.clearAllFields()
    }
    insertDeliverer = (companyName, address, contact) => {
        this.props.insertDeliverer(companyName, address, contact)
        this.closeAddDialog()
    }

    clearAllFields() {
        this.setState({ companyName: '' })
        this.setState({ address: '' })
        this.setState({ contact: '' })
    }
    render() {
        return (
            <div>
                <DelivererTable
                    deliverersList={this.props.deliverersList}
                    openDialogForDelete={this.openDialogForDelete}
                    openDialogForUpdate={this.openDialogForUpdate}
                    openAddDialog={this.openAddDialog} />

                <DeleteDialog
                    deleteDeliverer={this.deleteDeliverer}
                    closeDeleteDialog={this.closeDeleteDialog}
                    showDeleteDialog={this.state.showDeleteDialog} />

                <InsertDialog
                    showAddDialog={this.state.showAddDialog}
                    closeAddDialog={this.closeAddDialog}
                    insertDeliverer={this.insertDeliverer} />

                <UpdateDialog
                    closeUpdateDialog={this.closeUpdateDialog}
                    updateDeliverer={this.updateDeliverer}
                    showUpdateDialog={this.state.showUpdateDialog}
                    companyName={this.state.companyName}
                    contact={this.state.contact}
                    address={this.state.address} />
            </div>
        )
    }
}
