import React, { Component } from 'react'
import DeleteDialog from './DeleteDialog';
import EmployeeTable from './EmployeeTable';
import InsertDialog from './InsertDialog';
import UpdateDialog from './UpdateDialog'

export default class EmployeeList extends Component {
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
            email: '',
            ssn: 0,
            role: '',
            password: ''
        };

        this.closeDeleteDialog = this.closeDeleteDialog.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)
        this.closeUpdateDialog = this.closeUpdateDialog.bind(this)
        this.closeAddDialog = this.closeAddDialog.bind(this)
        this.openAddDialog = this.openAddDialog.bind(this)
    }
    openDialogForDelete = (id) => {
        this.setState({ showDeleteDialog: true })
        this.setState({ id: id })
    }
    openDialogForUpdate = (employeeForUpdate) => {
        this.setState({ showUpdateDialog: true })
        this.setState({ id: employeeForUpdate.employeeID })
        this.setState({ name: employeeForUpdate.employeeName })
        this.setState({ lastname: employeeForUpdate.employeeLastName })
        this.setState({ role: employeeForUpdate.role })
        this.setState({ email: employeeForUpdate.email })
        this.setState({ ssn: employeeForUpdate.ssn })
        this.setState({ contact: employeeForUpdate.employeeContact })
        this.setState({ password: employeeForUpdate.password })
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

    updateEmployee = (name, lastname, role, email, ssn, contact) => {
        this.props.updateEmployee(this.state.id, name, lastname, role, email, ssn, contact)
        this.closeUpdateDialog()
    }

    deleteEmployee() {
        this.props.deleteEmployee(this.state.id)
        this.closeDeleteDialog()
    }

    insertEmployee = (name, lastname, role, email, password, contact, ssn) => {
        this.props.insertEmployee(name, lastname, role, email, password, contact, ssn)
        this.closeAddDialog()
    }

    onChange(e) {
        if (e.target.name == "contact" || e.target.name == "ssn") {
            this.setState({ [e.target.name]: +e.target.value })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    clearAllFields() {
        this.setState({ id: 0 })
        this.setState({ name: '' })
        this.setState({ lastname: '' })
        this.setState({ role: '' })
        this.setState({ email: '' })
        this.setState({ ssn: 0 })
        this.setState({ password: '' })
        this.setState({ contact: 0 })
    }
    render() {
        return (
            <div>
                <EmployeeTable
                    openAddDialog={this.openAddDialog}
                    openDialogForDelete={this.openDialogForDelete}
                    openDialogForUpdate={this.openDialogForUpdate}
                    employeesList={this.props.employeesList} />

                <DeleteDialog
                    deleteEmployee={this.deleteEmployee}
                    closeDeleteDialog={this.closeDeleteDialog}
                    showDeleteDialog={this.state.showDeleteDialog} />

                <InsertDialog
                    insertEmployee={this.insertEmployee}
                    showAddDialog={this.state.showAddDialog}
                    closeAddDialog={this.closeAddDialog} />

                <UpdateDialog
                    updateEmployee={this.updateEmployee}
                    name={this.state.name}
                    lastname={this.state.lastname}
                    role={this.state.role}
                    email={this.state.email}
                    address={this.state.address}
                    ssn={this.state.ssn}
                    contact={this.state.contact}
                    showUpdateDialog={this.state.showUpdateDialog}
                    closeUpdateDialog={this.closeUpdateDialog} />
            </div>
        )
    }
}
