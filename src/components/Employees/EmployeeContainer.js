import { useEffect, useState } from "react";
import NewHead from "../Header/NewHead";
import EmployeeList from "./EmployeeList";
import EmployeeService from "./EmployeeService";

function EmployeeContainer(){

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getAllEmployees().then((data) => {
            setEmployees(data.data);
        })
    })

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id)
    }

    const updateDeliverer = (password,id, name, lastname, role, email, contact, ssn) =>{
        EmployeeService.updateDeliverer(password,id, name, lastname, role, email, contact, ssn)
    }

    const insertEmployee = (password, name, lastname, role, email, contact, ssn) => {
        EmployeeService.insertEmployee(password, name, lastname, role, email, contact, ssn)
    }
    return (
        <div> 
            <NewHead/>
            <EmployeeList
            employeesList={employees}
            deleteEmployee={deleteEmployee}
            updateDeliverer={updateDeliverer}
            insertEmployee={insertEmployee}
            />
        </div>
    )
}

export default EmployeeContainer