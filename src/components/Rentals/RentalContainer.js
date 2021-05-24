import React, { useEffect, useState } from 'react'
import NewHead from '../Header/Header'
import RentalList from './RentalList';
import RentalService from './RentalService';
import EmployeeService from  '../Employees/EmployeeService'
import DeliveryService from '../Deliverers/DelivererService'

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
        EmployeeService.getAllEmployees().then((data)=>{
            setEmployees(data.data)
        })
        DeliveryService.getAllDeliverers().then((data)=>{
            setDeliverers(data.data)
        })
        
    })

    const deleteRental = (id) => {
        RentalService.deleteRental(id)
    }

    const updateRental = (id, deliveryID, employeeID) => {
        RentalService.updateRental(id, deliveryID, employeeID)
    }

 
    // const updateGenre = (genreName, genreID) =>{
    //    GenreService.updateGenre(genreName, genreID)
    // }
    // const insertGenre = (genreName) => {
    //     GenreService.insertGenre(genreName)
    // }

    return (
        <div className="login">
            <NewHead />
            <RentalList 
            completedRentals={completedRentals}
            uncompletedRentals={uncompletedRentals}
            deleteRental = {deleteRental}
            employeeList = {employees}
            deliveryList = {deliverers}
            updateRental = {updateRental}
            />
        </div>
    )
}

export default RentalContainer;
