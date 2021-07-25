import { useEffect, useState } from "react";
import NewHead from "../Header/HeaderTwo";
import EmployeeList from "./EmployeeList";
import EmployeeService from "./EmployeeService";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function EmployeeContainer() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getAllEmployees().then((data) => {
            setEmployees(data.data);
        })
    })

    const deleteEmployee = async (id) => {
        await EmployeeService.deleteEmployee(id)
            .then((data) => {

            })
            .catch(function (error) {
                toast.error("Recond can not be deleted!", { position: toast.POSITION.TOP_CENTER })
            })
    }

    const updateEmployee = (id, name, lastname, role, email, ssn, contact) => {
        EmployeeService.updateEmployee(id, name, lastname, role, email, ssn, contact)
    }

    const insertEmployee = (name, lastname, role, email, password, contact, ssn) => {
        EmployeeService.insertEmployee(name, lastname, role, email, password, contact, ssn)
    }
    return (
        <div className="login" style={{ backgroundColor: '#f2e6ff' }}>
            <NewHead />
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