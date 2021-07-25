import React, { Component } from 'react'
import DeleteDialog from './DeleteDialog';
import InsertDialog from './InsertDialog';
import UpdateDialog from './UpdateDialog';
import UserTable from './UserTable';

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteDialog: false,
            showUpdateDialog: false,
            showAddDialog: false,
            id: 0,
            name: '',
            lastname: '',
            contact: 0,
            address: '',
            role: '',
            userName: '',
            password: ' '
        };
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.closeUpdateDialog = this.closeUpdateDialog.bind(this)
        this.closeAddDialog = this.closeAddDialog.bind(this)
        this.openAddDialog = this.openAddDialog.bind(this)
    }

    openDialogForDelete = (id) => {
        this.setState({ showDeleteDialog: true })
        this.setState({ id: id })
    }
    openDialogForUpdate = (user) => {
        this.setState({ id: user.userID })
        this.setState({ name: user.name })
        this.setState({ lastname: user.userLastName })
        this.setState({ role: user.role })
        this.setState({ userName: user.userName })
        this.setState({ address: user.userAddress })
        this.setState({ contact: user.userContact })
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
    deleteUser() {
        this.props.deleteUser(this.state.id)
        this.setState({ showDeleteDialog: false })
    }
    updateUser = (name, lastname, contact, address, email, role) => {
        console.log("role " + role)
        this.props.updateUser(this.state.id, name, lastname, contact, address, email, role)
        this.setState({ showUpdateDialog: false })
    }
    insertUser = (name, lastname, contact, address, email, role, password) => {
        this.props.insertUser(name, lastname, contact, address, email, role, password)
        this.setState({ showAddDialog: false })
    }

    render() {
        return (
            <div>
                <UserTable
                    openDialogForDelete={this.openDialogForDelete}
                    openDialogForUpdate={this.openDialogForUpdate}
                    openAddDialog={this.openAddDialog}
                    userList={this.props.userList} />

                <InsertDialog
                    insertUser={this.insertUser}
                    showAddDialog={this.state.showAddDialog}
                    closeAddDialog={this.closeAddDialog} />

                <UpdateDialog
                    updateUser={this.updateUser}
                    name={this.state.name}
                    lastname={this.state.lastname}
                    role={this.state.role}
                    userName={this.state.userName}
                    address={this.state.address}
                    contact={this.state.contact}
                    showUpdateDialog={this.state.showUpdateDialog}
                    closeUpdateDialog={this.closeUpdateDialog} />

                <DeleteDialog
                    deleteUser={this.deleteUser}
                    closeDeleteDialog={this.closeDeleteDialog}
                    showDeleteDialog={this.state.showDeleteDialog} />
            </div>
        )
    }
}




