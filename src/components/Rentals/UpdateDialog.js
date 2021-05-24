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
                    <select style={{ marginLeft: '23px' }}
                        onChange={(event) => changeEmployee(event.target.value)}
                        value={employee}
                    >
                        {props.employeeList.map((employee) => {
                            return (
                                <option value={employee.employeeID}>{employee.employeeName} {employee.employeeLastName}</option>

                            )
                        })}

                    </select>
                    <br />
                    <select style={{ marginLeft: '23px' }}
                        onChange={(event) => changeDeliverer(event.target.value)}
                        value={deliverer}
                    >
                        {props.deliveryList.map((deliverer) => {
                            return (
                                <option value={deliverer.deliveryID}>{deliverer.deliveryCompanyName}</option>

                            )
                        })}

                    </select>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.closeUpdateDialog} variant="secondary" > Close  </Button>
                <Button onClick={() => props.updateRental(
                    employee == "" ? props.employee : employee,
                    deliverer == "" ? props.deliverer : deliverer,
                )} variant="primary">Complete</Button>
            </Modal.Footer>
        </Modal>

    )
}
export default UpdateDialog