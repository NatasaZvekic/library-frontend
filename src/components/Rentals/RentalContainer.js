import React, { useEffect, useState } from 'react'
import NewHead from '../Header/HeaderTwo'
import RentalList from './RentalList';
import RentalService from './RentalService';
import EmployeeService from '../Employees/EmployeeService'
import DeliveryService from '../Deliverers/DelivererService'
import background from '../assets/photo/unnamed.jpg'

function RentalContainer() {
    const [completedRentals, setCompletedRentals] = useState([]);
    const [uncompletedRentals, setUncompletedRentals] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [deliverers, setDeliverers] = useState([]);

    useEffect(() => {
        RentalService.getAllCompletedRentals().then((data) => {
            setCompletedRentals(data.data);
        })
        RentalService.getAllUncompletedRentals().then((data) => {
            setUncompletedRentals(data.data);
        })
        EmployeeService.getAllEmployees().then((data) => {
            setEmployees(data.data)
        })
        DeliveryService.getAllDeliverers().then((data) => {
            setDeliverers(data.data)
        })

    })

    const deleteRental = (id) => {
        RentalService.deleteRental(id)
    }

    const updateRental = (id, deliveryID, employeeID, bookID, userID) => {
        RentalService.updateRental(id, deliveryID, employeeID, bookID, userID)

    }

    return (
        <div className="login" style={{ backgroundColor: '#f2e6ff' }}>
            <NewHead />
            <RentalList
                completedRentals={completedRentals}
                uncompletedRentals={uncompletedRentals}
                deleteRental={deleteRental}
                employeeList={employees}
                deliveryList={deliverers}
                updateRental={updateRental}
            />
        </div>
    )
}

export default RentalContainer;
