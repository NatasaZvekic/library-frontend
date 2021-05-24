import { useEffect, useState } from "react";
import NewHead from "../Header/Header";
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

    const updateEmployee = (id, name, lastname, role, email, ssn, contact) =>{
        EmployeeService.updateEmployee(id, name, lastname, role, email, ssn, contact)
    }

    const insertEmployee = (name, lastname, role, email, password, contact, ssn) => {
        EmployeeService.insertEmployee(name, lastname, role, email, password, contact, ssn)
    }
    return (
        <div> 
            <NewHead/>
            <EmployeeList
            employeesList={employees}
            deleteEmployee={deleteEmployee}
            updateEmployee={updateEmployee}
            insertEmployee={insertEmployee}
            />
        </div>
    )
}

export default EmployeeContainer