import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const UpdateDialog = (props) => {
    const [employee, setEmployee] = useState('')
    const [deliverer, setDeliverer] = useState('')

    const changeEmployee = (employeeID) => {
        setEmployee(employeeID)
    }
    const changeDeliverer = (delivererID) => {
        setDeliverer(delivererID)
    }

    return (
        <Modal
            show={props.showUpdateDialog}
            backdrop="static"
            keyboard={false} >
            <Modal.Header >
                <Modal.Title>Complete rental</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div class="form-group">
                        <select
                            class="form-control"
                            onChange={(event) => changeEmployee(event.target.value)}
                            value={employee}
                        >
                            {props.employeeList.map((employee) => {
                                return (
                                    <option value={employee.employeeID}>{employee.employeeName} {employee.employeeLastName}</option>
                                )
                            })}

                        </select>
                    </div>
                    <div class="form-group">
                        <select
                            class="form-control"
                            onChange={(event) => changeDeliverer(event.target.value)}
                            value={deliverer}
                        >
                            {props.deliveryList.map((deliverer) => {
                                return (
                                    <option value={deliverer.deliveryID}>{deliverer.deliveryCompanyName}</option>

                                )
                            })}

                        </select>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.closeUpdateDialog} variant="secondary" > Close  </Button>
                <Button onClick={() => props.updateRental(
                    employee == "" ? props.employee : employee,
                    deliverer == "" ? props.deliverer : deliverer,
                )} variant="secondary" style={{ backgroundColor: '#f0ad4e', borderColor: '#f0ad4e' }}>Complete</Button>
            </Modal.Footer>
        </Modal>

    )
}
export default UpdateDialog